import _ from 'lodash'
import update from 'react/lib/update'

const PUT_CONNECTIONS = 'teamchat/PUT_CONNECTIONS'

const PUT_CHANNEL = 'teamchat/PUT_CHANNEL'
const REMOVE_CHANNEL = 'teamchat/REMOVE_CHANNEL'

const SHOW_CONNECTIONS_LOADER = 'teamchat/SHOW_CONNECTIONS_LOADER'
const HIDE_CONNECTIONS_LOADER = 'teamchat/HIDE_CONNECTIONS_LOADER'

const SELECT_CHANNEL = 'teamchat/SELECT_CHANNEL' 
const CLEAR_CHANNEL = 'teamchat/CLEAR_CHANNEL'

const SHOW_CHANNEL_LOADER = 'teamchat/SHOW_CHANNEL_LOADER'
const HIDE_CHANNEL_LOADER = 'teamchat/HIDE_CHANNEL_LOADER'

const PUT_CHANNEL_MESSAGE = 'teamchat/PUT_CHANNEL_MESSAGE'

const SET_READ_STATUS = 'teamchat/SET_READ_STATUS'

const INCREMENT_UNREAD_CHANNEL_MESSAGES_COUNT = 'teamchat/INCREMENT_UNREAD_CHANNEL_MESSAGES_COUNT'
const DECREMENT_UNREAD_CHANNEL_MESSAGES_COUNT = 'teamchat/DECREMENT_UNREAD_CHANNEL_MESSAGES_COUNT'

const SET_IS_LISTENING = 'teamchat/SET_IS_LISTENING'

const SET_ACTIVITY = 'teamchat/SET_ACTIVITY'

const initialState = {
	channels: {},
	connectionsLoading: false,
	channel: null,
	channelLoading: false,
	channelMessages: [],
	unreadChannelMessagesCount: 0
}

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case PUT_CHANNEL:
			var channels = { ...state.channels }

			channels[action.channel.id] = action.channel

			return Object.assign({}, state, { channels })

		case REMOVE_CHANNEL:
			var channels = { ...state.channels }

			channels = _.remove(channels, { id: action.channelId })

			return Object.assign({}, state, { channels })

		case SHOW_CONNECTIONS_LOADER:
			return Object.assign({}, state, {
				connectionsLoading: true
			})

		case SELECT_CHANNEL:
			return Object.assign({}, state, {
				channel: action.channel
			})

		case CLEAR_CHANNEL:
			return Object.assign({}, state, {
				channelMessages: [],
				channel: null
			})

		case HIDE_CONNECTIONS_LOADER:
			return Object.assign({}, state, {
				connectionsLoading: false
			})

		case SHOW_CHANNEL_LOADER:
			return Object.assign({}, state, {
				channelLoading: true
			})

		case HIDE_CHANNEL_LOADER:
			return Object.assign({}, state, {
				channelLoading: false
			})

		case PUT_CHANNEL_MESSAGE:
			return Object.assign({}, state, {
				channelMessages: [
					...state.channelMessages, 
					action.message
				]
			})

		case SET_READ_STATUS:
			return update(state, {
				channels: {
					[action.id]: {
						read: {
							$set: action.status
						}
					}
				}
			})

		case INCREMENT_UNREAD_CHANNEL_MESSAGES_COUNT:
			return Object.assign({}, state, {
				unreadChannelMessagesCount: state.unreadChannelMessagesCount + action.count
			})

		case DECREMENT_UNREAD_CHANNEL_MESSAGES_COUNT:
			const result = state.unreadChannelMessagesCount - action.count

			return Object.assign({}, state, {
				unreadChannelMessagesCount: result < 0 ? 0 : result
			})

		case SET_IS_LISTENING:
			return update(state, {
				channels: {
					[action.id]: {
						isListening: { $set: action.isListening }
					}
				}
			})

		case SET_ACTIVITY:
			return update(state, {
				channels: {
					[action.id]: {
						activity: { $set: action.activity }
					}
				}
			})

		default:
			return state
	}
}

export function putChannel(channel) {
	return { type: PUT_CHANNEL, channel}
}

export function removeChannel(channelId) {
	return { type: REMOVE_CHANNEL, channelId }
}

export function showConnectionsLoader() {
	return { type: SHOW_CONNECTIONS_LOADER }
}

export function hideConnectionsLoader() {
	return { type: HIDE_CONNECTIONS_LOADER }
}

export function selectChannel(channel) {
	return { type: SELECT_CHANNEL, channel }
}

export function clearChannel() {
	return { type: CLEAR_CHANNEL }
}

export function showChannelLoader() {
	return { type: SHOW_CHANNEL_LOADER }
}

export function hideChannelLoader() {
	return { type: HIDE_CHANNEL_LOADER }
}

export function putChannelMessage(message) {
	return { type: PUT_CHANNEL_MESSAGE, message }
}

export function setReadStatus(id, status) {
	return {
		type: SET_READ_STATUS,
		id,
		status
	}
}

export function incrementUnreadChannelMessagesCount(count = 1) {
	return {
		type: INCREMENT_UNREAD_CHANNEL_MESSAGES_COUNT,
		count
	}
}

export function decrementUnreadChannelMessagesCount(count = 1) {
	return {
		type: DECREMENT_UNREAD_CHANNEL_MESSAGES_COUNT,
		count
	}
}

export function setIsListening(id, isListening) {
	return {
		type: SET_IS_LISTENING,
		id,
		isListening
	}
}

export function setActivity(id, activity) {
	return {
		type: SET_ACTIVITY,
		id,
		activity
	}
}