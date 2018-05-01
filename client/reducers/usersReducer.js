const PUT_USER = 'users/PUT_USER'
const SET_USER_ONLINE_STATUS = 'users/SET_USER_ONLINE_STATUS'
const SET_USER_LAST_SEEN_DATE = 'users/SET_USER_LAST_SEEN_DATE'

const initialState = {
  users: {}
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PUT_USER:
      var users = { ...state.users }

      users[action.key] = action.value

      return Object.assign({}, state, { users, lastUpdated: Date.now() })

    case SET_USER_ONLINE_STATUS:
      var users = { ...state.users }

      if (users[action.userId]) {
        users[action.userId].online = action.status
      }

      return Object.assign({}, state, { users })

    case SET_USER_LAST_SEEN_DATE:
      var users = { ...state.users }

      if (users[action.userId]) {
        users[action.userId].lastSeenDate = action.lastSeenDate
      }

      return Object.assign({}, state, { users })

    default:
      return state
  }
}


export function putUser(user) {
  return { 
    type: PUT_USER, 
    key: user.key,
    value: user.value
  }
}

export function setUserOnlineStatus(userId, status) {
  return {
    type: SET_USER_ONLINE_STATUS,
    userId,
    status
  }
}

export function setUserLastSeenDate(userId, lastSeenDate) {
  return {
    type: SET_USER_LAST_SEEN_DATE,
    userId,
    lastSeenDate
  }
}