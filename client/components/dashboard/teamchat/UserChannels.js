import React, { Component } from 'react'
import UserChannelsItem from './UserChannelsItem'

export default class UserChannels extends Component {

	render() {
		const {
			channel: selectedChannel,
			userId,
			channels,
			handleChannelSelect,
			confirmDeleteChannel
		} = this.props

		return (
			<div className="sidebar__block">
				<ul className="sidebar__list">
					{	channels && Object.keys(channels).map((key) => {
						if (channels[key].type == 'user') {

							const target = (channels[key].members[0].id == userId) ? channels[key].members[1] : channels[key].members[0]

							return (
								<UserChannelsItem
									key={key}
									selectedChannel={selectedChannel}
									channel={channels[key]}
									confirmDeleteChannel={confirmDeleteChannel}
									onClick={() => { handleChannelSelect(channels[key]) }}
									target={target}
								/>
							)
						}
					})}
				</ul>
			</div>
		)
	}
}
