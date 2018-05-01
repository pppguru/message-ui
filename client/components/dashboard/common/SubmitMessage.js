import React, { Component } from 'react'

export default class SuccessMessage extends Component {
	render() {
		const {
			type,
			message,
			hideForm,
			className,
			redirectButton
		} = this.props

		switch (type) {
			case 'success':
				var icon = 	<div className="success-message__icon success-message__icon--success"><i className="mu mu-check-tick"></i></div>
				var statusText = <span>All good. <br />{message}</span>

				break

			case 'error':
				var icon = <div className="success-message__icon success-message__icon--error"><div className="success-message__error-icon"></div></div>
				var statusText = <span>Something went wrong. <br /></span>

				break
		}

		return (
			<div className={'success-message ' + className}>
				<button type="button" className="form__close" onClick={hideForm}>&times;</button>
				{icon}
				<p className="success-message__text">{statusText}</p>
				{redirectButton}
			</div>
		)
	}
}