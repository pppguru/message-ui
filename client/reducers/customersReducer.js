const ADD_CUSTOMER = 'customers/ADD_CUSTOMER'
const CLEAR = 'customers/CLEAR'
const SHOW_LOADER = 'customers/SHOW_LOADER'

const initialState = {
	loading: true,
	customers: []
}

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case ADD_CUSTOMER: 
			return {
				loading: false,
				customers: [
					action.customer,
					...state.customers
				]
			}

		case CLEAR:
			return {
				loading: false,
				customers: []
			}

    case SHOW_LOADER:
      return Object.assign({}, state, { loading: true })

		default:
			return state
	}
}

export function addCustomer(customer) {
	return {
		type: ADD_CUSTOMER,
		customer
	}
}

export function clearCustomers() {
  return {
    type: CLEAR
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}