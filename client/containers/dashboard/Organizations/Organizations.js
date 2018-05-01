import React, { Component } from 'react'
import PaymentGatewayRequests from './PaymentGatewayRequests'

export default class Organizations extends Component {
	render() {
		return (
			<div className="section section--organization">
				<div className="section__container">
					<div className="section__header">
					  <div className="section__title">
					  	<i className="mu mu-organizations"></i><h2>Organizations</h2>
					  </div>
					</div>

					<div className="section__content">
						<PaymentGatewayRequests />
					</div>
				</div>
			</div>
		)
	}
}