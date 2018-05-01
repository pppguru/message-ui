const SELECT_CONVERSATION = 'messagesDetail/SELECT_CONVERSATION'
const CLEAR_CONVERSATION = 'messagesDetail/CLEAR_CONVERSATION'

const ADD_MESSAGE = 'messagesDetail/ADD_MESSAGE'
const CLEAR_MESSAGES = 'messagesDetail/CLEAR_MESSAGES'

const SHOW_LOADER = 'messagesDetail/SHOW_LOADER'
const HIDE_LOADER = 'messagesDetail/HIDE_LOADER'

const SHOW_STATUS_DROPDOWN = 'messagesDetail/SHOW_STATUS_DROPDOWN'
const HIDE_STATUS_DROPDOWN = 'messagesDetail/HIDE_STATUS_DROPDOWN'

const SHOW_CONFIRM_MODAL = 'messagesDetail/SHOW_CONFIRM_MODAL'
const HIDE_CONFIRM_MODAL = 'messagesDetail/HIDE_CONFIRM_MODAL'

const SUBMIT_STATUS = 'messagesDetail/SUBMIT_STATUS'
const SUBMIT_STATUS_SUCCESS = 'messagesDetail/SUBMIT_STATUS_SUCCESS'

const RESET_DETAIL = 'messagesDetail/RESET_DETAIL'

const SET_READ_STATUS = 'messagesDetail/SET_READ_STATUS'

const SET_IS_LISTENING = 'messagesDetail/SET_IS_LISTENING'

const initState = {
	loading: false,
	isListening: false,
	conversation: null,
	messages: [],
	// visibleLimit: 50,
	statusDropdownVisible: false,
	confirmModalVisible: false,
	isSubmittingStatus: false
}

export default function reducer(state = initState, action = {}) {
	switch (action.type) {
		case SELECT_CONVERSATION:
			return Object.assign({}, state, { conversation: action.conversation })

		case ADD_MESSAGE:
			return Object.assign({}, state, { messages: [...state.messages, action.message] })

		case CLEAR_MESSAGES:
			return Object.assign({}, state, { messages: [] })

		case CLEAR_CONVERSATION:
			return Object.assign({}, state, { conversation: null })

		case SHOW_LOADER:
			return Object.assign({}, state, { loading: true })

		case HIDE_LOADER:
			return Object.assign({}, state, { loading: false })

		case SHOW_STATUS_DROPDOWN:
			return Object.assign({}, state, { statusDropdownVisible: true })

		case HIDE_STATUS_DROPDOWN:
			return Object.assign({}, state, { statusDropdownVisible: false })

		case SHOW_CONFIRM_MODAL:
			return Object.assign({}, state, { confirmModalVisible: true })

		case HIDE_CONFIRM_MODAL:
			return Object.assign({}, state, { confirmModalVisible: false })

		case SUBMIT_STATUS:
			return Object.assign({}, state, { isSubmittingStatus: true })

		case SUBMIT_STATUS_SUCCESS:
			return Object.assign({}, state, { isSubmittingStatus: false })

		case RESET_DETAIL:
			return Object.assign({}, state, initState )

		case SET_READ_STATUS:
			if (state.conversations[action.requestId]) {
				var read = { ...state.conversations[action.requestId].read }

				read[action.customerId] = action.status

				return Object.assign({}, state, {
					conversation: {
						...state.conversation,
						read: read
					}
				})
			}

		case SET_IS_LISTENING:
      return Object.assign({}, state, {
        isListening: action.isListening
      })

		default:
			return state
	}
}

export function selectConversation(conversation) {
	return {
		type: SELECT_CONVERSATION,
		conversation
	}
}

export function addMessage(message) {
	return {
		type: ADD_MESSAGE,
		message
	}
}

export function clearMessages() {
	return { type: CLEAR_MESSAGES }
}

export function clearConversation() {
	return { type: CLEAR_CONVERSATION }
}

export function showLoader() {
	return { type: SHOW_LOADER }
}

export function hideLoader() {
	return { type: HIDE_LOADER }
}

export function showStatusDropdown() {
	return { type: SHOW_STATUS_DROPDOWN }
}

export function hideStatusDropdown() {
	return { type: HIDE_STATUS_DROPDOWN }
}

export function showConfirmModal() {
	return { type: SHOW_CONFIRM_MODAL }
}

export function hideConfirmModal() {
	return { type: HIDE_CONFIRM_MODAL }
}

export function submitStatus() {
	return { type: SUBMIT_STATUS }
}

export function submitStatusSuccess() {
	return { type: SUBMIT_STATUS_SUCCESS }
}

export function resetDetail() {
	return { type: RESET_DETAIL }
}

export function setReadStatus(requestId, customerId, status) {
	return { type: SET_READ_STATUS, requestId, customerId, status }
}

export function setIsListening(isListening) {
	return { 
		type: SET_IS_LISTENING,
		isListening 
	}
}