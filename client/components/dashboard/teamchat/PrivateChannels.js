import React, { Component } from 'react'

const FORM_NAME = 'deleteChannel'

export default class PrivateChannels extends Component {
	render() {
		const {
			channel: selectedChannel,
			channels,
			confirmDeleteChannel,
			handleChannelSelect,
			showForm,
			userId
		} = this.props

		return (
			<div className="sidebar__block">
				<div className="sidebar__header">
					<h3 className="sidebar__title">People</h3>
					<button type="button" className="btn btn--add-channel" onClick={() => { showForm('createChannel') }}>&#43;</button>
				</div>
				<ul className="sidebar__list">
					{	channels && Object.keys(channels).map((key) => {
						if (channels[key].type == 'private') {

							let ellipsis = false
							let membersList = ''

							if (channels[key].members.length > 2) {
								channels[key].members && channels[key].members.map((member, mindex) => {
									membersList += member.firstName + ', '
								})

								membersList = membersList.trim().slice(0, -1)
								
								if (membersList.length > 21) {
									membersList = membersList.substring(0, 21)
									ellipsis = true
								}
							} 

							else {
								let target = (channels[key].members[0].id == userId) ? channels[key].members[1] : channels[key].members[0]

								membersList += target.firstName + ' ' + target.lastName
							}

							return (
								<li className="sidebar__item" key={key}>
									<a className={(selectedChannel && selectedChannel.id == channels[key].id) ? 'sidebar__link sidebar__link--active' : 'sidebar__link'} onClick={() => { handleChannelSelect(channels[key]) }}>
										 { membersList }{ (ellipsis) ? <span>&hellip;</span> : null }
									</a>
									<a className="btn btn--delete btn--delete-channel" onClick={() => { confirmDeleteChannel(channels[key].id, FORM_NAME) }}>+</a>
								</li>
							)
						}
					})}
				</ul>
			</div>
		)
	}
}