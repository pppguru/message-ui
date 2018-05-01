import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import uuid from 'uuid'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import OfferProductForm from 'components/dashboard/messages/detail/OfferProductForm'
import * as api from 'utils/api'
import { putProducts, clearProducts } from 'reducers/productsReducer'
import { setReadStatus } from 'reducers/messages/messagesListReducer'
import {
	hideForm,
	submit,
	submitSuccess,
	submitError
} from 'reducers/formsReducer'

const FORM_NAME = 'offerProduct'

@connect(
	state => ({
		auth: state.auth,
		products: state.products.products,
		isVisible: state.forms[FORM_NAME].isVisible,
		isSubmitting: state.forms[FORM_NAME].isSubmitting
	}), {
		hideForm,
		submit,
		submitSuccess,
		submitError,
		putProducts,
		clearProducts,
		setReadStatus
	}
)

export default class OfferProduct extends Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		if (this.props.products.length == 0) {
			const orgId = this.props.auth.profile.organizationId
			const token = this.props.auth.accessToken

			api.getProducts(orgId, token)
				.then((response) => {
					this.props.clearProducts()

					this.props.putProducts(response)
				})
				.catch((err) => {
					console.log('LOAD PRODUCTS ERR', err)
				})
		}
	}

	handleSubmit(items, message) {
		const {
			conversation,
			auth
		} = this.props

		this.props.submit(FORM_NAME)

		let products = []

		for (let key in items) {
			if (items[key].value != 0) {
				products.push({
					id: items[key].id,
					quantity: items[key].value
				})
			}
		}

		const orgId = auth.profile.organizationId
		const token = auth.accessToken

		const data = {
			customerRequestId: conversation.key,
			customerId: conversation.value.customer.id,
			products: products,
			deliveryTime: 0,
			deliveryPrice: 0
		}

		api.createOffer(orgId, data, token)
			.then((offer) => {
				const messageData = {
					type: 'offer',
					ref: uuid.v1(),
					data: {
						offerId: offer.id,
						text: message
					}
				}

				api.sendMessage(conversation.key, messageData, token)
					.then((response) => {
						this.props.setReadStatus(conversation.key, this.props.auth.profile.id, true)

						this.props.submitSuccess(FORM_NAME)

						this.props.hideForm(FORM_NAME)
					})
					.catch((err) => {
						console.log('SEND OFFER ERR', err)
					})
			})
			.catch((err) => {
				console.log('CREATE OFFER ERR', err)
			})
	}

	render() {
		const {
			auth: {
				profile: {
					spreedlyGatewayToken
				}
			},
			isVisible,
			isSubmitting,
			products,
			hideForm
		} = this.props

		return (
			<Modal 
				isOpen={isVisible}
				onRequestClose={() => { hideForm(FORM_NAME) }}
				className={{}}
				overlayClassName="modal--offer-product">
				
				<OfferProductForm
					products={products}
			 		handleSubmit={this.handleSubmit}
			 		hideForm={hideForm}
			 		isSubmitting={isSubmitting}
			 		hasGateway={spreedlyGatewayToken} />

			</Modal>
		)
	}
}