import React, { Component } from 'react'
import MessagingForm from './MessagingForm'

export default class SettingsMessaging extends Component {
	render() {
		return (
			<div className="section__container">
				<div className="section__header">
				  <div className="section__title">
				  	<i className="mu mu-settings"></i><h2>Messaging</h2>
				  </div>
				</div>	

				<div className="section__content">
					<MessagingForm />
				</div>
			</div>
		)
	}
}