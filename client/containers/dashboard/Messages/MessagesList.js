import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as api from 'utils/api'
import FirebaseListener from 'utils/firebaseListener'
import { setRequestKeyToSelect } from 'reducers/activityReducer'
import { putUser } from 'reducers/usersReducer'
import { putOffer } from 'reducers/offersReducer'
import Loader from 'components/dashboard/common/Loader'
import MessagesListItem from 'components/dashboard/messages/list/MessagesListItem'
import { 
	addMessage, 
	clearMessages, 
	selectConversation, 
	clearConversation, 
	showLoader as showDetailLoader, 
	hideLoader as hideDetailLoader,
	incrementUnreadConversationCount
} from 'reducers/messages/messagesDetailReducer'
import { 
	addConversation, 
	updateConversation, 
	clearConversations, 
	showLoader as showListLoader, 
	hideLoader as hideListLoader, 
	decrementUnreadConversationCount,
	setReadStatus,
	setIsListening
} from 'reducers/messages/messagesListReducer'

const CONVERSATION_LOAD_LIMIT = 100
const MESSAGE_LOAD_LIMIT = 100

@connect((state) => ({
	auth: state.auth,
	users: state.users.users,
	offers: state.offers.offers,
	loading: state.messagesList.loading,
	conversations: state.messagesList.conversations,
	isRedirectedFromActivity: state.activity.isRedirectedFromActivity,
	requestKeyToSelect: state.activity.requestKeyToSelect,
	selectedConversation: state.messagesDetail.conversation
}), {
	selectConversation,
	clearConversation,
	addMessage,
	clearMessages,
	showDetailLoader,
	hideDetailLoader,
	putUser,
	putOffer,
	setRequestKeyToSelect,
	incrementUnreadConversationCount,
	decrementUnreadConversationCount,
	setReadStatus,
	setIsListening
})

export default class MessagesList extends Component {
	constructor(props) {
		super(props)

		this.firebaseListener = new FirebaseListener(this.props.auth.accessToken)
		this.conversationMessagesSubscription = null

		this.handleConversationSelect = this.handleConversationSelect.bind(this)
	}

	componentDidMount() {
		const {
			conversations,
			requestKeyToSelect
		} = this.props

		if (requestKeyToSelect) {
			this.handleConversationSelect(requestKeyToSelect)

			this.props.setRequestKeyToSelect(null)
		}
	}

	componentWillUnmount() {
		this.props.hideDetailLoader()
	}

	handleConversationSelect(key) {
		if (this.props.selectedConversation) {
			this.props.setIsListening(this.props.selectedConversation.key, false)
		}

		if (!this.props.selectedConversation || key != this.props.selectedConversation.key) {
			this.props.setIsListening(key, true)

			this.props.clearMessages()

			this.props.selectConversation(this.props.conversations[key])

			this.watchConversationMessages(key)

			this.firebaseListener.setRead(`conversations/customerRequests/${key}/read/${this.props.auth.profile.id}`)
		}
	}

	watchConversationMessages(key) {
		this.props.showDetailLoader()

		if (this.conversationMessagesSubscription) {
			this.firebaseListener.unsubscribe(this.conversationMessagesSubscription)

			this.conversationMessagesSubscription = null
		}

		const firebasePath = `conversations/customerRequests/${key}/messages`
		const orderBy = 'createdAt'

		const onChildAdded = (message) => {
			this.props.addMessage(message)

			const offerId = message.value.data.offerId

			if (offerId) {
				this.getOffer(offerId)
			}
		}

		const onCompleted = () => { this.props.hideDetailLoader() }

		this.conversationMessagesSubscription = this.firebaseListener.subscribeNew(
			firebasePath,
			MESSAGE_LOAD_LIMIT,
			orderBy,
			onChildAdded,
			null,
			onCompleted
		)
	}

	getOffer(offerId) {
		api.getOfferDetails(offerId, this.props.auth.accessToken)
			.then((result) => {
				if (!this.props.offers[offerId]) {
					const offer = {
						id: offerId,
						value: result
					}

					this.props.putOffer(offer)
				}
			})
			.catch((err) => {
				switch (err.status) {
					case 404:
						const offer = {
							id: offerId,
							value: { expired: true }
						}

						this.props.putOffer(offer)
						break
				}
			})
	}

	render() {
		const {
			auth: {
				profile: {
					id: userId
				}
			},
			users,
			loading,
			conversations,
			selectedConversation
		} = this.props

		let loader =
			<Loader
				visible={(loading) ? true : false}
				centered={true}
				overlay={true} />

		return (
			<ul className="messages-list">
				{ Object.keys(conversations).reverse().map((key) => {
					const isSelected = (selectedConversation && selectedConversation.key == key) ? true : false

					conversations[key].customer = (users[conversations[key].customer.id]) ? users[conversations[key].customer.id] : conversations[key].customer

					return (
						<MessagesListItem
							key={key}
							isSelected={isSelected}
							conversation={conversations[key]}
							userId={userId}
							onClick={() => {this.handleConversationSelect(key)}} />
					)
				})}
			</ul>
		)
	}
}
