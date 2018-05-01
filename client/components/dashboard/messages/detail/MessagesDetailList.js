import React, { Component } from 'react'
import Loader from '../../common/Loader'
import TextMessage from './messageTypes/TextMessage'
import OfferMessage from './messageTypes/OfferMessage'
import ImageMessage from './messageTypes/ImageMessage'

export default class MessagesDetailList extends Component {
	constructor(props) {
		super(props)

		this.scrollToBottom = this.scrollToBottom.bind(this)
	}

	componentDidUpdate() {
		this.scrollToBottom()
	}

	scrollToBottom() {
		this.refs.messagesDetailBoard.scrollTop = this.refs.messagesDetailBoard.scrollHeight
	}

	render() {
		const {
			messages,
			users,
			offers,
			user,
			loading,
			read,
			conversation: {
				customer: {
					id: customerId
				}
			},
			conversation
		} = this.props

		const loader = 
			<Loader 
				visible={(loading) ? true : false}
				centered={true}
				overlay={true} />

		let lastUserMessageKey = null

		this.props.messages && this.props.messages.map((message, index) => {
			if (message.value.sender.id == user.id) {
				lastUserMessageKey = message.key
			}
		})

		return (
			<div ref="messagesDetailBoard" className="messages-detail__board">
				<ul className="messages-detail__list">
					{ this.props.messages && this.props.messages.map((message, index) => {
							switch (message.value.type) {
								case 'text':
									return <TextMessage
													key={index}
													message={message}
													users={users}
													user={user}
													read={read}
													lastUserMessageKey={lastUserMessageKey}
													customerId={customerId} />
								
								case 'offer':
									return <OfferMessage
													key={index}
													message={message}
													offers={offers}
													user={user}
													read={read}
													lastUserMessageKey={lastUserMessageKey}
													customerId={customerId} />

								case 'image':
									return <ImageMessage
													key={index}
													message={message}
													user={user}
													users={users}
													scrollToBottom={this.scrollToBottom}
													read={read}
													lastUserMessageKey={lastUserMessageKey}
													customerId={customerId} />
								
								default:
									return null
							}
						})
					}
				</ul>

				{loader}
			</div>
		)
	}
}