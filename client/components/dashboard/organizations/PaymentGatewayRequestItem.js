import React, { Component } from 'react'
import _ from 'lodash'
import Loader from '../common/Loader'

export default class PaymentGatewayRequestItem extends Component {
	render() {
		const { 
			request,
			organization,
			paymentMethod,
			resolveRequest,
			isResolving,
			rejectRequest,
			isRejecting
		} = this.props

		return (
			<tr>
				<td className="table__cell">
					{organization && organization.name}
				</td>
				<td className="table__cell">
					{paymentMethod && paymentMethod.name}
				</td>
				<td className="table__cell">
					<div className="table__cell-flex table__cell-flex--end">
						<button 
							type="button" 
							className="btn btn--sm btn--danger mr--5 btn--loader" 
							style={{ width: 95 }}
							onClick={() => { rejectRequest(request._id) }}>
								{isRejecting[request._id] ? <Loader type={'button'} /> : 'Reject'}
						</button>
						
						<button
							type="button" 
							className="btn btn--sm btn--beta btn--loader"
							style={{ width: 110 }}
							onClick={() => { resolveRequest(request._id) }}>
								{isResolving[request._id] ? <Loader type={'button'} /> : 'Resolve'}
						</button>
					</div>
				</td>
			</tr>
		)
	}
}