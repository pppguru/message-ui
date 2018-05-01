import React, { Component } from 'react'
import Sidebar from './sidebar/Sidebar'

export default class Settings extends Component {
	render() {
		return (
			<div className="section section--settings">
				<Sidebar />

				{this.props.children}
			</div>
		)
	}
}