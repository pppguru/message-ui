import React, { Component } from 'react'
import FirebaseListener from '../../../utils/firebaseListener'
import { connect } from 'react-redux'
import _ from 'lodash'
import classNames from'classnames'

const FORM_NAME = 'deleteChannel'

@connect((state) => ({
	auth: state.auth,
}))

export default class UserChannelsItem extends Component {
	constructor(props) {
		super(props)
		this.firebaseListener = new FirebaseListener(this.props.auth.accessToken)

		this.state = {
			devices: []
		}
	}

	getActivity(userId) {
		const customerFirebasePath = `users/${userId}`
		this.firebaseListener.getEntry(customerFirebasePath, user => {
      const activityIOS = _.find(user.value && user.value.activity, function(o) { return o.source === "iOS app" }) ? 'iosApp' : null;
      const activityANDROID = _.find(user.value && user.value.activity, function(o) { return o.source === "android app" }) ? 'androidApp' : null;
      const activityWEB = _.find(user.value && user.value.activity, function(o) { return o.source === "web app"}) ? 'webApp' : null;

      const devices = [activityIOS, activityANDROID, activityWEB];
      if (!_.isEqual(this.state.devices, devices)) {
        this.setState({ devices: devices})
      }
		})
	}

	render() {
		const {
			confirmDeleteChannel,
			selectedChannel,
			userId,
			channel,
      target
		} = this.props

    let indicatorClass = ''

    this.getActivity(target.id)

    if (this.state.devices.indexOf('iosApp') >= 0) {
       indicatorClass = 'status-indicator--ios'
    }

		if (this.state.devices.indexOf('webApp') >= 0) {
       indicatorClass = 'status-indicator--web'
    }

		let linkClasses = classNames({
			'sidebar__link--active': (selectedChannel && selectedChannel.id == channel.id),
			'sidebar__link--unread': !channel.read
		})

		return (
			<li className="sidebar__item">
				<a className={'sidebar__link ' + linkClasses} onClick={this.props.onClick}>
					<span className={"status-indicator " + indicatorClass}></span>{target.firstName + ' ' + target.lastName}
				</a>
				<a className="btn btn--delete btn--delete-channel" onClick={() => { confirmDeleteChannel(channel.id, FORM_NAME) }}>+</a>
			</li>
		)
	}
}
