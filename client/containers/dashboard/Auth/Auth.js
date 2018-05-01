import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import sessionStore from 'utils/sessionStore'
import Loader from 'components/dashboard/common/Loader'
import SuccessMessage from 'components/dashboard/common/SuccessMessage'
import * as api from 'utils/api'
import Login from 'containers/dashboard/Auth/Login'
import Signup from 'containers/dashboard/Auth/Signup'
import ResetPassword from 'containers/dashboard/Auth/ResetPassword'
import {
	loginUser,
	setTab,
	clearTab,
	setMessage,
	clearMessage
} from 'reducers/authReducer'

@connect((state) => ({
	auth: state.auth,
	tab: state.auth.tab,
	message: state.auth.message
}), {
	loginUser,
	setTab,
	clearTab,
	setMessage,
	clearMessage
})

export default class Auth extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		const auth = sessionStore.loadAuth()

		if (auth) {
			this.props.loginUser(auth)

			this.context.router.push('/dashboard')
		}
	}

	render() {
		const {
			tab,
			setTab,
			setMessage,
			message
		} = this.props

		const loginFooter = 
			<div key="loginFooter" className="auth__create-account">
				<p>Don't have an account?</p>
				<a onClick={() => { setTab('signup') }}>Sign up here</a>
			</div>

		const signupFooter = 
				<div key="signupFooter" className="auth__create-account">
					<p>Already have an account?</p>
					<a onClick={() => { setTab('login') }}>Return to login</a>
				</div>

		let tabContent = <div key="defaultContent"></div>
		let tabFooter = <div key="defaultFooter"></div>

		switch (tab) {
			case 'loading':
				tabContent = <span key="loading">loading</span>
				break
			
			case 'login':
				tabContent = <Login key="loginContent" />
				
				tabFooter = loginFooter
				break

			case 'signup':
				tabContent = <Signup 
											key="signupContent"
											setTab={setTab}
											setMessage={setMessage} />
				
				tabFooter = signupFooter
				break

			case 'resetPassword':
				tabContent = <ResetPassword
											key="resetPassword"
											setTab={setTab}
											setMessage={setMessage} />

				tabFooter = signupFooter
				break

			case 'changePassword':
				tabContent = <span key="resetPassword">resetPassword</span>
				break

			case 'success':
				tabContent = <SuccessMessage
											key="successMessage"
											className="success-message--auth"
											message={message} />

				tabFooter = signupFooter
				break
			default:
				return
		}

		return (
			<section className="section section--auth">
				<div className="auth">
					<div className="auth__logo">
						<img src={require('assets/img/messageus-logo-sign.svg')} />
					</div>

					<div className="auth__content">
						<ReactCSSTransitionReplace className="auth__transition" transitionName="cross-fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
							{tabContent}
						</ReactCSSTransitionReplace>
					</div>

					<div className="auth__footer">
						<ReactCSSTransitionReplace className="auth__transition" transitionName="cross-fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
							{tabFooter}
						</ReactCSSTransitionReplace>
					</div>
				</div>
			</section>
		)
	}
}