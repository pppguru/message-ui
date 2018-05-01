import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Loader from 'components/dashboard/common/Loader'

export const fields = [
	'email',
	'phone'
]

const validate = values => {
	const errors = {}

	if (!values.email && !values.phone) {
		errors.email = 'required'
	}

	return errors
}

@reduxForm({
	form: 'InviteOrganization',
	fields,
	validate
})

export default class InviteOrganization extends Component {
	constructor(props) {
		super(props)

		this.state = {
			error: null
		}
	}

	render() {
		const {
			fields: {
				email,
				phone
			},
			handleSubmit,
			cancelInvitation,
			isSubmittingInvite
		} = this.props

		return (
			<form onSubmit={handleSubmit}>
				<h3>Invite organization</h3>
				<div className="auth__input-group">
					<input 
						type="email"
						id="email"
						placeholder="Email"
						className={(email.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{...email} />

					<label htmlFor="email" className="auth__label">Email</label>
				</div>

				<div className="auth__input-group">
					<input 
						type="text"
						id="phone"
						placeholder="Phone"
						className={(phone.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
						{...phone} />

					<label htmlFor="phone" className="auth__label">Phone</label>
				</div>

				{ this.state.error ? <div className="auth__error"><p>{this.state.error}</p></div> : null }

				<div className="auth__input-group" style={{ height: 'auto' }}>
					<button type="submit" className="btn btn--beta btn--loader btn--sm">{(isSubmittingInvite) ? <Loader type={'button'} /> : 'Submit'}</button>
					<button type="button" className="btn btn--default btn--sm" onClick={cancelInvitation}>Cancel</button>
				</div>
			</form>
		)
	}
}