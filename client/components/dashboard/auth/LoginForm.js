import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Loader from '../common/Loader'

const FORM_NAME = 'login'

export const fields = [
	'email',
	'password'
]

const validate = (values) => {
	let errors = {}

	if (!values.email) {
		errors.email = 'Required'
	}

	if (!values.password) {
		errors.password = 'Required'
	}

	return errors
}

class LoginForm extends Component {
	render() {
		const {
			fields: {
				email,
				password
			},
			handleSubmit,
			isSubmitting,
			errorMessage,
			setTab
		} = this.props

		return (
			<form onSubmit={handleSubmit}>
				<div className="auth__input-group">
					<input
						type="email"
						id="email"
						placeholder="example@domain.com"
						className={(email.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...email } />

					<label htmlFor="email" className="auth__label">Email</label>
				</div>

				<div className="auth__input-group">
					<input
						type="password"
						id="password"
						placeholder="password"
						className={(password.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...password } />

					<label htmlFor="password" className="auth__label">Password</label>
				</div>

				{ errorMessage ? <div className="auth__error"><p>{errorMessage}</p></div> : null }

				<button type="submit" className="auth__submit">{(isSubmitting) ? <Loader type={'button'} /> : 'Sign in'}</button>

				<a className="auth__forgot-link" onClick={() => { setTab('resetPassword') }}>Forgot your password?</a>
			</form>
		)
	}
}

export default reduxForm({
	form: 'LoginForm',
	fields,
	validate
})(LoginForm)