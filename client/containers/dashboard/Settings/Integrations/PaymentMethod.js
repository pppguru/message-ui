import React, { Component } from 'react'
import * as api from 'utils/api'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { putPaymentMethods } from 'reducers/settingsReducer'
import tempData from 'components/dashboard/settings/integrations/tempData'
import PaymentMethodForm from 'components/dashboard/settings/integrations/PaymentMethodForm'
import SuccessMessage from 'components/dashboard/common/SuccessMessage'
import { setOrganization, clearOrganization } from 'reducers/organizationReducer'
import Loader from 'components/dashboard/common/Loader'

import {
	showForm,
	hideForm,
	clearForm,
	submit,
	submitSuccess,
	submitError,
	submitDelete,
	submitDeleteSuccess,
	showConfirmModal,
	hideConfirmModal
} from 'reducers/formsReducer'

const FORM_NAME = 'paymentMethod'

@connect((state) => ({
	auth: state.auth,
	paymentMethods: state.settings.paymentMethods,
	spreedlyGatewayToken: state.organization.details.spreedlyGatewayToken,
	isVisible: state.forms[FORM_NAME].isVisible,
	isSubmitting: state.forms[FORM_NAME].isSubmitting,
	isDeleting: state.forms[FORM_NAME].isDeleting,
	step: state.forms[FORM_NAME].step,
	message: state.forms[FORM_NAME].message,
	confirmModalVisible: state.forms[FORM_NAME].confirmModalVisible
}), {
	putPaymentMethods,
	showForm,
	hideForm,
	clearForm,
	submit,
	submitSuccess,
	submitError,
	submitDelete,
	submitDeleteSuccess,
	showConfirmModal,
	hideConfirmModal,
	setOrganization
})

export default class PaymentMethod extends Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.hideForm = this.hideForm.bind(this)
		this.deletePaymentMethod = this.deletePaymentMethod.bind(this)
		this.onMethodChange = this.onMethodChange.bind(this)
		this.cancelPaymentMethodRequest = this.cancelPaymentMethodRequest.bind(this)

		this.state = {
			selectedMethod: false,
			paymentGatewayStatus: 'loading',
			paymentGatewayRequestId: null,
			cancelingRequest: false
		}
	}

	componentDidMount() {
		this.getOrganization()

		this.getPaymentMethods()

		this.getPaymentGatewayStatus()
	}

	getPaymentGatewayStatus() {
		const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken
		
		api.getOrgPendingPaymentGateways(orgId, token)
			.then((response) => {
				if (response.length > 0) {
					this.setState({ 
						paymentGatewayStatus: 'pending',
						paymentGatewayRequestId: response[0]._id
					})
				} 

				else if (this.props.spreedlyGatewayToken) {
					this.setState({ 
						paymentGatewayStatus: 'assigned' 
					})
				} 

				else {
					this.setState({ 
						paymentGatewayStatus: 'notAssigned' 
					})
				}
			})
	}

	getOrganization() {
		const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken

		api.loadOrganization(orgId, token)
			.then((response) => {
				this.props.setOrganization(response)
			})
			.catch((err) => {
				console.log('LOAD ORGANIZATION ERR', err)
			})
	}

	getPaymentMethods() {
		this.props.putPaymentMethods(tempData)

		// TODO
		// api.getPaymentMethods(this.props.auth.accessToken)
		// 	.then((response) => {
		// 		console.log('GET PAYMENT METHODS RES', response)
		// 	})
		// 	.catch((err) => {
		// 		console.log('GET PAYMENT METHODS ERR', err)
		// 	})
	}

	onMethodChange(selectedMethod) {
		this.setState({
			selectedMethod: selectedMethod
		})
	}

	handleSubmit(model) {
		const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken

		this.props.submit(FORM_NAME)

		let gatewayType

		if (this.props.paymentMethods && this.state.selectedMethod) {
			gatewayType = this.props.paymentMethods[this.state.selectedMethod].gateway_type
		}

		let data = Object.assign({}, model, {
			gateway_type: gatewayType
		})

		api.createPaymentGateway(orgId, data, token)
			.then((response) => {
				const message = 'Payment gateway added.'

				this.props.clearForm(FORM_NAME)

				this.props.submitSuccess(FORM_NAME, message)

				this.getOrganization()

				this.getPaymentGatewayStatus()

				// console.log('POST CREATE PAYMENT GATEWAY RES', response)
			})
			.catch((err) => {
				console.log('POST CREATE PAYMENT GATEWAY ERR', err)
			})
	}

	deletePaymentMethod() {
		const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken

		this.props.submitDelete(FORM_NAME)

		api.deletePaymentGateway(orgId, token)
			.then((response) => {
				this.props.submitDeleteSuccess(FORM_NAME)

				this.props.hideConfirmModal(FORM_NAME)

				this.getOrganization()

				this.getPaymentGatewayStatus()
			})
			.catch((err) => {
				console.log('DELETE PAYMENT METHOD ERR', err)
			})
	}

	cancelPaymentMethodRequest() {
		this.setState({ cancelingRequest: true })

		const requestId = this.state.paymentGatewayRequestId
		const token = this.props.auth.accessToken

		api.rejectPaymentGatewayRequest(requestId, token)
			.then((response) => {
				this.setState({ cancelingRequest: false })

				this.getOrganization()

				this.getPaymentGatewayStatus()
			})
	}

	hideForm() {
		this.props.clearForm(FORM_NAME)

		this.props.hideForm(FORM_NAME)
	}

	render() {
		const {
			selectedMethod,
			paymentGatewayStatus,
			cancelingRequest
		} = this.state

		const {
			paymentMethods,
			spreedlyGatewayToken,
			isVisible,
			isSubmitting,
			isDeleting,
			message,
			step,
			showForm,
			confirmModalVisible,
			showConfirmModal,
			hideConfirmModal
		} = this.props

		let credentials
		let fields = []
		let labels = []

		if (paymentMethods && selectedMethod) {
			credentials = paymentMethods[selectedMethod].auth_modes[0].credentials
		}

		credentials && credentials.forEach((item) => {
			fields.push(item.name)
			labels.push(item.label)
		})

		let gatewayStatus
		let actionButton = null

		switch (paymentGatewayStatus) {
			case 'loading':
				gatewayStatus = 
					<div className="gateway-status gateway-status--loading">
						<Loader visible={true} />
					</div>

				break

			case 'pending':
				gatewayStatus = 
					<div className="gateway-status gateway-status--pending">
						<div className="gateway-icon"><span>...</span></div>
						<p>Waiting for admin confirmation</p>
					</div>
				
				actionButton = <button type="button" className="btn btn--alpha btn--sm btn--loader" onClick={this.cancelPaymentMethodRequest} style={{ width: 150 }}>{cancelingRequest ? <Loader type={'button'} /> : 'Cancel request'}</button>
				
				break

			case 'assigned':
				gatewayStatus = 
					<div className="gateway-status">
						<div className="gateway-icon"><i className="mu mu-check-tick"></i></div>
						<p>Payment gateway assigned</p>
					</div>

				actionButton = <button type="button" className="btn btn--default btn--sm" onClick={() => { showConfirmModal(FORM_NAME) }}>Delete</button>

				break

			case 'notAssigned':
				gatewayStatus = <div className="gateway-status gateway-status--inactive">
													<div className="gateway-icon">+</div>
													<p>Payment gateway not assigned</p>
												</div>

				actionButton = <button type="button" className="btn btn--beta btn--sm" onClick={() => { showForm(FORM_NAME) }}>Setup</button>

				break
		}
		
		let form

		if (step == 'default') {
			form = <PaymentMethodForm
								key={'form'}
								hideForm={this.hideForm}
								onSubmit={this.handleSubmit}
								isSubmitting={isSubmitting}
								paymentMethods={paymentMethods}
								onMethodChange={this.onMethodChange}
								fields={fields}
								labels={labels} />
		}

		else if (step == 'success') {
			form = <SuccessMessage
								key={'success'}
								hideForm={this.hideForm}
								message={message} />
		}

		return (
			<div className="box box--default">
				<div className="box__header">
					<h3 className="box__title">Payment Gateway</h3>
					<div className="box__tools">
						{actionButton}
					</div>
				</div>
				<div className="box__body">
					<div className="form form--horizontal">
						<div className="form__content">
							<div className="form__row">
								<div className="form__group form__group--flex">
									<label>Status</label>

									{gatewayStatus}
								</div>
							</div>
						</div>
					</div>

					<Modal isOpen={isVisible} className={{}} overlayClassName={{}} onRequestClose={this.hideForm}>
						<ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={200}>
							{form}
						</ReactCSSTransitionGroup>
					</Modal>

	        <Modal
	          isOpen={confirmModalVisible}
	          onRequestClose={() => { hideConfirmModal(FORM_NAME) }}
	          className={{}}
	          overlayClassName="modal modal--confirm">
	          <div className="modal__header">
	            <h3 className="modal__title">Are you sure?</h3>
	            <button type="button" className="modal__close" onClick={() => { hideConfirmModal(FORM_NAME) }}>&times;</button>
	          </div>
	          <div className="modal__footer">
	            <button type="button" className="btn btn--md btn--beta" onClick={this.deletePaymentMethod} style={{ width: 120 }}>{(isDeleting) ? <Loader type={'button'} /> : 'Confirm'}</button>
	          </div>
	        </Modal>
				</div>
			</div>
		)
	}
}