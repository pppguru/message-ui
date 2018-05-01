import React, { Component } from 'react'
import GeneralForm from './GeneralForm'

export default class SettingsGeneral extends Component {
	render() {
		return (
			<div className="section__container">
				<div className="section__header">
				  <div className="section__title">
				  	<i className="mu mu-settings"></i><h2>General</h2>
				  </div>
				</div>	

				<div className="section__content">
					<GeneralForm />
				</div>
			</div>
		)
	}
}