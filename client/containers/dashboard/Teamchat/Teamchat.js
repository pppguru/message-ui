import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as api from 'utils/api'
import FirebaseListener from 'utils/firebaseListener'
import Loader from 'components/dashboard/common/Loader'
import TeamchatSidebar from './TeamchatSidebar'
import TeamchatChannel from './TeamchatChannel'
import CreateChannel from './CreateChannel'
import {
	showConnectionsLoader,
	hideConnectionsLoader,
	putConnections,
	setReadStatus
} from 'reducers/teamchatReducer'
import { 
	setUserOnlineStatus, 
	setUserLastSeenDate 
} from 'reducers/usersReducer'

@connect((state) => ({
	auth: state.auth,
	connectionsLoading: state.teamchat.connectionsLoading
}), {
	showConnectionsLoader,
	hideConnectionsLoader,
	putConnections,
	setUserOnlineStatus, 
	setUserLastSeenDate,
	setReadStatus
})

export default class Teamchat extends Component {
	constructor(props) {
		super(props)

		this.firebaseListener = new FirebaseListener(this.props.auth.accessToken)
	}

	render() {
		const {
			connectionsLoading
		} = this.props

		return (
			<section className="section section--teamchat" key={'section--teamchat'}>
				<CreateChannel
					getUserConnections={this.getUserConnections} />
				
				<div className="section__sidebar">
					<TeamchatSidebar />

					<Loader visible={connectionsLoading} overlay={true} centered={true} />
				</div>

				<div className="section__container">
					<TeamchatChannel />
				</div>
			</section>
		)
	}
}