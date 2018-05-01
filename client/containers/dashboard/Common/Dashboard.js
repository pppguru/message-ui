import React, { Component } from 'react'
import _ from 'lodash'
import RouteTransition from 'react-router-transition'
import sessionStore from 'utils/sessionStore'
import { RouteHandler } from 'react-router'
import { connect } from 'react-redux'
import Header from 'containers/dashboard/Common/Header'
import Navigation from 'components/dashboard/common/Navigation'
import { hideUserMenu, clearStore } from 'reducers/appStateReducer'
import { logoutUser } from 'reducers/authReducer'
import { resetSidebar } from 'reducers/messages/messagesSidebarReducer'
import { clearConversations } from 'reducers/messages/messagesListReducer'
import { resetActivities } from 'reducers/activityReducer'
import { clearConversation, resetDetail } from 'reducers/messages/messagesDetailReducer'
import { clearOrganization } from 'reducers/organizationReducer'
import FirebaseListener from 'utils/firebaseListener'
import Analytics from 'utils/analytics'

@connect((state) => ({
  auth: state.auth,
  userMenuVisible: state.appState.userMenuVisible,
  unassignedCount: state.activity.unassignedCount,
  unreadConversationCount: state.messagesList.unreadConversationCount,
  unreadChannelMessagesCount: state.teamchat.unreadChannelMessagesCount
}), {
  hideUserMenu,
  logoutUser,
  clearConversations,
  clearConversation,
  clearOrganization,
  resetSidebar,
  resetDetail,
  resetActivities,
  clearStore
})

export default class Dashboard extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.firebaseListener = new FirebaseListener(this.props.auth.accessToken)
    this.analytics = new Analytics()

    this.handleBodyClick = this.handleBodyClick.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    if (!this.props.auth.profile.organizationId && this.props.auth.profile.roles[0] !== 'admin') {
      this.handleLogout()
    }
  }

  componentWillUnmount() {
    this.props.hideUserMenu()
  }

  handleBodyClick(event) {
    if (this.props.userMenuVisible && event.target.className != 'user-menu__dropdown') {
      this.props.hideUserMenu()
    }
  }

  handleLogout() {
    this.firebaseListener = new FirebaseListener(this.props.auth.accessToken)
    const firebasePath = `users/${this.props.auth.profile.id}/activity`

    this.unsubscribe = this.firebaseListener.removeUser(
      firebasePath
    )

    this.props.clearStore()

    sessionStore.clearSessionCreds()

    this.analytics.signOut()

    this.context.router.push('/') 
  }

  render() {
    const {
      auth: {
        profile,
        isSuperAdmin
      },
      children,
      unassignedCount,
      unreadConversationCount,
      unreadChannelMessagesCount
    } = this.props

    let dashboard = null

    if (profile) {
      dashboard =
        <div onClick={this.handleBodyClick}>
          <Header
            handleLogout={this.handleLogout} />

          <main className="main">
            <Navigation
              isSuperAdmin={isSuperAdmin}
              role={profile && profile.roles}
              unassignedCount={unassignedCount}
              unreadConversationCount={unreadConversationCount}
              unreadChannelMessagesCount={unreadChannelMessagesCount} />

            <div className="content">
              {/*<RouteTransition
                pathname={this.props.location.pathname}
                component={false}
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
              >*/}

                {children}

              {/* </RouteTransition> */}
            </div>
          </main>
        </div>
    }

    return dashboard
  }
}
