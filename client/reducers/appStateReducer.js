const SHOW_USER_MENU = 'appState/SHOW_USER_MENU'
const HIDE_USER_MENU = 'appState/HIDE_USER_MENU'
const CLEAR_STORE = 'appState/CLEAR_STORE'

const initialState = {
  userMenuVisible: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_USER_MENU:
      return Object.assign({}, state, {
        userMenuVisible: true
      })

    case HIDE_USER_MENU:
      return Object.assign({}, state, {
        userMenuVisible: false
      })

    default:
      return state
  }
}

export function showUserMenu() {
  return {
    type: SHOW_USER_MENU
  }
}

export function hideUserMenu() {
  return {
    type: HIDE_USER_MENU
  }
}

export function clearStore() {
  return {
    type: CLEAR_STORE
  }
}