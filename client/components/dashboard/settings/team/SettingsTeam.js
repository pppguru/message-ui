import React, { Component } from 'react'
import TeamForm from './TeamForm'

export default class SettingsTeam extends Component {
	render() {
		return (
			<div className="section__container">
				<div className="section__header">
				  <div className="section__title">
				  	<i className="mu mu-settings"></i><h2>Team</h2>
				  </div>
				</div>	

				<div className="section__content">
					<TeamForm />
				</div>
			</div>
		)
	}
}