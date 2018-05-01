import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearStore } from 'reducers/appStateReducer'
import FirebaseListener from 'utils/firebaseListener'

@connect((state) => ({
	auth: state.auth
}), {
	clearStore
})

export default class Logout extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

	componentDidMount() {
		this.firebaseListener = new FirebaseListener(this.props.auth.accessToken)
		const firebasePath = `users/${this.props.auth.profile.id}/activity`

    this.unsubscribe = this.firebaseListener.removeUser(
      firebasePath
    )

    this.props.clearStore()

    sessionStore.clearSessionCreds()

    this.context.router.push('/app')
	}

	render() {
		return (
			<div></div>
		)
	}
}