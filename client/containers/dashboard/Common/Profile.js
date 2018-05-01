import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import * as api from 'utils/api'
import { updateProfile, setLastUpdated } from 'reducers/authReducer'
import { putUser } from 'reducers/usersReducer'
import UpdateUserForm from 'components/dashboard/common/UpdateUserForm'
import ChangeUserPasswordForm from 'components/dashboard/common/ChangeUserPasswordForm'
import SuccessMessage from 'components/dashboard/common/SuccessMessage'
import {
	hideForm,
	clearForm,
	putFormData,
	submit,
	submitSuccess,
	submitError,
	setStep,
	setError,
	clearError
} from 'reducers/formsReducer'

@connect((state) => ({
	auth: state.auth,
	isVisible: state.forms['profile'].isVisible,
	step: state.forms['profile'].step,
	updateUser: {
		isSubmitting: state.forms['updateUser'].isSubmitting,
		message: state.forms['updateUser'].message,
		formData: state.forms['updateUser'].data
	},
	changeUserPassword: {
		isSubmitting: state.forms['changeUserPassword'].isSubmitting,
		message: state.forms['changeUserPassword'].message,
		errorMessage: state.forms['changeUserPassword'].errorMessage
	}
}), {
	hideForm,
	clearForm,
	putFormData,
	submit,
	submitSuccess,
	submitError,
	setStep,
	updateProfile,
	setError,
	clearError,
	putUser,
	setLastUpdated
})

export default class Profile extends Component {
	constructor(props) {
		super(props)

		this.handleUpdateInfo = this.handleUpdateInfo.bind(this)
		this.editUser = this.editUser.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.getUser = this.getUser.bind(this)
		this.hideForm = this.hideForm.bind(this)
		this.putImage = this.putImage.bind(this)

		this.state = {
			image: null 
		}
	}

	componentDidMount() {
		this.getUser()

		this.props.setStep('profile', 'updateUserForm')
	}

	getUser() {
		const token = this.props.auth.accessToken

		api.loadUser('me', token)
			.then((user) => {
				this.props.updateProfile(user)

				for (let k in user.address) {
					user[k] = user.address[k]
				}

				delete user.address
				
				if (user.phonePrefix) {
					user.phone = user.phone.replace('+' + user.phonePrefix, '')
				}

				this.props.putFormData('updateUser', user)
			})
			.catch((err) => {
				console.log('REFRESH USER ERR', err)
			})
	}

	handleUpdateInfo(model) {
		this.props.submit('updateUser')

		const userId = this.props.updateUser.formData.id
		const token = this.props.auth.accessToken

		const data = {
			firstName: model.firstName,
			lastName: model.lastName,
			phone: model.phoneFormatted,
			phonePrefixCountryIso: model.phonePrefixCountryIso,
			phonePrefix: model.phonePrefix,
			address: {
				country: model.country,
				region: model.region,
				city: model.city,
				street: model.street,
				zip: model.zip,
			}
		}

		this.editUser(userId, data, token)
	}

	editUser(userId, data, token) {
		api.editUser(userId, data, token)
			.then((response) => {
				this.getUser()

				const user = {
					key: response.id,
					value: response
				}

				this.props.putUser(user)

				this.forceUpdate()

				const message = 'Profile updated.'

				this.props.submitSuccess('updateUser', message)

				this.props.setStep('profile', 'updateUserSuccess')

				this.getUser()

				this.props.setLastUpdated()

				setTimeout(() => {
					this.hideForm()

					this.setState({ image: null })
				}, 2000)
			})
			.catch((err) => {
				console.log('UPDATE USER ERR', err)
			})
	}

	handlePasswordChange(model) {
		this.props.submit('changeUserPassword')

		const data = {
			currentPassword: model.oldPassword,
			password: model.newPassword
		}

		const userId = this.props.updateUser.formData.id
		const token = this.props.auth.accessToken
		
		api.editUser(userId, data, token)
			.then((response) => {
				this.getUser()

				const message = 'Password changed.'

				this.props.submitSuccess('changeUserPassword', message)

				this.props.setStep('profile', 'changeUserPasswordSuccess')

				setTimeout(() => {
					this.hideForm()
				}, 2000)
			})
			.catch((err) => {
				if (err.status == 400) {
					const message = 'The old password does not match.'

					this.props.setError('changeUserPassword', message)

					this.props.submitError('changeUserPassword', message, 'changeUserPasswordForm')

					this.forceUpdate
				} else {
					console.log('UPDATE USER PASSWORD ERR', err)
				}
			})
	}

	putImage(image, mimeType) {
		this.setState({ image: image, mimeType: mimeType })
	}

	hideForm() {
		this.props.clearForm('changeUserPassword')		
		this.props.clearError('changeUserPassword')

		this.props.setStep('profile', 'updateUserForm')

		this.props.hideForm('profile')
	}

	render() {
		const {
			isVisible,
			step,
			updateUser,
			changeUserPassword,
			setStep
		} = this.props

		let page
		let tabs

		switch (step) {
			case 'updateUserForm':
				page = <UpdateUserForm
								key="updateUserForm"
								token={this.props.auth.accessToken}
								userId={this.props.auth.profile.id}
								putImage={this.putImage}
								hideForm={this.hideForm}
								onSubmit={this.handleUpdateInfo}
								initialValues={updateUser.formData}
								isSubmitting={updateUser.isSubmitting} />

				break

			case 'updateUserSuccess':
				page = <SuccessMessage
								key="updateUserSuccess"
								hideForm={this.hideForm}
								message={updateUser.message} />
				break

			case 'changeUserPasswordForm':
				page = <ChangeUserPasswordForm
								key="changeUserPasswordForm"
								hideForm={this.hideForm}
								onSubmit={this.handlePasswordChange}
								initialValues={changeUserPassword.formData}
								isSubmitting={changeUserPassword.isSubmitting}
								errorMessage={changeUserPassword.errorMessage} />

				break

			case 'changeUserPasswordSuccess':
				page = <SuccessMessage
								key="changeUserPasswordSuccess"
								hideForm={this.hideForm}
								message={changeUserPassword.message} />

				break
		}

		return (
			<Modal isOpen={isVisible} className={{}} overlayClassName={{}} onRequestClose={this.hideForm}>
				{(step == 'updateUserForm' || step == 'changeUserPasswordForm') && 
					<div className="form__header">
						<div className="form__tabs">
							<button type="button" className={step == 'updateUserForm' ? 'form__tab form__tab--active' : 'form__tab'} onClick={() => { setStep('profile', 'updateUserForm') }}>Update profile</button>
							<button type="button" className={step == 'changeUserPasswordForm' ? 'form__tab form__tab--active' : 'form__tab'} onClick={() => { setStep('profile', 'changeUserPasswordForm') }}>Change password</button>
						</div>
					</div>
				}

				{/* TODO <ReactCSSTransitionGroup transitionName="cross-fade" transitionEnterTimeout={3000} transitionLeaveTimeout={300}> */ }
					{page}
				{/* </ReactCSSTransitionGroup> */ }
			</Modal>
		)
	}
}