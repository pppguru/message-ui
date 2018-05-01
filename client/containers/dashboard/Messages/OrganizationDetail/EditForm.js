import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Loader from '../../../../components/dashboard/common/Loader'

const FORM_NAME = 'contactEdit'

export const fields = [
	'firstName',
	'lastName',
	'email',
	'phone',
	'other'
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

class OrganizationContactEditForm extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const {
			fields: {
				firstName,
				lastName,
				email,
				phone,
				other
			},
			handleSubmit,
			isSubmitting,
			errorMessage,
			setTab,
			cancelEditing
		} = this.props

		return (
			<form onSubmit={handleSubmit}>
				<h3>Update Contact</h3>
				<div className="auth__input-group">
					<input
						type="text"
						id="org-firstName"
						placeholder="First Name"
						className={(firstName.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...firstName } />

					<label htmlFor="org-firstName" className="auth__label">First Name</label>
				</div>

				<div className="auth__input-group">
					<input
						type="text"
						id="org-lastName"
						placeholder="Last Name"
						className={(lastName.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...lastName } />

					<label htmlFor="org-lastName" className="auth__label">Last Name</label>
				</div>

				<div className="auth__input-group">
					<input
						type="email"
						id="org-email"
						placeholder="E-mail"
						className={(email.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...email } />

					<label htmlFor="org-email" className="auth__label">E-mail</label>
				</div>

				<div className="auth__input-group">
					<input
						type="tel"
						id="org-phone"
						placeholder="Phone"
						className={(phone.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...phone } />

					<label htmlFor="org-phone" className="auth__label">Phone</label>
				</div>

				<div className="auth__input-group">
					<input
						type="text"
						id="org-role"
						placeholder="Role"
						className={(other.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{ ...other } />

					<label htmlFor="org-phone" className="auth__label">Role</label>
				</div>

				{ errorMessage ? <div className="auth__error"><p>{errorMessage}</p></div> : null }

				<div className="auth__input-group" style={{ height: 'auto' }}>
					<button type="submit" className="btn btn--sm btn--beta">{(isSubmitting) ? <Loader type={'button'} /> : 'Save'}</button>
					<button type="button" className="btn btn--sm btn--default" onClick={cancelEditing}>Cancel</button>
				</div>

			</form>
		)
	}
}

export default reduxForm({
	form: FORM_NAME,
	fields
})(OrganizationContactEditForm)
