import React, { Component } from 'react'
import Loader from '../common/Loader'
import Helpers from '../../../utils/helpers'
import moment from 'moment'
import _ from 'lodash'
import PaymentGatewayRequestItem from './PaymentGatewayRequestItem'

export default class PaymentGatewayRequestsList extends Component {
	render() {
		const {
			isLoading,
			organizations,
			paymentMethods,
			paymentGatewayRequests,
			resolveRequest,
			isResolving,
			rejectRequest,
			isRejecting
		} = this.props

		return (
			<div className="box box--default">
				<div className="box__header">
					<h3 className="box__title">Pending payment gateway requests</h3>
				</div>
				<div className="box__body">
					<div className="payment-gateway-requests-list table-wrapper">
						<table className="table table--narrow" id="table-payment-gateway-requests">
							<thead>
								<tr>
									<th className="table__cell table__cell--header">Organization</th>
									<th className="table__cell table__cell--header">Gateway</th>
									<th className="table__cell table__cell--header text--right">Action</th>
								</tr>
							</thead>
							<tbody>
								{paymentGatewayRequests && paymentGatewayRequests.map((request, index) => {
									const organization = organizations[request.organization] && organizations[request.organization]
									const paymentMethod = paymentMethods[request.gatewayData['gateway_type']] && paymentMethods[request.gatewayData['gateway_type']]

									return <PaymentGatewayRequestItem 
														key={request._id}
														request={request}
														organization={organization}
														paymentMethod={paymentMethod}
														rejectRequest={rejectRequest}
														isRejecting={isRejecting}
														resolveRequest={resolveRequest}
														isResolving={isResolving} />
								})}
							</tbody>
						</table>
					</div>
				</div>				
			</div>	
		)
	}
}