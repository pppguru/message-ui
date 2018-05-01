import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Loader from '../../common/Loader'
import Toggle from 'react-toggle'

const FORM_NAME = 'departments'

export const fields = [
	'name',
	'isPrivate'
]

const validate = (values) => {
	let errors = {}

	if (!values.name) {
		errors.name = 'Required'
	}

	return errors
}

class DepartmentsForm extends Component {
	handleBaconChange() {
		
	}

	render() {
		const {
			fields: {
				name,
				isPrivate
			},
			handleSubmit,
			hideForm,
			isSubmitting
		} = this.props

		return (
			<div className="form form--fullscreen">
				<button type="button" className="form__close" onClick={() => {hideForm(FORM_NAME)}}>&times;</button>

				<div className="form__header">
					<h3 className="form__title">Add Department</h3>
				</div>

				<div className="form__content">
					<div className="form__fields">
						<div className="form__row">
							<div className={(name.touched && name.error) ? 'form__group form__group--error' : 'form__group'}>
								<label htmlFor="input-name">Department Name</label>
								<input type="text" className="input input--text" placeholder="Department Name" {...name} />
							</div>
						</div>

						<div className="form__row">
							<div className="form__group form__group--row">
								<label>Private</label>
								<label>
								  <Toggle defaultChecked={false} {...isPrivate} />
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className="form__footer">
					<button type="button" className="btn btn--alpha form__submit" onClick={handleSubmit}>{(isSubmitting) ? <Loader type={'button'} /> : 'Submit'}</button>
				</div>
			</div>
		)
	}
}

export default reduxForm({
	form: 'DepartmentsForm',
	fields,
	validate
})(DepartmentsForm)