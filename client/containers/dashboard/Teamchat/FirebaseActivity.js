import React, { Component } from 'react'
import FirebaseListener from 'utils/firebaseListener'
import { connect } from 'react-redux'

@connect(state => ({
	auth: state.auth.profile
}))
export default class FirebaseActivity extends Component {

  constructor(props) {
		super(props)

		this.firebaseListener = new FirebaseListener(this.props.auth.accessToken)
		this.activitySubscription = null
	}

  componentDidMount() {
    this.watchActivity();
  }

  componentWillReceiveProps(nextprops) {
    this.watchActivity();
  }

  watchActivity(channel) {
    if (!this.props.auth) {
      return null
    }
		if (this.activitySubscription) {
			this.firebaseListener.unsubscribe(this.activitySubscription)
			this.activitySubscription = null
		}

		const onChildAdded = (message) => {}

		const onChildChanged = () => {}

		const onCompleted = () => {}

		const firebasePath = `users/${this.props.auth.id}/activity`
		const orderBy = 'value'
		this.activitySubscription = this.firebaseListener.subscribeActivity(
			firebasePath,
			100,
			orderBy,
			onChildAdded,
			onChildChanged,
			onCompleted
		)

    // this.firebaseListener.getEntry(firebasePath, (user) => {
    //   console.log('received', user);
    // })
	}

  render() {
    return (
      <div></div>
    )
  }
}
