import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Loader from '../../common/Loader'

const FORM_NAME = 'paymentMethod'

const validate = (values) => {
	const errors = {}

	Object.keys(values).map((name, index) => {
		if (!values[name]) {
			errors[name] = 'Required'
		}
	})

	return errors
}

class PaymentMethodForm extends Component {
	constructor(props) {
		super(props)

		this.onMethodChange = this.onMethodChange.bind(this)
	}

	onMethodChange(event) {
		const selectedMethod = event.target.value

		this.props.onMethodChange(selectedMethod)
	}

	render() {
		const {
			fields,
			labels,
			onMethodChange,
			paymentMethods,
			hideForm,
			isSubmitting,
			handleSubmit
		} = this.props

		return (
			<form onSubmit={handleSubmit} className="form form--fullscreen">
				<button type="button" className="form__close" onClick={() => {hideForm(FORM_NAME)}}>&times;</button>

				<div className="form__header">
					<h3 className="form__title">Setup payment gateway</h3>
				</div>

				<div className="form__content">
					<div className="form__fields">
						<div className="form__row">
							<div className="form__group form__group--flex">
								<label className="form__label--fixed">Payment gateway</label>

								<select onChange={this.onMethodChange} className="input input--select input--grow">
									<option value="*"></option>
									{paymentMethods && Object.keys(paymentMethods).map(function(key) {
										return (
											<option key={key} value={key}>{paymentMethods[key].name}</option>
										)
									})}
								</select>
							</div>
						</div>

						{Object.keys(fields).map((name, index) => {
							const field = fields[name]

							return (
								<div className="form__row" key={index}>
									<div className={(field.touched && field.error) ? 'form__group form__group--flex form__group--error' : 'form__group form__group--flex'}>
										<label>{labels[index]}</label>
										<input 
											type="text" 
											className="input input--text input--grow"
											placeholder={labels[index]}
											name={field['name']}
											{...field} />
									</div>
								</div>
							)
						})}
					</div>
				</div>

				<div className="form__footer">
					<button type="submit" className="btn btn--alpha form__submit">{(isSubmitting) ? <Loader type={'button'} /> : 'Submit'}</button>
				</div>
			</form>
		)
	}
}

export default reduxForm({
	form: 'PaymentMethodForm',
	validate
})(PaymentMethodForm)