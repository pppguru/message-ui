import _ from 'lodash'

const PUT_PAYMENT_GATEWAY_REQUESTS = 'organizations/PUT_PAYMENT_GATEWAY_REQUESTS'
const REMOVE_PAYMENT_GATEWAY_REQUEST = 'organizations/REMOVE_PAYMENT_GATEWAY_REQUEST'

const PUT_ORGANIZATION = 'organizations/PUT_ORGANIZATION'

const initialState = {
  organizations: {},
  paymentGatewayRequests: []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PUT_PAYMENT_GATEWAY_REQUESTS:
      return Object.assign({}, state, {
        paymentGatewayRequests: action.requests
      })

    case REMOVE_PAYMENT_GATEWAY_REQUEST:
      var index = _.findIndex(state.paymentGatewayRequests, { _id: action.id })

      return Object.assign({}, state, {
        paymentGatewayRequests: [
          ...state.paymentGatewayRequests.slice(0, index),
          ...state.paymentGatewayRequests.slice(index + 1)
        ]
      })

    case PUT_ORGANIZATION:
      var organizations = { ...state.organizations }

      organizations[action.organization.id] = action.organization

      return Object.assign({}, state, { organizations, lastUpdated: Date.now() })

    default:
      return state
  }
}

export function putPaymentGatewayRequests(requests) {
  return {
    type: PUT_PAYMENT_GATEWAY_REQUESTS,
    requests
  }
}

export function removePaymentGatewayRequest(id) {
  return {
    type: REMOVE_PAYMENT_GATEWAY_REQUEST,
    id
  }
}

export function putOrganization(organization) {
  return {
    type: PUT_ORGANIZATION,
    organization
  }
}