import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, Redirect, IndexRoute, DefaultRoute, IndexRedirect } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer  from './reducers/rootReducer'
require('es6-object-assign').polyfill()

// Dashboard
import App from './containers/dashboard/App'
import Auth from './containers/dashboard/Auth/Auth'
import VendastaLogin from './containers/dashboard/Auth/VendastaLogin'
import Logout from './containers/dashboard/Auth/Logout'
import ResetPassword from './containers/dashboard/Common/ResetPassword'
import Invitation from './containers/dashboard/Common/Invitation'
import Dashboard from './containers/dashboard/Common/Dashboard'
import Activity from './containers/dashboard/Activity/Activity'
import Messages from './containers/dashboard/Messages/Messages'
import Products from './containers/dashboard/Products/Products'
import Organizations from './containers/dashboard/Organizations/Organizations'
import Settings from './containers/dashboard/Settings/Settings'
import SettingsOrganization from './containers/dashboard/Settings/SettingsOrganization'
import Teamchat from './containers/dashboard/Teamchat/Teamchat'
import SettingsGeneral from './components/dashboard/settings/general/SettingsGeneral'
import SettingsTeam from './components/dashboard/settings/team/SettingsTeam'
import SettingsMessaging from './components/dashboard/settings/messaging/SettingsMessaging'
import SettingsLivechat from './components/dashboard/settings/livechat/SettingsLivechat'
import SettingsIntegrations from './containers/dashboard/Settings/SettingsIntegrations'
import SettingsSubscriptions from './containers/dashboard/Settings/SettingsSubscriptions'

// Website
import ClaimBusiness from './containers/website/ClaimBusiness'
// import ClaimBusiness from './components/website/claim-business/ClaimBusiness'
import ConnectBrand from './components/website/connect-brand/ConnectBrand'

const page = document.getElementsByTagName("body")[0].className

if (page == 'dashboard') {
  require('./assets/scss/dashboard/main.scss')
  require('./assets/iconfont/iconfont.font.js')
} 
require('../node_modules/react-intl-tel-input/dist/main.css')
require('../node_modules/react-intl-tel-input/dist/libphonenumber.js')

global.__base = __dirname

var output = null
var target = null

const store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f)

function requireAuth(nextState, replace) {
  if (!store.getState().auth.logged) {
    replace('/')
  }
}

if (document.getElementById('app-frame') ) {
  target = document.getElementById('app-frame')
  output = (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} name="Web-App">
          <IndexRoute component={Auth}/>
          <Route path="vendasta">
            <Route path="test" component={VendastaLogin} />
            <Route path="login/:data" component={VendastaLogin} />
          </Route>
          <Route path="logout" name="logout" component={Logout} />
          <Route path="invitation" name="Invitation" component={Invitation} />
          <Route path="reset-password" name="ResetPassword" component={ResetPassword} />
          <Route path="dashboard" onEnter={requireAuth} name="Dashboard" component={Dashboard}>
            <IndexRedirect to="activity" />
            <Route path="activity" name="Activity" component={Activity} />            
            <Route path="messages" name="Messages" component={Messages} />
            <Route path="products" name="Products" component={Products} />
            <Route path="teamchat" name="Teamchat" component={Teamchat} />
            <Route path="organizations" name="Organizations" component={Organizations} />
            <Route path="settings" name="Settings" component={Settings}>
              <IndexRedirect to="organization" />
              <Route path="general" component={SettingsGeneral} />
              <Route path="organization" component={SettingsOrganization} />
              <Route path="team" component={SettingsTeam} />
              <Route path="messaging" component={SettingsMessaging} />
              <Route path="livechat" component={SettingsLivechat} />
              <Route path="integrations" component={SettingsIntegrations} />
              <Route path="subscriptions" component={SettingsSubscriptions} />
            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  )
}

if (document.getElementById('claim-business') ) {
  target = document.getElementById('claim-business')
  output = (
    <ClaimBusiness />
  )
}

if (document.getElementById('connect-brand') ) {
  target = document.getElementById('connect-brand')
  output = (
    <ConnectBrand />
  )
}

if (target && output) {
  ReactDOM.render(output, target)
}