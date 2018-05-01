import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Loader from '../common/Loader'

export const fields = [
	'oldPassword',
	'newPassword',
	'confirmation'
]

const validate = (values) => {
	const errors = {}

	if (!values.oldPassword) {
		errors.oldPassword = 'Required'
	}

	if (!values.newPassword) {
		errors.newPassword = 'Required'
	}

	if (values.newPassword != values.confirmation) {
		errors.confirmation = 'Passwords don\'t match'
	}

	return errors
}

class ChangeUserPasswordForm extends Component {
	render() {
		const {
			fields: {
				newPassword,
				oldPassword,
				confirmation
			}, 
			handleSubmit,
			hideForm,
			isSubmitting,
			errorMessage
		} = this.props

		return (
			<form className="form form--fullscreen form--change-password" onSubmit={handleSubmit}>
				<button type="button" className="form__close" onClick={hideForm}>&times;</button>

				<div className="form__header">
					<h3 className="form__title">Change your password</h3>
				</div>

				<div className="form__content">
					<div className="form__fields">
						<div className="form__row">
							<div className={(oldPassword.touched && oldPassword.error) ? 'form__group form__group--error' : 'form__group'}>
								<label htmlFor="input-old-password">Old password</label>
								<input id="input-old-password" type="password" className="input input--text" placeholder="Old password" {...oldPassword} />
							</div>
						</div>
						<div className="form__row">
							<div className={(newPassword.touched && newPassword.error) ? 'form__group form__group--error' : 'form__group'}>
								<label htmlFor="input-new-password">New password</label>
								<input id="input-new-password" type="password" className="input input--text" placeholder="New password" {...newPassword} />
							</div>
						</div>
						<div className="form__row">
							<div className={(confirmation.touched && confirmation.error) ? 'form__group form__group--error' : 'form__group'}>
								<label htmlFor="input-confirmation">Confirmation</label>
								<input id="input-confirmation" type="password" className="input input--text" placeholder="Confirmation" {...confirmation} />
							</div>
						</div>
					</div>
				</div>

				<div className="form__footer form__footer--column">
					{ errorMessage ? <span className="form__message mb--20">{errorMessage}</span> : null }
					<button type="submit" className="btn btn--alpha form__submit" style={{ width: 150 }}>{(isSubmitting) ? <Loader type={'button'} /> : 'Update info'}</button>
				</div>
			</form>
		)
	}
}

export default reduxForm({
	form: 'ChangeUserPasswordForm',
	fields,
	validate
})(ChangeUserPasswordForm)