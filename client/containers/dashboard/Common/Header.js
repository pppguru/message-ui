import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import sessionStore from 'utils/sessionStore'
import * as api from 'utils/api'
import FirebaseListener from 'utils/firebaseListener'
import HeaderComponent from 'components/dashboard/common/Header'
import Loader from 'components/dashboard/common/Loader'
import { logoutUser } from 'reducers/authReducer'
import { setOrganization, clearOrganization, putEmployees, clearEmployees } from 'reducers/organizationReducer'
import { showUserMenu, hideUserMenu } from 'reducers/appStateReducer'
import { showForm } from 'reducers/formsReducer'
import { putUser, setUserOnlineStatus, setUserLastSeenDate } from 'reducers/usersReducer'
import Profile from 'containers/dashboard/Common/Profile'
import FirebaseActivity from 'containers/dashboard/Teamchat/FirebaseActivity'
import { putCustomerRequest, updateCustomerRequest, incrementUnassignedCount } from 'reducers/activityReducer'
import { setIsListening } from 'reducers/messages/messagesDetailReducer'
import { 
	addConversation, 
	incrementUnreadConversationCount,
	decrementUnreadConversationCount,
	setLastMessage,
	setReadStatus
} from 'reducers/messages/messagesListReducer'
import {
	putChannel,
	setReadStatus as setChannelReadStatus,
	incrementUnreadChannelMessagesCount,
	decrementUnreadChannelMessagesCount,
	setActivity
} from 'reducers/teamchatReducer'

const CONVERSATION_LOAD_LIMIT = 100
const MESSAGE_LOAD_LIMIT = 100

@connect((state) => ({
	auth: state.auth,
	organization: state.organization.details,
	userMenuVisible: state.appState.userMenuVisible,
	users: state.users.users,
	conversations: state.messagesList.conversations,
	selectedConversation: state.messagesDetail.conversation,
	customerRequests: state.activity.customerRequests,
	channels: state.teamchat.channels
}), {
	logoutUser,
	setOrganization,
	clearOrganization,
	putEmployees,
	clearEmployees,
	showUserMenu,
	hideUserMenu,
	showForm,
	putUser,
	addConversation,
	putCustomerRequest,
	updateCustomerRequest,
	incrementUnassignedCount,
	incrementUnreadConversationCount,
	decrementUnreadConversationCount,
	setUserLastSeenDate,
	setUserOnlineStatus,
	setLastMessage,
	setReadStatus,
	setIsListening,
	putChannel,
	setChannelReadStatus,
	incrementUnreadChannelMessagesCount,
	decrementUnreadChannelMessagesCount,
	setActivity
})

export default class Header extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

	constructor(props) {
		super(props)

		this.firebaseListener = new FirebaseListener(this.props.auth.accessToken)
		this.customerRequestsSubscription = null
		this.conversationsSubscription = null
		this.conversationsActivitySubscribtions = []
		this.conversationsReadSubscribtions = []
		this.userOnlineStatusSubscriptions = []
		this.teamchatReadStatusSubscriptions = []
		this.channelMessagesSubscriptions = []
		this.channelActivitySubscribptions = []

		this.loadUsers = this.loadUsers.bind(this)
		this.checkUnreadChannels = this.checkUnreadChannels.bind(this)

		this.state = {
			requestsLoaded: false,
			conversationsLoaded: false,
			channelsLoaded: false,
			usersLoaded: false,
			allLoaded: false
		}
	}

	componentDidMount() {
		const {
			auth: {
				isAdmin
			},
			conversations,
			customerRequests,
			channels
		} = this.props

		this.loadOrganization()

		if (isAdmin) {
			this.loadMessageUsMembers()
		} else {
			this.loadUsers()
		}

		this.firebaseListener.connect()
			.then(() => {
				if (Object.keys(customerRequests).length == 0) {
					this.watchCustomerRequests()
				}

				if (Object.keys(conversations).length == 0) {
					this.watchConversations()
				}

				if (Object.keys(channels).length == 0) {
					this.getUserConnections()
				}
			})

		const loadedCheck = setInterval(() => {
			if (this.state.requestsLoaded && this.state.conversationsLoaded && this.state.channelsLoaded) {
				setTimeout(() => {
					this.setState({ allLoaded: true })
				}, 500)

				clearInterval(loadedCheck)
			}
		}, 200)
	}

	loadUsers() {
		const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken

		api.getEmployees(orgId, token)
			.then((response) => {
				this.props.clearEmployees()

				this.props.putEmployees(response)

				_.forEach(response, (employee) => {
					const user = {
						key: employee.id,
						value: employee
					}

					this.props.putUser(user)
				})
			})
			.catch((err) => {
				console.log('LOAD USERS ERR', err)
			})
	}

	loadOrganization() {
		const {
			auth: {
				profile: {
					organizationId,
					roles
				},
				accessToken
			}
		} = this.props

		if (organizationId) {
			api.loadOrganization(organizationId, accessToken)
				.then((response) => {
					this.props.setOrganization(response)
				})
				.catch((err) => {
					console.log('LOAD ORGANIZATION ERR', err)
				})
		}
	}

	loadMessageUsMembers() {
		const token = this.props.auth.accessToken

		api.getMessageUsMembers(token)
			.then((response) => {
				this.props.clearEmployees()

				this.props.putEmployees(response)				
			})
			.catch((err) => {
				console.log('LOAD MESSAGE US MEMBERS ERR', err)
			})
	}

	watchCustomerRequests() {
		const {
			auth: {
				isAdmin,
				profile: {
					organizationId
				}
			}
		} = this.props

		const firebasePath = isAdmin ? `messageus/customerRequests` : `organizations/${organizationId}/customerRequests/all`
		const orderBy = 'lastMessage/createdAt'
		let unassignedCount = 0

		const onChildAdded = (customerRequest) => {
			customerRequest.value.key = customerRequest.key

			this.props.putCustomerRequest(customerRequest)

			this.getCustomer(customerRequest.value.customer)

			if (!customerRequest.value.assignedTo) {
				this.props.incrementUnassignedCount()
			}
		}
		
		const onChildChanged = (customerRequest) => {
			customerRequest.value.key = customerRequest.key

			this.props.putCustomerRequest(customerRequest)
		}

		const onCompleted = (values) => {
			this.setState({ requestsLoaded: true })
		}

		this.customerRequestsSubscription = this.firebaseListener.subscribeNew(
			firebasePath,
			CONVERSATION_LOAD_LIMIT,
			orderBy,
			onChildAdded,
			onChildChanged,
			onCompleted
		)
	}

	watchConversations() {
		const userId = this.props.auth.profile.id

		let firebasePath = `employees/${userId}/customerRequests`
		const orderBy = 'lastMessage/createdAt'

		const onChildAdded = (conversation) => {
			if (!conversation.value.completedAt) {
				
				conversation.value.read = {}
				conversation.value.read[conversation.value.customer.id] = false
				conversation.value.read[userId] = false
				conversation.value.isListening = false

				this.props.incrementUnreadConversationCount()

				conversation.value.key = conversation.key
				this.props.addConversation(conversation)

				this.watchConversationActivity(conversation)
				this.watchConversationReadStatus(conversation)
			}
		}

		const onChildChanged = (conversation) => {
			const {
				key,
				value: {
					customer: { id: customerId },
					assignedTo: { id: assignedToId },
					lastMessage: {
						data: lastMessageData,
						sender: {
							id: senderId
						}
					}
				}
			} = conversation

			const {
				selectedConversation,
				conversations,
				auth: {
					profile: {
						id: userId
					}
				}
			} = this.props

			const isListening = conversations[key].isListening

			if (senderId != userId && !isListening && conversations[key].read[userId]) {
				this.props.incrementUnreadConversationCount()

				this.props.setReadStatus(key, userId, false)				
			}

			this.props.setReadStatus(key, customerId, false)
			this.props.setLastMessage(key, lastMessageData)
		}

		const onCompleted = () => {
			this.setState({ conversationsLoaded: true })
		}

		this.conversationsSubscription = this.firebaseListener.subscribeNew(
			firebasePath,
			CONVERSATION_LOAD_LIMIT,
			orderBy,
			onChildAdded,
			onChildChanged,
			onCompleted
		)
	}

	watchConversationActivity(conversation) {
		const firebasePath = `conversations/customerRequests/${conversation.key}/activity`
		const customerId = conversation.value.customer.id

		const onChildAdded = (result) => {
			if (result.key == customerId) {
				if (result.value.online) {
					this.props.setUserOnlineStatus(customerId, true)

					this.props.setUserLastSeenDate(customerId, null)
				} else if (result.value.lastSeenDate) {
					this.props.setUserOnlineStatus(customerId, false)

					this.props.setUserLastSeenDate(customerId, result.value.lastSeenDate)
				}
			}
		}

		const onChildChanged = (result) => {
			if (result.key == customerId) {
				if (result.value.online) {
					this.props.setUserOnlineStatus(customerId, true)

					this.props.setUserLastSeenDate(customerId, null)
				} else if (result.value.lastSeenDate) {
					this.props.setUserOnlineStatus(customerId, false)

					this.props.setUserLastSeenDate(customerId, result.value.lastSeenDate)
				}
			}
		}

		this.conversationsActivitySubscribtions[conversation.key] = this.firebaseListener.watchChild(
			firebasePath,
			onChildAdded,
			onChildChanged
		)
	}

	watchConversationReadStatus(conversation) {
		const firebasePath = `conversations/customerRequests/${conversation.key}/read`
		
		const {
			auth: {
				profile: {
					id: userId
				}
			},
			conversations
		} = this.props

		const customerId = conversation.value.customer.id
		const isListening = conversations[conversation.key].isListening

		const onChildAdded = result => {
			if (result.key == customerId && result.value) {
				this.props.setReadStatus(conversation.key, customerId, true)
			}

			if (!isListening && result.key == userId && result.value && !conversations[conversation.key].read[userId]) {
				this.props.setReadStatus(conversation.key, userId, true)
				
				this.props.decrementUnreadConversationCount()
			}
		}

		this.conversationsActivitySubscribtions[conversation.key] = 
			this.firebaseListener.watchChild(firebasePath, onChildAdded)
	}

	getUserConnections() {
		const {
			auth: {
				accessToken: token,
				profile: {
					id: userId
				}
			},
			channels
		} = this.props

		api.getUserConnections(token)
			.then((connections) => {
				connections.users.forEach(user => {
					this.watchUserActivity(user.id)
				})

				connections.channels.forEach(channel => {
					const { id: channelId, members } = channel

					if (members.length == 2) {
						channel.type = 'user'
					} else {
						channel.type = 'private'
					}

					channel.isListening = false

					channel.read = true

					this.props.putChannel(channel)

					const messagesFirebasePath = `conversations/channels/${channelId}/messages`

					const onActivityChange = (result) => {
						if (result.key == userId) {
							if (result.value.lastSeenDate) {
								this.props.setActivity(channelId, { lastSeenDate: result.value.lastSeenDate })
							
							} else if (result.value.online) {
								this.props.setActivity(channelId, { online: true })
							}
						}
					}

					this.channelActivitySubscribptions[channelId] = this.firebaseListener.watchChild(`conversations/channels/${channelId}/activity`, onActivityChange, onActivityChange, onActivityChange)

					const onMessagesChange = (result) => {
						if (this.state.channelsLoaded && !this.props.channels[channelId].isListening && this.props.channels[channelId].read) {
							this.props.incrementUnreadChannelMessagesCount()

							this.props.setChannelReadStatus(channelId, false)
						}
					}

					const orderBy = 'value/createdAt'

					this.channelMessagesSubscriptions[channelId] = this.firebaseListener.subscribeNew(
						messagesFirebasePath,
						1000,
						orderBy,
						onMessagesChange, 
						onMessagesChange, 
						onMessagesChange
					)
				})

				setTimeout(() => {
					this.checkUnreadChannels()
				}, 1000)
			})
			.catch((err) => {
				console.log('GET USER CONNECTIONS ERR', err)
			})
	}

	checkUnreadChannels() {
		const { channels } = this.props

		if (Object.keys(channels).length > 0) {
			Object.keys(channels).map((key, index) => {
				const firebasePath = `conversations/channels/${key}/messages`
				const lastSeenDate = channels[key] && channels[key].activity && channels[key].activity.lastSeenDate

				if (lastSeenDate) {
					this.firebaseListener.getUnreadMessagesCount(firebasePath, lastSeenDate, (result) => {
						if (result.count > 0) {
							this.props.incrementUnreadChannelMessagesCount()

							this.props.setChannelReadStatus(key, false)
						}
					})
				}

				if (index == Object.keys(channels).length - 1) {
					this.setState({ channelsLoaded: true })
				}
			})
		} else {
			this.setState({ channelsLoaded: true })
		}
	}

	watchUserActivity(id) {
		const firebasePath = `users/${id}/activity`

		const onChildAdded = result => {
			if (result.key == 'lastSeenDate') {
				this.props.setUserOnlineStatus(id, false)
				
				this.props.setUserLastSeenDate(id, result.value.lastSeenDate)
			} else {
				this.props.setUserOnlineStatus(id, true)
				
				this.props.setUserLastSeenDate(id, null)
			}
		}

		const onChildChanged = onChildAdded

		this.userOnlineStatusSubscriptions[id] = this.firebaseListener.watchChild(
			firebasePath,
			onChildAdded,
			onChildChanged
		)
	}

	getUsers(customerRequest) {
		const customer = customerRequest.value.customer
		const customerFirebasePath = `users/${customer.id}`

		this.firebaseListener.getEntry(customerFirebasePath, (user) => {
			if (!this.props.users[customer.id]) {
				this.props.putUser(user)
			}
		})

		const assignedTo = customerRequest.value.assignedTo

		if (assignedTo) {
			const assignedToFirebasePath = `users/${assignedTo.id}`

			this.firebaseListener.getEntry(assignedToFirebasePath, (user) => {
				if (!this.props.users[assignedTo.id]) {
					this.props.putUser(user)
				}
			})
		}
	}

	getCustomer(customer) {
		const customerFirebasePath = `users/${customer.id}`

		if (customer) {
			this.firebaseListener.getEntry(customerFirebasePath, (user) => {
				if (!this.props.users[customer.id]) {
					this.props.putUser(user)
				}
			})
		}
	}

	render() {
		const {
			organization,
			auth,
			userMenuVisible,
			showUserMenu,
			hideUserMenu,
			handleLogout,
			showForm
		} = this.props

		const {
			allLoaded
		} = this.state

		return (
			<div>
				<div className={!allLoaded ? 'overlay-loader' : 'overlay-loader overlay-loader--hidden'}>
					<img src={require('assets/img/messageus-logo-sign.svg')} />

					<Loader visible={true} />
				</div>

				<Profile
					reloadUsers={this.loadUsers} />

				<HeaderComponent
					handleLogout={handleLogout}
					organization={organization}
					profile={auth.profile}
					userMenuVisible={userMenuVisible}
					showUserMenu={showUserMenu}
					hideUserMenu={hideUserMenu}
					showForm={showForm} />

				<FirebaseActivity profile={auth} />
			</div>
		)
	}
}
