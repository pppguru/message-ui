import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import Analytics from 'utils/analytics'
import { connect } from 'react-redux'
import Loader from 'components/dashboard/common/Loader'
import SuccessMessage from 'components/dashboard/common/SuccessMessage'
import * as api from 'utils/api'
import sessionStore from 'utils/sessionStore'
import SignupForm from 'components/dashboard/auth/SignupForm'
import {
	loginUser,
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

const FORM_NAME = 'signup'

@connect((state) => ({
	auth: state.auth,
	invitation: state.auth.invitation,
	isSubmitting: state.forms[FORM_NAME].isSubmitting,
	step: state.forms[FORM_NAME].step,
	message: state.forms[FORM_NAME].message,
	errorMessage: state.forms[FORM_NAME].errorMessage
}), {
	loginUser,
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

		this.analytics = new Analytics()
	}

	componentDidMount() {
	}

	handleSubmit(model) {
		this.props.submit(FORM_NAME)

		const data = {
			firstName: model.firstName,
			lastName: model.lastName,
			email: model.email,
			orgName: model.orgName,
			password: model.password,
			phone: model.phoneFormatted,
			phonePrefixCountryIso: model.phonePrefixCountryIso,
			phonePrefix: model.phonePrefix
		}

		api.createUser(data)
			.then((response) => {
				// this.analytics.signUp(response.data.profile)

				this.props.submitSuccess(FORM_NAME)

				this.props.setMessage('Account successfuly created.')

				this.props.setTab('success')

				if (this.props.invitation && this.props.invitation.invitationId) {
					const token = response.data.accessToken

					api.acceptInvitation(this.props.invitation.invitationId, token)
						.then((response) => {
							setTimeout(() => {
								this.props.setTab('login')

								setTimeout(() => {
									this.props.setMessage(null)
								}, 1000)
							}, 2000)
						})
						.catch((err) => {
							console.log('ACCEPT INVITATION ERR', err)
						})
				} else {
					setTimeout(() => {
						this.props.setMessage(null)

						this.props.setTab('login')
					}, 2000)
				}
			})
			.catch((err) => {
				console.log('CREATE USER ERR', err)

				if (err.data.message) {
					this.props.setError(FORM_NAME, err.data.message)
				}

				this.props.submitError(FORM_NAME, 'default')
			})
	}

	render() {
		const {
			invitation,
			isSubmitting,
			errorMessage,
			setTab
		} = this.props

		let initialValues = {}

		if (invitation) {
			if (invitation.contactType == 'email' && invitation.contactValue) {
				initialValues = {
					email: invitation.contactValue
				}
			} 

			else if (invitation.contactType == 'phone' && invitation.contactValue) {
				initialValues = {
					phone: invitation.contactValue
				}
			}
		}

		return (
			<div>
				<SignupForm
					key="form"
					isSubmitting={isSubmitting}
					onSubmit={this.handleSubmit}
					initialValues={initialValues}
					errorMessage={errorMessage}
					setTab={setTab} />
			</div>
		)
	}
}