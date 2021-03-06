import React, { Component } from 'react'
import LivechatForm from './LivechatForm'

export default class SettingsLivechat extends Component {
	render() {
		return (
			<div className="section__container">
				<div className="section__header">
				  <div className="section__title">
				  	<i className="mu mu-settings"></i><h2>Livechat</h2>
				  </div>
				</div>	

				<div className="section__content">
					<LivechatForm />
				</div>
			</div>
		)
	}
}