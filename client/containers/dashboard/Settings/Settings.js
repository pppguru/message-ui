import React, { Component } from 'react'
import SettingsSidebar from 'components/dashboard/settings/SettingsSidebar'

export default class Settings extends Component {
	render() {
		return (
			<div className="section section--settings" key={'section--settings'}>
				<SettingsSidebar />

				{this.props.children}
			</div>
		)
	}
}