import React, { Component } from 'react'

export default class SuccessMessage extends Component {
	render() {
		const {
			message,
			hideForm,
			className,
			redirectButton
		} = this.props

		return (
			<div className={'success-message ' + className}>
				<button type="button" className="form__close" onClick={hideForm}>&times;</button>
				<div className="success-message__icon"><i className="mu mu-check-tick"></i></div>
				<p className="success-message__text">
					All good. <br />
					{message}
				</p>
				{redirectButton}
			</div>
		)
	}
}