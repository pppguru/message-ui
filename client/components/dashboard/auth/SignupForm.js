import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, change } from 'redux-form'
import Loader from '../common/Loader'
import IntlTelInput from 'react-intl-tel-input'

const FORM_NAME = 'signup'

export const fields = [
	'firstName',
	'lastName',
	'orgName',
	'email',
	'phone',
	'phoneFormatted',
	'phonePrefixCountryIso',
	'phonePrefix',
	'password'
]

const validate = (values) => {
	let errors = {}

	if (!values.firstName) {
		errors.firstName = 'Required'
	}

	if (!values.lastName) {
		errors.lastName = 'Required'
	}

	if (!values.orgName) {
		errors.orgName = 'Required'
	}

	if (!values.phone) {
		errors.phone = 'Required'
	}

	if (!values.email) {
		errors.email = 'Required'
	}

	if (!values.password || values.password.length < 5) {
		errors.password = 'Required'
	}

	return errors
}

@reduxForm({
  form: 'SignupForm',
  fields,
  validate
})

@connect(
	() => ({}),
	{ change }
)

export default class SignupForm extends Component {
	constructor(props) {
		super(props)

		this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
	}

	geoIpLookup(callback) {
		api.geoIpLookup()
			.then((response) => {
				callback(response)
			})
	}

	onPhoneNumberChange(status, value, countryData, number, id) {
		this.props.change('SignupForm', 'phone', value)
		this.props.change('SignupForm', 'phoneFormatted', number)
		this.props.change('SignupForm', 'phonePrefixCountryIso', countryData.iso2)
		this.props.change('SignupForm', 'phonePrefix', countryData.dialCode)
	}

	render() {
		const {
			fields: {
				firstName,
				lastName,
				orgName,
				email,
				phone,
				phonePrefixCountryIso,
				phonePrefix,
				password
			},
			handleSubmit,
			isSubmitting,
			errorMessage,
			setTab
		} = this.props

		return (
			<form onSubmit={handleSubmit}>
				<div className={(firstName.touched && firstName.error) ? 'auth__input-group auth__input-group--error' : 'auth__input-group'}>
					<input
						type="text"
						id="firstName"
						placeholder="First Name"
						className={(firstName.value && firstName.value.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...firstName } />

					<label htmlFor="firstName" className="auth__label">First Name</label>
				</div>


				<div className={(lastName.touched && lastName.error) ? 'auth__input-group auth__input-group--error' : 'auth__input-group'}>
					<input
						type="text"
						id="lastName"
						placeholder="Last Name"
						className={(lastName.value && lastName.value.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...lastName } />

					<label htmlFor="lastName" className="auth__label">Last Name</label>
				</div>

				<div className={(orgName.touched && orgName.error) ? 'auth__input-group auth__input-group--error' : 'auth__input-group'}>
					<input
						type="text"
						id="orgName"
						placeholder="business"
						className={(orgName.value && orgName.value.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...orgName } />

					<label htmlFor="orgName" className="auth__label">Business</label>
				</div>

				<div className={(email.touched && email.error) ? 'auth__input-group auth__input-group--error' : 'auth__input-group'}>
					<input
						type="email"
						id="email"
						placeholder="example@domain.com"
						className={(email.value && email.value.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...email } />

					<label htmlFor="email" className="auth__label">Email</label>
				</div>

				<div className={(phone.touched && phone.error) ? 'auth__input-group auth__input-group--error' : 'auth__input-group'}>
						<IntlTelInput
							id="phone"
							autoFormat={false}
							defaultCountry={phonePrefixCountryIso.initialValue}
							geoIpLookup={this.geoIpLookup}
							css={['intl-tel-input', (phone.value && phone.value.length > 0) ? "auth__input auth__input--filled" : "auth__input"]} 
							style={{ width: 100 }}
							utilsScript="libphonenumber.js"
							onPhoneNumberChange={this.onPhoneNumberChange}
							{...phone} />

					<label htmlFor="phone" className="auth__label" style={{ position: 'absolute', top: 0 }}>Phone</label>
				</div>

				<div className={(password.touched && password.error) ? 'auth__input-group auth__input-group--error' : 'auth__input-group'}>
					<input
						type="password"
						id="password"
						placeholder="password (min. 5 characters)"
						className={(password.value && password.value.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...password } />

					<label htmlFor="password" className="auth__label">Password</label>
				</div>

				{ errorMessage ? <div className="auth__error"><p>{errorMessage}</p></div> : null }

				<button type="submit" className="auth__submit">{(isSubmitting) ? <Loader type={'button'} /> : 'Sign up'}</button>
			</form>
		)
	}
}