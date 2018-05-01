import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import appState from './appStateReducer'
import auth from './authReducer'
import activity from './activityReducer'
import messagesList from './messages/messagesListReducer'
import messagesDetail from './messages/messagesDetailReducer'
import messagesSidebar from './messages/messagesSidebarReducer'
import customers from './customersReducer'
import organization from './organizationReducer'
import organizations from './organizationsReducer'
import products from './productsReducer'
import teamchat from './teamchatReducer'
import settings from './settingsReducer'
import settingsDepartments from './settings/departmentsReducer'
import forms from './formsReducer'
import users from './usersReducer'
import offers from './offersReducer'

export default combineReducers({
  appState,
  activity,
  auth,
  messagesList,
  messagesDetail,
  messagesSidebar,
  customers,
  organization,
  products,
  teamchat,
  settings,
  settingsDepartments,
  forms,
  users,
  offers,
  form: formReducer
})

const appReducer = combineReducers({
  appState,
  activity,
  auth,
  messagesList,
  messagesDetail,
  messagesSidebar,
  customers,
  organization,
  organizations,
  products,
  teamchat,
  settings,
  settingsDepartments,
  forms,
  users,
  offers,
  form: formReducer
})

export default (state, action) => {
  if (action.type === 'appState/CLEAR_STORE') {
    state = undefined

    console.log('sup');
  }

  return appReducer(state, action)
}