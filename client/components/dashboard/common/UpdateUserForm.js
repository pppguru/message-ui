import React, { Component } from 'react'
import { reduxForm, change } from 'redux-form'
import { connect } from 'react-redux'
import Loader from '../common/Loader'
import Dropzone from 'react-dropzone'
import IntlTelInput from 'react-intl-tel-input'
import AvatarCropper from 'react-avatar-cropper'
import * as api from '../../../utils/api'
import { setLastUpdated } from 'reducers/authReducer'

export const fields = [
	'firstName',
	'lastName',
	'phone',
	'phoneFormatted',
	'phonePrefixCountryIso',
	'phonePrefix',
	'street',
	'city',
	'country',
	'zip',
	'region',
	'profileImageUrl'
]

const validate = (values) => {
	const errors = {}

	return errors
}

@reduxForm({
  form: 'UpdateUserForm',
  fields,
  validate
})

@connect(
	() => ({}),
	{ change, setLastUpdated }
)

export default class UpdateUserForm extends Component {
	constructor(props) {
		super(props)

		this.clearFiles = this.clearFiles.bind(this)
		this.geoIpLookup = this.geoIpLookup.bind(this)
		this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
		this.onDrop = this.onDrop.bind(this)
		this.closeCropModal = this.closeCropModal.bind(this)
		this.handleCrop = this.handleCrop.bind(this)

		this.state = {
			files: [],
			editedImg: false,
			isCropping: false,
			mimeType: null
		}
	}

	onDrop(files) {
		this.setState({ 
			files: files,
			isCropping: true,
			mimeType: files[0].type
		})
	}

	closeCropModal() {
		this.setState({ isCropping: false, files: [] })
	}

	clearFiles() {
		this.setState({ files: [] })
	}

	geoIpLookup(callback) {
		api.geoIpLookup()
			.then((response) => {
				callback(response)
			})
	}

	onPhoneNumberChange(status, value, countryData, number, id) {
		this.props.change('UpdateUserForm', 'phone', value)
		this.props.change('UpdateUserForm', 'phoneFormatted', number)
		this.props.change('UpdateUserForm', 'phonePrefixCountryIso', countryData.iso2)
		this.props.change('UpdateUserForm', 'phonePrefix', countryData.dialCode)
	}

	handleCrop(dataURI) {
		this.setState({ isCropping: false })

		api.getUserImageUrl(this.props.token, this.state.mimeType)
			.then((response) => {
				const uploadUrl = response.uploadUrl
				const imageUrl = response.imageUrl

				api.uploadBase64Image(dataURI, uploadUrl)
					.then((response) => {
						const files = []
						files[0] = {}
						files[0].preview = imageUrl

						this.setState({
							files: files
						})

						this.props.setLastUpdated()
					})
			})
			.catch((err) => {
				console.log('didnt get image url', err.message)
			})			
	}

	render() {
		const {
			fields: {
				firstName,
				lastName,
				phone,
				phonePrefixCountryIso,
				phonePrefix,
				street,
				city,
				country,
				zip,
				region,
				profileImageUrl
			}, 
			handleSubmit,
			hideForm,
			isSubmitting
		} = this.props

		const previewImg = profileImageUrl.value && profileImageUrl.value
		
		if (previewImg && !this.state.editedImg) {
			this.state.files = [{ preview: previewImg }]
			this.state.editedImg = true
		}

		return (
			<form className="form form--fullscreen form--edit-customer" onSubmit={handleSubmit}>
				<button type="button" className="form__close" onClick={hideForm}>&times;</button>

				<div className="form__content">
					<div className="form__column">
						<div className="input--user-image">
							{this.state.files.length > 0 
								? <div className="dropzone__image" onClick={this.clearFiles}>
										<div>{this.state.files.map((file, index) => <img key={index} src={file.preview} /> )}</div>
									</div>
								: <div className="dropzone">
										<Dropzone 
											onDrop={file => this.onDrop(file)}>
											<div className="dropzone__body"><i className="mu mu-camera"></i></div>
										</Dropzone>
									</div>
							}

							{this.state.isCropping &&
								<AvatarCropper
									onRequestHide={this.closeCropModal}
									cropperOpen={this.state.isCropping}
									onCrop={this.handleCrop}
									image={this.state.files[0].preview}
									width={300}
									height={300}
								/>
							}
						</div>
					</div>
					<div className="form__column">
						<div className="form__row">
							<div className="form__group">
								<label htmlFor="input-firstName">First Name</label>
								<input id="input-firstName" type="text" className="input input--text" placeholder="First Name" {...firstName} />
							</div>
						</div>

						<div className="form__row">
							<div className="form__group">
								<label htmlFor="input-lastName">Last Name</label>
								<input id="input-lastName" type="text" className="input input--text" placeholder="Last Name" {...lastName} />
							</div>
						</div>

						<div className="form__row">
							<div className="form__group">
								<label htmlFor="input-phone">Phone</label>
								<IntlTelInput
									id="input-phone"
									autoFormat={false}
									defaultCountry={phonePrefixCountryIso.initialValue}
									geoIpLookup={this.geoIpLookup}
									css={['intl-tel-input', 'input input--text']} 
									style={{ width: 100 }}
									utilsScript="libphonenumber.js"
									onPhoneNumberChange={this.onPhoneNumberChange}
									{...phone} />
							</div>
						</div>
					</div>
				</div>

				<div className="form__content form__content--address">
					<div className="form__column">
						<div className="form__row form__row--center">
							<div className="form__group">
								<label htmlFor="input-street">Street</label>
								<input id="input-street" type="text" className="input input--text" placeholder="Street" {...street} />
							</div>
						</div>

						<div className="form__row form__row--center">
							<div className="form__group">
								<label htmlFor="input-city">City</label>
								<input id="input-city" type="text" className="input input--text" placeholder="City" {...city} />
							</div>
						</div>

						<div className="form__row form__row--center">
							<div className="form__group">
								<label htmlFor="input-country">Country</label>
								<input id="input-country" type="text" className="input input--text" placeholder="Country" {...country} />
							</div>
						</div>
					</div>

					<div className="form__column">
						<div className="form__row">
							<div className="form__group">
								<label htmlFor="input-zip">ZIP</label>
								<input id="input-zip" type="text" className="input input--text" placeholder="ZIP" {...zip} />
							</div>
						</div>

						<div className="form__row">
							<div className="form__group">
								<label htmlFor="input-region">Region</label>
								<input id="input-region" type="text" className="input input--text" placeholder="Region" {...region} />
							</div>
						</div>
					</div>
				</div>

				<div className="form__footer" style={{ marginTop: 40 }}>
					<button type="submit" className="btn btn--alpha form__submit" style={{ width: 150 }}>{(isSubmitting) ? <Loader type={'button'} /> : 'Update info'}</button>
				</div>
			</form>
		)
	}
}