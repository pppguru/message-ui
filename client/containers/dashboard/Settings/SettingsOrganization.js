import React, { Component } from 'react'
import Departments from './Organization/Departments'
import OrganizationMembers from './Organization/OrganizationMembers'

export default class SettingsOrganization extends Component {
	render() {
		return (
			<div className="section__container">
				<div className="section__header">
				  <div className="section__title">
				  	<i className="mu mu-settings"></i><h2>Organization</h2>
				  </div>
				</div>	

				<div className="section__content">
					<Departments />

					<OrganizationMembers />
				</div>
			</div>
		)
	}
}