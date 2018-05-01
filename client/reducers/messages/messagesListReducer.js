import update from 'react/lib/update'

const ADD_CONVERSATION = 'messagesList/ADD_CONVERSATION'
const REMOVE_CONVERSATION = 'messagesList/REMOVE_CONVERSATION'

const CLEAR_CONVERSATIONS = 'messagesList/CLEAR_CONVERSATIONS'

const SET_ONLINE = 'messagesList/SET_ONLINE'

const SHOW_LOADER = 'messagesList/SHOW_LOADER'
const HIDE_LOADER = 'messagesList/HIDE_LOADER'

const SET_LAST_MESSAGE = 'messagesList/SET_LAST_MESSAGE'
const SET_READ_STATUS = 'messagesList/SET_READ_STATUS'

const INCREMENT_UNREAD_CONVERSATION_COUNT = 'messagesList/INCREMENT_UNREAD_CONVERSATION_COUNT'
const DECREMENT_UNREAD_CONVERSATION_COUNT = 'messagesList/DECREMENT_UNREAD_CONVERSATION_COUNT'

const SET_IS_LISTENING = 'messagesDetail/SET_IS_LISTENING'

const initState = {
	loading: false,
	conversations: {},
	isRedirectedFromActivity: false,
	unreadConversationCount: 0
}

export default function reducer(state = initState, action = {}) {
	switch (action.type) {
    case ADD_CONVERSATION:
      var conversations = { ...state.conversations }

      conversations[action.key] = action.value

      return Object.assign({}, state, {
        conversations: conversations
      })
		
		case CLEAR_CONVERSATIONS:
			return Object.assign({}, state, {
				conversations: []
			})

		case SET_ONLINE:
			var index = _.indexOf(state.conversations, _.find(state.conversations, { key: action.conversation.key }))
		
		case SHOW_LOADER:
			return Object.assign({}, state, { loading: true })
		
		case HIDE_LOADER:
			return Object.assign({}, state, { loading: false })
		
		case REMOVE_CONVERSATION:
      var conversations = { ...state.conversations }

      delete conversations[action.key]

      return Object.assign({}, state, {
        conversations: conversations
      })
		
		case SET_LAST_MESSAGE:
			var conversations = { ...state.conversations }

			conversations[action.key].lastMessage.data = action.message			

			return Object.assign({}, state, {
				conversations: conversations
			})

		case SET_READ_STATUS:
			var conversations = { ...state.conversations }

			conversations[action.key].read[action.userId] = action.status			

			return Object.assign({}, state, {
				conversations: conversations
			})

		case INCREMENT_UNREAD_CONVERSATION_COUNT:
			return Object.assign({}, state, {
				unreadConversationCount: state.unreadConversationCount + 1
			})

		case DECREMENT_UNREAD_CONVERSATION_COUNT:
			if (state.unreadConversationCount > 0) {
				return Object.assign({}, state, {
					unreadConversationCount: state.unreadConversationCount - 1
				})
			} else {
				return Object.assign({}, state, {
					unreadConversationCount: 0
				})
			}

		case SET_IS_LISTENING:
      return update(state, {
        conversations: {
          [action.key]: {
            isListening: { $set: action.isListening }
          }
        }
      })

		default:
			return state
	}
}

export function addConversation(conversation, userId) {
	return {
		type: ADD_CONVERSATION,
		key: conversation.key,
		value: conversation.value,
		userId
	}
}

export function removeConversation(key) {
	return {
		type: REMOVE_CONVERSATION,
		key
	}
}

export function clearConversations() {
	return { 
		type: CLEAR_CONVERSATIONS 
	}
}

export function showLoader() {
	return { 
		type: SHOW_LOADER 
	}
}

export function hideLoader() {
	return { 
		type: HIDE_LOADER 
	}
}

export function setLastMessage(key, message) {
	return { 
		type: SET_LAST_MESSAGE, 
		key, 
		message 
	}
}

export function setReadStatus(key, userId, status) {
	return {
		type: SET_READ_STATUS,
		key,
		userId,
		status
	}
}

export function incrementUnreadConversationCount() {
	return {
		type: INCREMENT_UNREAD_CONVERSATION_COUNT
	}
}

export function decrementUnreadConversationCount() {
	return {
		type: DECREMENT_UNREAD_CONVERSATION_COUNT
	}
}

export function setIsListening(key, isListening) {
	return {
		type: SET_IS_LISTENING,
		key,
		isListening
	}
}