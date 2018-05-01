import React, { Component } from 'react'
import Loader from '../common/Loader'
import moment from 'moment'
import PersonPhoto from '../common/PersonPhoto'
import linkifyHtml from 'linkifyjs/html'

export default class TeamchatChannelMessages extends Component {
	componentDidUpdate() {
    const channelBoard = this.refs.teamchatChannelBoard

    const heightTotal = channelBoard.scrollHeight

    channelBoard.scrollTop = heightTotal
	}

	render() {
		const {
			userId,
			isLoading,
			channelMessages,
			users
		} = this.props

		let loader = null

		if (isLoading) {
			loader = <Loader
								visible={true}
								centered={true}
								overlay={true} />
		}

		return (
			<div ref="teamchatChannelBoard" className="teamchat-channel__board">
				<ul className="teamchat-channel__messages">
					{channelMessages && channelMessages.map((result, index) => {
						const message = result.value

						const senderId = message.sender.id

						const timestamp = moment(message.createdAt).format('LT')

						let fullName = 'Live Chat User'

						if (message.sender && message.sender.phone) {
							fullName = message.sender.phone
						}

						if (users[senderId] && users[senderId].firstName && users[senderId].lastName) {
							fullName = users[senderId].firstName + ' ' + users[senderId].lastName
						}

						return (
							<li className={(senderId == userId) ? 'teamchat-channel__message teamchat-channel__message--user' : 'teamchat-channel__message'} key={index}>
								<div className="teamchat-channel__sender">
									<PersonPhoto
										photoUrl={users[senderId] && users[senderId].profileImageUrl}
										isUser={senderId == userId ? true : false} />
								</div>
								<div className="teamchat-channel__entry">
									<div className="teamchat-channel__info">
										<span className="teamchat-channel__name">{fullName}</span>
										<span className="teamchat-channel__timestamp">{timestamp}</span>
									</div>
									<div dangerouslySetInnerHTML={{ __html: linkifyHtml(message.data.text, {
										defaultProtocol: 'http'
										}) }} className="teamchat-channel__message-content" />
								</div>
							</li>
						)
					})}
				</ul>

				{loader}
			</div>
		)
	}
}
