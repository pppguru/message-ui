import React, { Component } from 'react'

export default class ChannelHeader extends Component {
	render() {
		const {
			members
		} = this.props

		return (
			<div className="channel__header">
				<ul className="channel__header-list">
					{members && members.length > 0 &&
						<span>{members.length} members: </span>
					}
					{members && members.map((member, index) => {
						return (
							<li className="channel__header-item" key={index}>
									<span>{member.firstName + ' ' + member.lastName}</span>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}
