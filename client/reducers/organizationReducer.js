import _ from 'lodash'

const SET_ORGANIZATION = 'organization/SET_ORGANIZATION'
const CLEAR_ORGANIZATION = 'organization/CLEAR_ORGANIZATION'

const PUT_EMPLOYEES = 'organization/PUT_EMPLOYEES'
const CLEAR_EMPLOYEES = 'organisation/CLEAR_EMPLOYEES'

const PUT_DEPARTMENTS = 'organization/PUT_DEPARTMENTS'

const SET_TWILIO_NUMBER = 'organization/SET_TWILIO_NUMBER'

const initialState = {
  details: [],
  employees: [],
  departments: []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ORGANIZATION:
      return Object.assign({}, state, {
        details: action.organization
      })

    case PUT_EMPLOYEES:
      return Object.assign({}, state, {
        employees: action.employees
      })

    case CLEAR_EMPLOYEES:
      return Object.assign({}, state, {
        employees: []
      })

    case CLEAR_ORGANIZATION:
      return Object.assign({}, state, {
        details: []
      })

    case PUT_DEPARTMENTS:
      return Object.assign({}, state, {
        departments: action.departments
      })

    case SET_TWILIO_NUMBER:
      return Object.assign({}, state, {
        details: {
          ...state.details,
          twilio: {
            ...state.details.twilio,
            phone: action.phone,
          }
        }
      })

    default:
      return state
  }
}

export function setOrganization(organization) {
  return {
    type: SET_ORGANIZATION,
    organization
  }
}

export function clearOrganization() {
  return {
    type: CLEAR_ORGANIZATION
  }
}

export function putEmployees(employees) {
  return {
    type: PUT_EMPLOYEES,
    employees
  }
}

export function clearEmployees() {
  return {
    type: CLEAR_EMPLOYEES
  }  
}

export function putDepartments(departments) {
  return {
    type: PUT_DEPARTMENTS,
    departments
  }
}

export function setTwilioNumber(phone) {
  return {
    type: SET_TWILIO_NUMBER,
    phone
  }
}