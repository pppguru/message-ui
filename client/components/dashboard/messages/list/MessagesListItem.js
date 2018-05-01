import React, { Component } from 'react'
import moment from 'moment'
import PersonPhoto from '../../../../components/dashboard/common/PersonPhoto'

export default class MessagesListItem extends Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(event) {
		event.preventDefault()

		this.props.onClick(this.props.conversation)
	}

	render() {
		const {
			userId,
			isSelected,
			conversation
		} = this.props

    const elapsedTime = Date.now() - conversation.lastMessage.createdAt * 1000
    const secondsDay = 24 * 60 * 60 * 1000
    const momentFormat = (elapsedTime < secondsDay) ? 'LT' : 'l LT' 

		const date = moment(conversation.lastMessage.createdAt * 1000).format(momentFormat)

		let fullName = 'Live Chat User'

		if (conversation.customer && conversation.customer.phone) {
			fullName = conversation.customer.phone
		}

		if (conversation.customer && conversation.customer.firstName && conversation.customer.lastName) {
			fullName = conversation.customer.firstName + ' ' + conversation.customer.lastName
		}

		const onlineStatus = 
			conversation.customer.online 
				? <span className="messages-list__online-status messages-list__online-status--online"></span> 
				: <span className="messages-list__online-status"></span>

		const readStatus =
			((conversation.read == undefined) || (!conversation.read[userId]))
				? <span className="messages-list__read-status messages-list__read-status--unread"></span> 
				: <span className="messages-list__read-status"></span>

		let lastMessage

		if (conversation.lastMessage) {
			if (conversation.lastMessage.data.text) {
				lastMessage = conversation.lastMessage.data.text
			} else if (conversation.lastMessage.data.offerId) {
				lastMessage = '(Offer)'
			} else if (conversation.lastMessage.data.imageUrl) {
				lastMessage = '(Attachment)'
			}
		}

		if (!conversation.completedAt) {
			return (
				<li className={(isSelected) ? 'messages-list__item messages-list__item--active' : 'messages-list__item'} onClick={this.handleClick}>
					<div className="messages-list__date">{date}</div>

					<div className="messages-list__photo-wrap">
						<PersonPhoto 
							photoUrl={conversation.customer.profileImageUrl && conversation.customer.profileImageUrl} 
							className="messages-list__photo" 
						/>

						{onlineStatus}
					</div>

					<div className="messages-list__content">
						<div className="messages-list__name">
							<div>{fullName} {readStatus}</div>
						</div>
						<div className="messages-list__message">
							{lastMessage}
						</div>
					</div>
				</li>
			)
		} else {
			return null
		}
	}
}
