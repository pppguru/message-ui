import React, { Component } from 'react'

export default class DepartmentChannels extends Component {
	render() {
		const {
			channel: selectedChannel,
			channels,
			handleChannelSelect,
			showForm
		} = this.props

		return (
			<div className="sidebar__block">
				<div className="sidebar__header">
					<h3 className="sidebar__title">Departments</h3>
				</div>
				<ul className="sidebar__list">
					{	channels && Object.keys(channels).map((key) => {
						return (
							<li className="sidebar__item" key={key}>
								<a className={(selectedChannel && selectedChannel.id == channels[key].id) ? 'sidebar__link sidebar__link--active' : 'sidebar__link'} onClick={() => { handleChannelSelect(channels[key]) }}>
									 {channels[key].name}
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}