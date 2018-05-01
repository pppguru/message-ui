import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { connect } from 'react-redux'
import { setOrganization } from 'reducers/organizationReducer'
import Loader from 'components/dashboard/common/Loader'
import * as api from 'utils/api'
import Analytics from 'utils/analytics'
import sessionStore from 'utils/sessionStore'
import LoginForm from 'components/dashboard/auth/LoginForm'
import {
	loginUser,
	setTab
} from 'reducers/authReducer'

import {
	submit,
	submitSuccess,
	submitError,
	setError,
	clearError
} from 'reducers/formsReducer'

const FORM_NAME = 'login'

@connect((state) => ({
	auth: state.auth,
	invitationEmail: state.auth.invitationEmail,
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
	setOrganization
})

export default class Login extends Component {
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	}

	constructor(props) {
		super(props)

		this.analytics = new Analytics()

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(model) {
		this.props.setError(FORM_NAME, null)

		this.props.submit(FORM_NAME)

		api.login(model.email, model.password)
			.then((auth) => {
				const isAdmin = auth.profile && auth.profile.roles && auth.profile.roles[0] === 'admin'

				console.log('auth.accessToken', auth.accessToken);

				const decodedToken = jwt_decode(auth.accessToken)

				console.log('decodedToken', decodedToken);

				if (decodedToken.d.superadmin) {
					auth.isSuperAdmin = true
				} else {
					auth.isSuperAdmin = false
				}

				if (isAdmin) {
					sessionStore.saveAuth(auth)
					this.props.loginUser(auth)
					this.props.submitSuccess(FORM_NAME)
					this.context.router.push('/dashboard')
					return false
				}

				if (auth.profile.organizationId) {
					sessionStore.saveAuth(auth)
					this.props.loginUser(auth)
					this.analytics.signIn(auth.profile.id)

					const orgId = auth.profile.organizationId

					api.loadOrganization(orgId, auth.accessToken)
						.then((response) => {
							this.props.setOrganization(response)
							this.props.submitSuccess(FORM_NAME)

							if ((!response.twilio || !response.spreedlyGatewayToken) && auth.profile.roles[0] == 'orgManager') {
								this.context.router.push('/dashboard/settings/integrations')
							} else {
								this.context.router.push('/dashboard')
							}
						})
						.catch((err) => {
							this.props.setError(FORM_NAME, 'Failed to load organization.')
							this.props.submitError(FORM_NAME)
						})

				} else {
					this.props.setError(FORM_NAME, 'Your account is not assigned to any organization.')

					this.props.submitError(FORM_NAME)
				}
			})
			.catch((err) => {
				switch (err.status) {
					case 400:
						this.props.setError(FORM_NAME, 'An unknown error occured.')

						this.props.submitError(FORM_NAME)
						break
					case 401:
						this.props.setError(FORM_NAME, 'The username and/or password is invalid.')

						this.props.submitError(FORM_NAME)
						break
					case 403:
						this.props.setError(FORM_NAME, 'Forbidden')

						this.props.submitError(FORM_NAME)
						break
				}
			})
	}

	render() {
		const {
			isSubmitting,
			step,
			message,
			errorMessage,
			setTab,
			invitationEmail
		} = this.props

		let initialValues = {}

		if (invitationEmail) {
			initialValues = {
				email: invitationEmail
			}
		}

		return (
			<div className="auth__login">
				<LoginForm
					isSubmitting={isSubmitting}
					onSubmit={this.handleSubmit}
					errorMessage={errorMessage}
					setTab={setTab}
					initialValues={initialValues} />
			</div>
		)
	}
}
