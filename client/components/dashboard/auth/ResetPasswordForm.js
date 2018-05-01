import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Loader from '../common/Loader'

const FORM_NAME = 'resetPassword'

export const fields = [
	'email'
]

const validate = (values) => {
	let errors = {}

	if (!values.email) {
		errors.email = 'Required'
	}

	return errors
}

class ResetPasswordForm extends Component {
	render() {
		const {
			fields: {
				email
			},
			handleSubmit,
			isSubmitting,
			setTab,
			errorMessage
		} = this.props

		return (
			<form onSubmit={handleSubmit}>
				<p className="auth__reset-info">Use the form below to receive an email with a link to reset your password.</p>

				<div className="auth__input-group">
					<input
						type="email"
						id="email"
						placeholder="example@domain.com"
						className={(email.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...email } />

					<label htmlFor="email" className="auth__label">Email</label>
				</div>

				{ errorMessage ? <div className="auth__error"><p>{errorMessage}</p></div> : null }

				<button type="submit" className="auth__submit">{(isSubmitting) ? <Loader type={'button'} /> : 'Reset'}</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'ResetPasswordForm',
	fields,
	validate
})(ResetPasswordForm)