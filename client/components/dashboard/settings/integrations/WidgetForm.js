import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Loader from 'components/dashboard/common/Loader'

const FORM_NAME = 'widgetForm'

export const fields = [
	'email',
	'message'
]

const validate = (values) => {
	const errors = {}

	if (!values.email) {
		errors.email = 'Required'
	}

	return errors
}

class WidgetForm extends Component {
	render() {
		const {
			fields: {
				email,
				message
			},
			handleSubmit,
			isSubmitting
		} = this.props

		return (
			<form onSubmit={handleSubmit}>
				<div className="form__row">
					<div className={(email.touched && email.error) ? 'form__group form__group--flex form__group--error' : 'form__group form__group--flex'}>
						<label className="form__label form__label--fixed">Email</label>
						<input type="email" className="input input--text input--grow" placeholder="Email" ref="email" {...email} />
					</div>
				</div>
				<div className="form__row">
					<div className="form__group form__group--flex">
						<label className="form__label form__label--fixed">Message</label>
						<textarea className="input input--textarea input--grow" placeholder="Message" ref="message" {...message}></textarea>
					</div>
				</div>
				<div className="form__row">
					<div className="form__group form__group--flex">
						<label className="form__label form__label--fixed"></label>

						<button type={!isSubmitting ? 'submit' : 'button'} className="btn btn--beta btn--sm btn--loader" style={{ width: 110 }}>{(isSubmitting) ? <Loader type={'button'} /> : 'Submit'}</button>
					</div>
				</div>
			</form>
		)
	}
}

export default reduxForm({
	form: 'widgetForm',
	fields,
	validate
})(WidgetForm)