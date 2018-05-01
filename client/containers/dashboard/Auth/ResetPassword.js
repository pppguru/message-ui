import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { connect } from 'react-redux'
import Loader from 'components/dashboard/common/Loader'
import SuccessMessage from 'components/dashboard/common/SuccessMessage'
import * as api from 'utils/api'
import sessionStore from 'utils/sessionStore'
import ResetPasswordForm from 'components/dashboard/auth/ResetPasswordForm'
import {
	setTab
} from 'reducers/authReducer'

import {
	submit,
	submitSuccess,
	submitError,
	setError,
	clearError,
	setStep
} from 'reducers/formsReducer'

const FORM_NAME = 'resetPassword'

@connect((state) => ({
	auth: state.auth,
	isSubmitting: state.forms[FORM_NAME].isSubmitting,
	errorMessage: state.forms[FORM_NAME].errorMessage
}), {
	setTab,
	submit,
	submitSuccess,
	submitError,
	setError,
	clearError,
	setStep
})

export default class Login extends Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	}

	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(model) {
		this.props.submit(FORM_NAME)

		api.resetPassword(model.email)
			.then((response) => {
				this.props.submitSuccess(FORM_NAME)

				this.props.setMessage('An email with a link to reset password has been sent.')

				this.props.setTab('success')

				setTimeout(() => {
					this.props.setTab('login')

					setTimeout(() => {
						this.props.setMessage(null)
					}, 1000)
				}, 2000)
			})
			.catch((err) => {
				this.props.submitError(FORM_NAME)
				
				this.props.setError(FORM_NAME, 'Email address not found.')
			})
	}

	render() {
		const {
			isSubmitting,
			setTab,
			errorMessage
		} = this.props

		return (
			<div>
				<ResetPasswordForm
					key="form"
					isSubmitting={isSubmitting}
					onSubmit={this.handleSubmit}
					setTab={setTab}
					errorMessage={errorMessage} />
			</div>
		)
	}
}