const PUT_CUSTOMER = 'messagesSidebar/PUT_CUSTOMER'
const CLEAR_CUSTOMER = 'messagesSidebar/CLEAR_CUSTOMER'
const SHOW_LOADER = 'messagesSidebar/SHOW_LOADER'
const HIDE_LOADER = 'messagesSidebar/HIDE_LOADER'

const RESET_SIDEBAR = 'messagesSidebar/RESET_SIDEBAR'

const initState = {
	loading: false,
	customer: null
}

export default function reducer(state = initState, action = {}) {
	switch (action.type) {
		case PUT_CUSTOMER:
			return Object.assign({}, state, { customer: action.customer })
		case CLEAR_CUSTOMER:
			return Object.assign({}, state, { customer: null })
		case SHOW_LOADER:
			return Object.assign({}, state, { loading: true })
		case HIDE_LOADER:
			return Object.assign({}, state, { loading: false })
		case RESET_SIDEBAR:
			return Object.assign({}, state, initState)
		default:
			return state
	}
}

export function putCustomer(customer) {
	return {
		type: PUT_CUSTOMER,
		customer
	}
}

export function clearCustomer() {
	return { type: CLEAR_CUSTOMER }
}

export function showLoader() {
	return { type: SHOW_LOADER }
}

export function hideLoader() {
	return { type: HIDE_LOADER }
}

export function resetSidebar() {
	return { type: RESET_SIDEBAR }
}
