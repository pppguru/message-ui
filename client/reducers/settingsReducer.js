import _ from 'lodash'

const PUT_PAYMENT_METHODS = 'settings/PUT_PAYMENT_METHODS'

const SHOW_FORM = 'settings/SHOW_FORM'
const HIDE_FORM = 'settings/HIDE_FORM'

const PUT_FORM_DATA = 'settings/PUT_FORM_DATA'
const CLEAR_FORM_DATA = 'settings/CLEAR_FORM_DATA'

const ADD_TO_SELECTED = 'settings/ADD_TO_SELECTED'
const REMOVE_FROM_SELECTED = 'settings/REMOVE_FROM_SELECTED'
const CLEAR_SELECTED = 'settings/CLEAR_SELECTED'

const initialState = {
	paymentMethods: {},
	
	departments: {
		formVisible: false,
		formData: null,
		selected: []
	},

	members: {
		selected: []
	}
}

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case PUT_PAYMENT_METHODS:
      var paymentMethods = {}

      action.paymentMethods.gateways.map(gateway => {
				paymentMethods[gateway.gateway_type] = gateway
      })
			
			return Object.assign({}, state, {
				paymentMethods: paymentMethods,
				lastUpdated: Date.now()
			})

		case SHOW_FORM:
			var target = state[action.form]

			target.formVisible = true

			return {
				...state,
				target
			}

		case HIDE_FORM:
			var target = state[action.form]
			
			target.formVisible = false

			return {
				...state,
				target
			}

		case PUT_FORM_DATA:
			var target = state[action.form]

			target.formData = action.data

			return {
				...state,
				target
			}

		case CLEAR_FORM_DATA:
			var target = state[action.form]

			target.formData = null

			return {
				...state,
				target
			}

    case ADD_TO_SELECTED:
    	if (typeof action.payload === 'string') {
				let newState = state

				newState[action.target].selected.push(action.payload)

				return newState
      } 

      else if (typeof action.payload === 'object') {
				let newState = state

				newState[action.target].selected = action.payload

        return newState
      }
    
    case REMOVE_FROM_SELECTED:
    	let newState = state

    	newState[action.target].selected = _.pull(newState[action.target].selected, action.id)

			return newState
    
    case CLEAR_SELECTED:
      return state
		default:
			return state
	}
}

export function putPaymentMethods(paymentMethods) {
	return {
		type: PUT_PAYMENT_METHODS,
		paymentMethods
	}
}

export function showForm(form) {
	return {
		type: SHOW_FORM,
		form
	}
}

export function hideForm(form) {
	return {
		type: HIDE_FORM,
		form
	}
}

export function putFormData(form, data) {
	return {
		type: PUT_FORM_DATA,
		form,
		data
	}
}

export function clearFormData(form) {
	return {
		type: CLEAR_FORM_DATA,
		form
	}
}

export function addToSelected(payload, target) {
  return { 
  	type: ADD_TO_SELECTED, 
  	payload,
  	target
  }
}

export function removeFromSelected(id, target) {
  return { 
  	type: REMOVE_FROM_SELECTED, 
  	id,
  	target
  }
}

export function clearSelected(target) {
  return { 
  	type: CLEAR_SELECTED,
  	target
  }
}