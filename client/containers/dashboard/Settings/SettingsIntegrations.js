import React, { Component } from 'react'
import { connect } from 'react-redux'
import PaymentMethod from './Integrations/PaymentMethod'
import Twillio from 'components/dashboard/settings/integrations/Twillio'
import Widget from 'components/dashboard/settings/integrations/Widget'
import FacebookMessenger from 'components/dashboard/settings/integrations/FacebookMessenger'

@connect((state) => ({
	auth: state.auth,
	organization: state.organization
}))

export default class SettingsIntegrations extends Component {
	render() {
		const {
			auth: {
				accessToken,
				profile: {
					organizationId
				}
			},
			organization: {
				details: {
					name: organizationName
				}
			}
		} = this.props

		return (
			<div className="section__container">
				<div className="section__header">
				  <div className="section__title">
				  	<i className="mu mu-settings"></i><h2>Integrations</h2>
				  </div>
				</div>

				<div className="section__content">
					<div className="box box--default">
						<div className="box__header">
							<h3 className="box__title">Facebook Messenger</h3>
						</div>
						<div className="box__body">
							<FacebookMessenger />
						</div>
					</div>

					<PaymentMethod />

					<div className="box box--default">
						<div className="box__header">
							<h3 className="box__title">MessageUs SMS Number</h3>
						</div>
						<div className="box__body">
							<Twillio />
						</div>
					</div>

					<div className="box box--default">
						<div className="box__header">
							<h3 className="box__title">Widget</h3>
						</div>
						<div className="box__body">
							<Widget
								organizationId={organizationId}
								organizationName={organizationName}
								accessToken={accessToken} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
