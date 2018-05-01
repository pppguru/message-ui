import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { connect } from 'react-redux'
import sessionStore from 'utils/sessionStore'
import Loader from 'components/dashboard/common/Loader'
import * as api from 'utils/api'
import {
	loginUser,
	showLoader,
	hideLoader,
	showResetLoader,
	hideResetLoader,
	setError
} from 'reducers/authReducer'

@connect((state) => ({
	auth: state.auth,
	loading: state.auth.loading,
	resetLoading: state.auth.resetLoading
}), {
	loginUser,
	showLoader,
	hideLoader,
	showResetLoader,
	hideResetLoader,
	setError
})

export default class Login extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

	constructor(props) {
		super(props)

		this.onPasswordChange = this.onPasswordChange.bind(this)
		this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
			resetEmail: '',
			error: '',
			tab: 'resetForm'
		}
	}

	onPasswordChange(event) {
		this.setState({ password: event.target.value })
	}

	onConfirmPasswordChange(event) {
		this.setState({ confirmPassword: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault()

		const password = this.refs.password.value.trim()
		const confirmPassword = this.refs.confirmPassword.value.trim()

		const code = this.getParameterByName('code')

		if (password != confirmPassword) {
			this.setState({ error: 'Passwords don\'t match' })
		} else {
			this.setState({ loading: true })

			api.changePassword(code, password)
				.then((response) => {
					this.setState({
						loading: false,
						tab: 'success'
					})
				})
				.catch((err) => {
					console.log('submit reset password err', err)
				})
		}
	}

	getParameterByName(name, url) {
		if (!url) url = window.location.href
		name = name.replace(/[\[\]]/g, "\\$&")
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		    results = regex.exec(url)
		if (!results) return null
		if (!results[2]) return ''
		return decodeURIComponent(results[2].replace(/\+/g, " "))
	}

	render() {
		const {
			loading,
			password,
			confirmPassword,
			tab
		} = this.state

		let resetPasswordPage

		if (tab == 'resetForm') {
			resetPasswordPage =
				<form onSubmit={this.handleSubmit} key={'login'}>
					<p className="auth__reset-info">
						Fill in the form below to change your password.
					</p>

					<div className="auth__input-group">
						<input
							type="password"
							ref="password"
							id="password"
							placeholder="Password"
							className={(password.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
							value={password}
							onChange={this.onPasswordChange}
							required
							autofocus />

						<label className="auth__label" htmlFor="email">Password</label>
					</div>

					<div className="auth__input-group">
						<input
							type="password"
							ref="confirmPassword"
							id="confirmPassword"
							placeholder="Confirm password"
							className={(confirmPassword.length > 0) ? "auth__input auth__input--filled" : "auth__input"}
							value={confirmPassword}
							onChange={this.onConfirmPasswordChange}
							required
							autofocus />

						<label className="auth__label" htmlFor="email">Confirm password</label>
					</div>

					{ this.state.error ? <div className="auth__error"><p>{this.state.error}</p></div> : null }

					<button type="submit" className="auth__submit">{(loading) ? <Loader type={'button'} /> : 'Change'}</button>
				</form>
		}

		else if (tab == 'success') {
			resetPasswordPage =
				<div className="auth__reset-success" key={'resetSuccess'}>
					<div className="auth__reset-info">Password has been changed.</div>

					<a onClick={() => { this.context.router.push('/') }}>Return to login</a>
				</div>
		}

		return (
			<section className="section section--auth">
				<div className="auth">
					<div className="auth__logo">
						<img src={require('assets/img/messageus-logo-sign.svg')} />
					</div>

					<div className="auth__content">
						<ReactCSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
							{resetPasswordPage}
						</ReactCSSTransitionReplace>
					</div>
				</div>
			</section>
		)
	}
}
