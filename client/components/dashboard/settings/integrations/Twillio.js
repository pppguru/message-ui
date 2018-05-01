import React, { Component } from 'react'
import * as api from '../../../../utils/api'
import { connect } from 'react-redux'
import Loader from '../../common/Loader'
import _ from 'lodash'
import { setTwilioNumber } from '../../../../reducers/organizationReducer'

@connect((state) => ({
	auth: state.auth,
	phone: state.organization.details.phone,
	twilioNumber: state.organization.details.twilio && state.organization.details.twilio.phone
}), {
	setTwilioNumber
})

export default class Twillio extends Component {

	constructor(props) {
		super(props)

		this.state = {
			selectedCountry: null,
			countries: null,
			areaCodes: null,
			phoneNumbers: null,
			selectedNumber: null,
			loading: true,
			loadingNumbers: false,
			loadingAreaCodes: false,
			saving: false
		}
	}

	getTwillioNumbers() {
		api.getTwillioCountryCode(this.props.auth.accessToken)
			.then((response) => {
				this.setCountries(response.data)
			})
			.catch((err) => {
				console.log('GET TWILLIO getTwillioNumbers ERR', err)
			})
	}

	getAreaCodes(e) {
		this.setState({ 
			loadingAreaCodes: true,
			areaCodes: null,
			selectedCountry: e.currentTarget.value, 
			phoneNumbers: null, 
			selectedNumber: null 
		})

		api.getTwillioAreaCode(this.props.auth.accessToken, e.currentTarget.value)
			.then((response) => {
				if (response.data.length == 0) {
					this.setState({ hasAreaCodes: false, loadingAreaCodes: false })

					this.getPhoneNumbers(null)
				} else {
					this.setAreaCodes(response.data)
				}
			})
			.catch((err) => {
				console.log('GET TWILLIO getAreaCodes ERR', err)
			})
	}

	setCountries(countries) {
		this.setState({ countries, loading: false })
	}

	setAreaCodes(areaCodes) {
		this.setState({ areaCodes, loading: false, loadingNumbers: false, loadingAreaCodes: false, hasAreaCodes: true })
	}

	setPhoneNumbers(phoneNumbers) {
		this.setState({ phoneNumbers, loading: false, loadingNumbers: false  })
	}

	componentDidMount() {
		this.getTwillioNumbers()
	}

	getPhoneNumbers(e) {
		const areaCode = e ? e.currentTarget.value : null

		this.setState({ loadingNumbers: true, selectedNumber: null })
		api.getTwillioPhoneNumbers(this.props.auth.accessToken, this.state.selectedCountry, areaCode)
			.then((response) => {
				this.setPhoneNumbers(response.data)
			})
			.catch((err) => {
				console.log('GET TWILLIO getAreaCodes ERR', err)
			})
	}

	selectPhoneNumber(e) {
		this.setState({ selectedNumber: e.currentTarget.value})
	}

	saveTwillioNumber() {
		api.savetwillioNumber( this.props.auth.profile.organizationId, this.state.selectedNumber ,this.props.auth.accessToken)
			.then((response) => {
				this.props.setTwilioNumber(this.state.selectedNumber)
				this.setState({
					selectedNumber: null,
					countries: null
				})
			})
			.catch((err) => {
				this.props.setTwilioNumber(this.state.selectedNumber)
				this.setState({
					selectedNumber: null,
					countries: null
				})
				console.log('SAVE TWILLIO saveTwillioNumber ERR', err)
			})
	}

	render() {
		return (
			<div className="form form--horizontal">
				<div className="form__content">
					<div className="form__row">
						<div className="form__group form__group--flex">
							<label className="form__label--fixed">Choose a country</label>
							{this.state.loading && <Loader />}
							{!this.state.loading && this.props.twilioNumber &&
								<div className="gateway-status">
									<div className="gateway-icon"><i className="mu mu-check-tick"></i></div>
									<p>Assigned Phone {this.props.twilioNumber}</p>
								</div>
							}

							{!this.props.twilioNumber && !this.state.loading && this.state.countries &&
								<select onChange={(e) => {this.getAreaCodes(e)}} defaultValue="none" className="input input--select input--grow">
									<option value="none" disabled>Please choose</option>
									{this.state.countries && this.state.countries.map((country, index) => {
										return (
											<option key={index} value={country.countryCode}>{country.name}</option>
										)
									})}
								</select>
							}
						</div>
					</div>

					<div className="form__row">
					{!this.props.twilioNumber && this.state.areaCodes &&
						<div className="form__group form__group--flex">
							<label className="form__label--fixed"></label>
							{this.state.loadingAreaCodes && <Loader />}
							{!this.state.loading && this.state.areaCodes && !this.props.twilioNumber &&
								<select onChange={(e) => this.getPhoneNumbers(e)} defaultValue="none" className="input input--select input--grow">
									<option value="none" disabled>Please choose</option>
									{this.state.areaCodes && this.state.areaCodes.map((method, index) => {
										return (
											<option key={index} value={method.areaCode}>{method.name} ({method.areaCode})</option>
										)
									})}
								</select>
							}
						</div>
					}
					</div>

					<div className="form__row">
						{!this.props.twilioNumber
							?	<div className="form__group form__group--flex">
									<label className="form__label--fixed"></label>
									{this.state.loadingNumbers && <Loader />}
									{!this.state.loadingNumbers && !this.props.twilioNumber && this.state.phoneNumbers && this.state.phoneNumbers.length > 0 &&
										<select onChange={(e) => this.selectPhoneNumber(e)} defaultValue="none" className="input input--select input--grow">
											<option value="none" disabled>Select phone number</option>
											{this.state.phoneNumbers && this.state.phoneNumbers.map((method, index) => {
												return (
													<option key={index} value={method.phone_number}>{method.friendlyName}</option>
												)
											})}
										</select>
									}

									{!this.state.loadingNumbers && !this.props.twilioNumber && this.state.phoneNumbers && this.state.phoneNumbers.length == 0 &&
										<span>Zero results, please choose different Province or Territory</span>
									}

								</div>
							: null
						}
					</div>

					{this.state.selectedNumber &&
						<div>
							<div className="form__row">
								<div className="form__group form__group--flex">
									<label className="form__label--fixed"></label>
									<div>
										<span>Selected Number: <strong>{this.state.selectedNumber}</strong></span>
									</div>
								</div>
							</div>

							<div className="form__row">
								<div className="form__group form__group--flex">
									<label className="form__label--fixed"></label>
									<div>
										<button onClick={() => this.saveTwillioNumber()} type="submit" className="btn btn--alpha form__submit">{this.state.saving ? 'Saving...' : 'Save' }</button>
									</div>
								</div>
							</div>
						</div>
					}

				</div>
			</div>
		)
	}
}
