import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as api from 'utils/api'
import tempData from 'components/dashboard/settings/integrations/tempData'
import PaymentGatewayRequestsList from 'components/dashboard/organizations/PaymentGatewayRequestsList'
import { putOrganization, putPaymentGatewayRequests, removePaymentGatewayRequest } from 'reducers/organizationsReducer'
import { putPaymentMethods } from 'reducers/settingsReducer'
import Loader from 'components/dashboard/common/Loader'

@connect((state) => ({
	auth: state.auth,
	organizations: state.organizations.organizations,
	paymentGatewayRequests: state.organizations.paymentGatewayRequests,
	paymentMethods: state.settings.paymentMethods
}), {
	putOrganization,
	putPaymentGatewayRequests,
	removePaymentGatewayRequest,
	putPaymentMethods
})

export default class PaymentGatewayRequests extends Component {
	constructor(props) {
		super(props)

		this.resolveRequest = this.resolveRequest.bind(this)
		this.rejectRequest = this.rejectRequest.bind(this)

		this.state = {
			hasData: true,
			isLoading: false,
			isResolving: {},
			isRejecting: {}
		}
	}

	componentDidMount() {
		if (this.props.paymentGatewayRequests.length == 0) {
			this.setState({ isLoading: true })
		}

		this.getRequests()
		this.getPaymentMethods()
	}

	getRequests() {
		const token = this.props.auth.accessToken

		let hasLoaded = true

		api.getPendingPaymentGateways(token)
			.then(requests => {
				this.props.putPaymentGatewayRequests(requests)

				if (requests.length > 0) {
					requests.map((request, index) => {
						api.loadOrganization(request.organization, token)
							.then(organization => {
								this.props.putOrganization(organization)

								if (index == requests.length - 1) {
									setTimeout(() => {
										this.setState({ isLoading: false })
									}, 250)
								}
							})
							.catch((err) => {
								console.log('err', err);
							})
					})					
				} else {
					this.setState({ 
						isLoading: false,
						hasData: false
					})
				}
			})
	}

	getPaymentMethods() {
		this.props.putPaymentMethods(tempData)
	}

	resolveRequest(id) {
		let isResolving = this.state.isResolving
		isResolving[id] = true
		this.setState({ isResolving: isResolving })

		api.resolvePaymentGatewayRequest(id, this.props.auth.accessToken)
			.then(response => {
				this.props.removePaymentGatewayRequest(id)
			})
	}

	rejectRequest(id) {
		let isRejecting = this.state.isRejecting
		isRejecting[id] = true
		this.setState({ isRejecting: isRejecting })

		api.rejectPaymentGatewayRequest(id, this.props.auth.accessToken)
			.then(response => {
				this.props.removePaymentGatewayRequest(id)
			})
	}

	render() {
		const {
			organizations,
			paymentGatewayRequests,
			paymentMethods
		} = this.props

		const {
			hasData,
			isLoading,
			isResolving,
			isRejecting
		} = this.state

		let loader = (isLoading) ? <Loader visible={true} centered={true} margin={true} /> : null

		return (
			<div>
				<PaymentGatewayRequestsList
					hasData={hasData}
					isLoading={isLoading}
					organizations={organizations}
					paymentMethods={paymentMethods}
					paymentGatewayRequests={paymentGatewayRequests}
					resolveRequest={this.resolveRequest}
					isResolving={isResolving}
					rejectRequest={this.rejectRequest}
					isRejecting={isRejecting} />

				{loader}
			</div>
		)
	}
}
