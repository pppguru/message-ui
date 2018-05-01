import _ from 'lodash'

const PUT_CUSTOMER_REQUEST = 'activity/PUT_CUSTOMER_REQUEST'
const UPDATE_CUSTOMER_REQUEST = 'activity/UPDATE_CUSTOMER_REQUEST'
const CLEAR_CUSTOMER_REQUESTS = 'activity/CLEAR_CUSTOMER_REQUESTS'

const SHOW_LOADER = 'activity/SHOW_LOADER'
const HIDE_LOADER = 'activity/HIDE_LOADER'

const SHOW_ASSIGN_FORM = 'activity/SHOW_ASSIGN_FORM'
const HIDE_ASSIGN_FORM = 'activity/HIDE_ASSIGN_FORM'

const SHOW_CUSTOMER_FORM = 'activity/SHOW_CUSTOMER_FORM'
const HIDE_CUSTOMER_FORM = 'activity/HIDE_CUSTOMER_FORM'
const PUT_CUSTOMER_FORM_DATA = 'activity/PUT_CUSTOMER_FORM_DATA'
const CLEAR_CUSTOMER_FORM_DATA = 'activity/CLEAR_CUSTOMER_FORM_DATA'

const ADD_TO_SELECTED = 'activity/ADD_TO_SELECTED'
const REMOVE_FROM_SELECTED = 'activity/REMOVE_FROM_SELECTED'
const CLEAR_SELECTED = 'activity/CLEAR_SELECTED'
const RESET_ACTIVITIES = 'activity/RESET_ACTIVITIES'

const TOGGLE_IS_REDIRECTED_FROM_ACTIVITY = 'activity/TOGGLE_IS_REDIRECTED_FROM_ACTIVITY'
const SET_REQUEST_KEY_TO_SELECT = 'activity/SET_REQUEST_KEY_TO_SELECT'

const INCREMENT_UNASSIGNED_COUNT = 'activity/INCREMENT_UNASSIGNED_COUNT'
const DECREMENT_UNASSIGNED_COUNT = 'activity/DECREMENT_UNASSIGNED_COUNT'

const initialState = {
  loading: false,
  customerRequests: {},
  selected: [],
  assignFormVisible: false,
  customerFormVisible: false,
  customerFormData: null,
  isEditingCustomer: false,
  unassignedCount: 0,
  isRedirectedFromActivity: false,
  requestKeyToSelect: null
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PUT_CUSTOMER_REQUEST:
      var customerRequests = { ...state.customerRequests }

      customerRequests[action.key] = action.value

      return Object.assign({}, state, {
        customerRequests: customerRequests
      })

    case UPDATE_CUSTOMER_REQUEST:
      var index = _.indexOf(state.customerRequests, _.find(state.customerRequests, { key: action.customerRequest.key }))

      return Object.assign({}, state, {
        customerRequests: [
          ...state.customerRequests.slice(0, index),
          action.customerRequest,
          ...state.customerRequests.slice(index + 1)
        ]
      })

    case CLEAR_CUSTOMER_REQUESTS:
      return Object.assign({}, state, {
        customerRequests: []
      })

    case SHOW_LOADER:
      return Object.assign({}, state, {
        loading: true
      })

    case HIDE_LOADER:
      return Object.assign({}, state, {
        loading: false
      })

    case SHOW_ASSIGN_FORM:
      return Object.assign({}, state, {
        assignFormVisible: true
      })

    case HIDE_ASSIGN_FORM:
      return Object.assign({}, state, {
        assignFormVisible: false
      })

    case SHOW_CUSTOMER_FORM:
      return Object.assign({}, state, {
        customerFormVisible: true
      })

    case HIDE_CUSTOMER_FORM:
      return Object.assign({}, state, {
        customerFormVisible: false
      })

    case PUT_CUSTOMER_FORM_DATA:
      return Object.assign({}, state, {
        isEditingCustomer: true,
        customerFormData: action.data
      })

    case CLEAR_CUSTOMER_FORM_DATA:
      return Object.assign({}, state, {
        isEditingCustomer: false,
        customerFormData: null
      })

    case ADD_TO_SELECTED:
      if (typeof action.payload === 'string') {
        return Object.assign({}, state, {
          selected: [
            ...state.selected,
            action.payload
          ]
        })
      } else if (typeof action.payload === 'object') {
        var oldSelected = state.selected

        var newSelected = _.concat(oldSelected, action.payload)

        return Object.assign({}, state, {
          selected: newSelected
        })
      }

    case REMOVE_FROM_SELECTED:
      var oldSelected = state.selected

      var newSelected = _.pull(state.selected, action.id)

      setTimeout(() => {
        return Object.assign({}, state, {
          selected: newSelected
        })
      }, 500)

    case CLEAR_SELECTED:
      return Object.assign({}, state, {
        selected: []
      })

    case RESET_ACTIVITIES:
      return Object.assign({}, state, initialState)

    case TOGGLE_IS_REDIRECTED_FROM_ACTIVITY:
      return Object.assign({}, state, {
        isRedirectedFromActivity: !state.isRedirectedFromActivity
      })

    case SET_REQUEST_KEY_TO_SELECT:
      return Object.assign({}, state, {
        requestKeyToSelect: action.key
      })

    case INCREMENT_UNASSIGNED_COUNT:
      return Object.assign({}, state, {
        unassignedCount: state.unassignedCount + 1
      })

    case DECREMENT_UNASSIGNED_COUNT:
      return Object.assign({}, state, {
        unassignedCount: state.unassignedCount - 1
      })

    default:
      return state
  }
}

export function putCustomerRequest(customerRequest) {
  return { type: PUT_CUSTOMER_REQUEST, key: customerRequest.key, value: customerRequest.value }
}

export function updateCustomerRequest(customerRequest) {
  return { type: UPDATE_CUSTOMER_REQUEST, customerRequest }
}

export function clearCustomerRequests() {
  return { type: CLEAR_CUSTOMER_REQUESTS }
}

export function showLoader() {
  return { type: SHOW_LOADER }
}

export function hideLoader() {
  return { type: HIDE_LOADER }
}

export function showAssignForm() {
  return { type: SHOW_ASSIGN_FORM }
}

export function hideAssignForm() {
  return { type: HIDE_ASSIGN_FORM }
}

export function showCustomerForm() {
  return { type: SHOW_CUSTOMER_FORM }
}

export function hideCustomerForm() {
  return { type: HIDE_CUSTOMER_FORM }
}

export function putCustomerFormData(data) {
  return { type: PUT_CUSTOMER_FORM_DATA, data }
}

export function clearCustomerFormData() {
  return { type: CLEAR_CUSTOMER_FORM_DATA }
}

export function addToSelected(payload) {
  return { type: ADD_TO_SELECTED, payload }
}

export function removeFromSelected(id) {
  return { type: REMOVE_FROM_SELECTED, id }
}

export function clearSelected() {
  return { type: CLEAR_SELECTED }
}

export function resetActivities() {
  return { type: RESET_ACTIVITIES }
}

export function toggleIsRedirectedFromActivity() {
  return { type: TOGGLE_IS_REDIRECTED_FROM_ACTIVITY }
}

export function setRequestKeyToSelect(key) {
  return { type: SET_REQUEST_KEY_TO_SELECT, key }
}

export function incrementUnassignedCount() {
  return { type: INCREMENT_UNASSIGNED_COUNT }
}

export function decrementUnassignedCount() {
  return { type: DECREMENT_UNASSIGNED_COUNT }
}