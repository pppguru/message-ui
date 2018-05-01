import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import * as api from 'utils/api'
import Search from 'components/dashboard/common/Search'
import ChannelMessages from 'components/dashboard/teamchat/ChannelMessages'
import ChannelHeader from 'components/dashboard/teamchat/ChannelHeader'
import ChannelMessageForm from 'components/dashboard/teamchat/ChannelMessageForm'

@connect((state) => ({
	auth: state.auth,
	channel: state.teamchat.channel,
	channelMessages: state.teamchat.channelMessages,
	channelLoading: state.teamchat.channelLoading,
	users: state.users.users
}))

export default class TeamchatChannel extends Component {
	constructor(props) {
		super(props)

		this.handleMessageSubmit = this.handleMessageSubmit.bind(this)
	}

	handleMessageSubmit(message) {
	  const channelId = this.props.channel.id
	  
	  const isDepartment = this.props.channel.name ? true : false
	  const departmentId = isDepartment ? this.props.channel.id : null

	  const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken
		
		const data = {
      type: 'text',
      ref: uuid.v1(),
      data: {
        text: message
      }
    }

		if (isDepartment) {
			api.createDepartmentMessage(orgId, departmentId, data, token)
				.then((response) => {
					// console.log('CREATE CHANNEL MESSAGE RES', response)
				})
				.catch((err) => {
					console.log('CREATE CHANNEL MESSAGE ERR', err)
				})
		} 

		else {
			api.createChannelMessage(channelId, data, token)
				.then((response) => {
					// console.log('CREATE CHANNEL MESSAGE RES', response)
				})
				.catch((err) => {
					console.log('CREATE CHANNEL MESSAGE ERR', err)
				})
		}
	}

	render() {
		const {
			auth,
			channel,
			channelMessages,
			channelLoading,
			users
		} = this.props

		if (channel) {
			return (
				<div>
					<div className="teamchat-channel">
						<ChannelHeader members={channel.members} />

						<ChannelMessages
							channelMessages={channelMessages}
							users={users}
							isLoading={channelLoading}
							userId={auth.profile.id} />

						<ChannelMessageForm
							handleMessageSubmit={this.handleMessageSubmit} />
					</div>
				</div>
			)
		} else {
			return (
				<div className="teamchat-channel teamchat-channel--empty">Channel not selected</div>
			)
		}
	}
}
