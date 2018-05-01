const LOAD = 'auth/LOAD'
const LOGIN = 'auth/LOGIN'
const LOGOUT = 'auth/LOGOUT'

const SHOW_LOADER = 'auth/SHOW_LOADER'
const HIDE_LOADER = 'auth/HIDE_LOADER'

const SET_ERROR = 'auth/SET_ERROR'

const SET_EMAIL_FROM_INVITATION = 'auth/SET_EMAIL_FROM_INVITATION'
const CLEAR_EMAIL_FROM_INVITATION = 'auth/CLEAR_EMAIL_FROM_INVITATION'

const SET_TAB = 'auth/SET_TAB'
const CLEAR_TAB = 'auth/CLEAR_TAB'

const SET_MESSAGE = 'auth/SET_MESSAGE'
const CLEAR_MESSAGE = 'auth/CLEAR_MESSAGE'

const SET_INVITATION = 'auth/SET_INVITATION'
const CLEAR_INVITATION = 'auth/CLEAR_INVITATION'

const UPDATE_PROFILE = 'auth/UPDATE_PROFILE'

const SET_LAST_UPDATED = 'auth/SET_LAST_UPDATED'

const initialState = {
  loading: {
    login: false,
    signup: false,
    reset: false
  },
  logged: false,
  profile: null,
  accessToken: null,
  error: null,
  invitationEmail: null,
  tab: 'login',
  invitation: null,
  message: null,
  lastUpdatedProfileImage: new Date().getTime()
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {  
    case LOAD:
      return state
    
    case LOGIN:
      return Object.assign({}, state, {
        logged: true,
        profile: action.auth.profile,
        isAdmin: (action.auth.profile.roles[0] === 'admin') ? true : false,
        isSuperAdmin: action.auth.isSuperAdmin,
        accessToken: action.auth.accessToken
      })
    
    case LOGOUT:
      return Object.assign({}, state, {
        logged: false,
        profile: null,
        accessToken: null
      })
    
    case SHOW_LOADER:
      var newState = { ...state }

      newState.loading[action.target] = true

      return newState

    
    case HIDE_LOADER:
      var newState = { ...state }

      newState.loading[action.target] = false

      return newState

    
    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.error
      })
    
    case SET_EMAIL_FROM_INVITATION:
      return Object.assign({}, state, {
        invitationEmail: action.email
      })
    
    case CLEAR_EMAIL_FROM_INVITATION:
      return Object.assign({}, state, {
        invitationEmail: null
      })
    
    case SET_TAB:
      return Object.assign({}, state, {
        tab: action.tab
      })
    
    case CLEAR_TAB:
      return Object.assign({}, state, {
        tab: null
      })
    
    case SET_INVITATION:
      return Object.assign({}, state, {
        invitation: action.invitation
      })
    
    case CLEAR_INVITATION:
      return Object.assign({}, state, {
        invitation: null
      })
    
    case SET_MESSAGE:
      return Object.assign({}, state, {
        message: action.message
      })
    
    case CLEAR_MESSAGE:
      return Object.assign({}, state, {
        message: null
      })
    
    case CLEAR_MESSAGE:
      return Object.assign({}, state, {
        message: null
      })

    case UPDATE_PROFILE:
      return Object.assign({}, state, {
        profile: action.profile
      })

    case SET_LAST_UPDATED:
      return Object.assign({}, state, {
        lastUpdatedProfileImage: new Date().getTime()
      })

    default:
      return state
  }
}

export function loginUser(auth) {
  return { type: LOGIN, auth }
}

export function logoutUser() {
  return { type: LOGOUT }
}

export function showLoader(target) {
  return { type: SHOW_LOADER, target }
}

export function hideLoader(target) {
  return { type: HIDE_LOADER, target }
}

export function setError(error) {
  return { type: SET_ERROR, error }
}

export function setEmailFromInvitation(email) {
  return { type: SET_EMAIL_FROM_INVITATION, email }
}

export function clearEmailFromInvitation() {
  return { type: CLEAR_EMAIL_FROM_INVITATION }
}

export function setTab(tab) {
  return { type: SET_TAB, tab }
}

export function clearTab() {
  return { type: CLEAR_TAB }
}

export function setInvitation(invitation) {
  return { type: SET_INVITATION, invitation }
}

export function clearInvitation() {
  return { type: CLEAR_INVITATION }
}

export function setMessage(message) {
  return { type: SET_MESSAGE, message }
}

export function clearMessage() {
  return { type: CLEAR_MESSAGE }
}

export function updateProfile(profile) {
  return { type: UPDATE_PROFILE, profile }
}

export function setLastUpdated() {
  return { type: SET_LAST_UPDATED }
}