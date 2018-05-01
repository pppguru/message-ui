import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import * as api from 'utils/api'
import Loader from 'components/dashboard/common/Loader'

@connect((state) => ({
	auth: state.auth,
	organization: state.organization
}), {
	
})
export default class Subscriptions extends Component {
	constructor(props) {
		super(props)

		this.handleCreditcardSubmit = this.handleCreditcardSubmit.bind(this)
		this.handleSubscribe = this.handleSubscribe.bind(this)
		this.handleUnsubscribe = this.handleUnsubscribe.bind(this)

		this.state = {
			errorMessage: null,
			creditCardFormSent: false,
			creditCardInfoSaved: false,
			subscribtionData: null
		}
	}

	handleUnsubscribe() {

		this.setState({
			errorMessage: null,
		})
		
		return api.unsubscribeOrganization(this.props.organization.details.id, this.props.auth.accessToken)
		.then((response) => {
			this.setState({
				subscribtionData: response
			})
		})
		.catch((error) => {
			console.log(error.data.name)
			switch (error.data.name) {
				case 'E_ORGANIZATION_NO_SUBSCRIPTION':
					this.setState({errorMessage: 'Your organization has no active subscription to remove.'})
					break
				case 'E_ORGANIZATION_NOT_FOUND':
					this.setState({errorMessage: 'Your organization ID has not been found in database.'})
					break
			}
		})
	}

	handleSubscribe() {

		this.setState({
			errorMessage: null,
		})

		return api.subscribeOrganization(this.props.organization.details.id, this.props.auth.accessToken)
		.then((response) => {
			this.setState({
				subscribtionData: response
			})
		})
		.catch((error) => {
			console.log(error.data.name)
			switch (error.data.name) {
				case 'E_ORGANIZATION_HAVE_SUBSCRIPTION':
					this.setState({errorMessage: 'Your organization already has active subscription.'})
					break
				case 'E_ORGANIZATION_NOT_FOUND':
					this.setState({errorMessage: 'Your organization ID has not been found in database.'})
					break
				case 'E_USER_CREDIT_CARD_INVALID':
					this.setState({errorMessage: 'Your credit card number is invalid.'})
					break
				case 'E_ORGANIZATION_NO_SUBSCRIPTION':
					this.setState({errorMessage: 'Your organization has no active subscription to remove.'})
					break
			}
		})
	}

	handleCreditcardSubmit() {

		this.setState({
			errorMessage: null,
			creditCardFormSent: true
		})

		return api.postCreditCardInfo(this.refs.number.value, this.refs.expMonth.value, this.refs.expYear.value, this.refs.cvc.value, this.props.auth.accessToken)
		.then((response) => {
			if (response.data && response.data.name == 'E_USER_CREDIT_CARD_INVALID'){
				return this.setState({
					creditCardFormSent: false,
					errorMessage: "Invalid credit card number."
				})
			}

			this.setState({
				creditCardInfoSaved: true
			})
		})
	}



	render() {
		const isManager = this.props.auth.profile && this.props.auth.profile.roles && this.props.auth.profile.roles[0] === 'orgManager'

		if (isManager){
			return (
				<div>

					{
						this.props.organization.details.disabled
						? <div className="form__warn">Your organizaton have no active subscription plan, therefore, we have limited application core functionalities. Please, enter your credit card and activate subscription.</div>
						: ""
					}

					{
						this.props.auth.profile.stripe.fillCreditCard
						? <div className="form__warn">You haven't entered your credit card. If no valid credit card is in the system, your trial subscription will be terminated soon and service will stop working.</div>
						: ""
					}
					
					{
						this.state.errorMessage
						? <div className="form__error">{this.state.errorMessage}</div>
						: ""
					}

					<div className="form__row">
						<div className="form__group--half">
							<div className="section__header">
								<div className="section__title">
									<i className="mu mu-settings"></i>
									<h2>Credit card information</h2>
								</div>
							</div>	
							<div className="section__content">
								{
									this.state.creditCardInfoSaved
									? <label className="error-message">Credit card info successfuly saved.</label>
									: <form className="form__content form__content--column">
										<div className="form__fields">
											<div className="form__row">
												<div className="form__group">
													<label>Credit Card Number</label>
													<input className="input input--text" type="text" ref="number" />
												</div>
												
											</div>
											<div className="form__row">
												<div className="form__group" style={{ marginRight:'20px' }}>
													<label>Expiration month</label>
													<input className="input input--text" type="text" ref="expMonth" />
												</div>
												<div className="form__group" style={{ marginRight:'20px' }}>
													<label>Expiration year</label>
													<input className="input input--text" type="text" ref="expYear" />
												</div>
												<div className="form__group">
													<label>CVC</label>
													<input className="input input--text" type="text" ref="cvc" />
												</div>
											</div>
											<div className="form__row">
												<button type="submit" onClick={this.handleCreditcardSubmit} className="btn btn--alpha form__submit">{(this.state.creditCardFormSent) ? <Loader type={'button'} /> : 'Send'}</button>
											</div>
										</div>
									</form>
								}
							</div>
						</div>
						<div className="form__group--half">
							<div className="section__header">
								<div className="section__title">
									<i className="mu mu-settings"></i>
									<h2>Add or remove your business subcription</h2>
								</div>
							</div>
							<div className="section__content">
								<form onSubmit={this.handleSubscribe} style={{ marginBottom: '20px' }}>
									<button type="submit" className="btn btn--alpha form__submit">Subscribe</button>
								</form>
								<form onSubmit={this.handleUnsubscribe}>
									<button type="submit" className="btn btn--alpha form__submit">Unsubscribe</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return(
				<div>Only "Manager" can handle organizations subscriptions.</div>
			)
		}
	}
}