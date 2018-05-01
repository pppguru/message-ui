import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as api from 'utils/api'
import FirebaseListener from 'utils/firebaseListener'
import ConfirmModal from 'components/dashboard/common/ConfirmModal'
import PrivateChannels from 'components/dashboard/teamchat/PrivateChannels'
import UserChannels from 'components/dashboard/teamchat/UserChannels'
import DepartmentChannels from 'components/dashboard/teamchat/DepartmentChannels'
import {
	showForm,
	hideForm,
	clearForm,
	submit,
	submitSuccess,
	submitDelete,
	submitDeleteSuccess,
	showConfirmModal,
	hideConfirmModal,
	submitError
} from 'reducers/formsReducer'

import {
	selectChannel,
	clearChannel,
	showChannelLoader,
	hideChannelLoader,
	putChannelMessage,
	removeChannel,
	setIsListening,
	setReadStatus,
	decrementUnreadChannelMessagesCount
} from 'reducers/teamchatReducer'

const MESSAGES_LOAD_LIMIT = 200
const FORM_NAME = 'deleteChannel'

@connect((state) => ({
	auth: state.auth,
	channels: state.teamchat.channels,
	channelMessages: state.teamchat.channelMessages,
	channel: state.teamchat.channel,
	confirmModalVisible: state.forms[FORM_NAME].confirmModalVisible,
	isDeleting: state.forms[FORM_NAME].isDeleting
}), {
	showForm,
	selectChannel,
	clearChannel,
	showChannelLoader,
	hideChannelLoader,
	showConfirmModal,
	hideConfirmModal,
	putChannelMessage,
	submitDelete,
	submitDeleteSuccess,
	removeChannel,
	setIsListening,
	setReadStatus,
	decrementUnreadChannelMessagesCount
})

export default class TeamchatSidebar extends Component {
	constructor(props) {
		super(props)

		this.firebaseListener = new FirebaseListener(this.props.auth.accessToken)
		this.channelSubscription = null

		this.handleChannelSelect = this.handleChannelSelect.bind(this)
		this.handleChannelDelete = this.handleChannelDelete.bind(this)
		this.confirmDeleteChannel = this.confirmDeleteChannel.bind(this)

		this.state = {
			channelId: null
		}
	}

	handleChannelSelect(channel) {
		const { 
			auth: {
				profile: {
					id: userId
				}
			},
			channel: activeChannel,
			setIsListening,
			clearChannel,
			selectChannel
		} = this.props

		if (activeChannel) {
			setIsListening(activeChannel.id, false)

			this.firebaseListener.setActivity(`conversations/channels/${activeChannel.id}/activity/${userId}`, false)
		}

		if (!activeChannel || channel.id != activeChannel.id) {
			setIsListening(channel.id, true)

			clearChannel()

			selectChannel(channel)

			if (!channel.read) {
				this.props.setReadStatus(channel.id, true)

				this.props.decrementUnreadChannelMessagesCount()
			}

			this.watchChannelMessages(channel)
		
			this.firebaseListener.setActivity(`conversations/channels/${channel.id}/activity/${userId}`, true)
		}
	}

	watchChannelMessages(channel) {
		this.props.showChannelLoader()

		if (this.channelSubscription) {
			this.firebaseListener.unsubscribe(this.channelSubscription)
			this.channelSubscription = null
		}

		const onChildAdded = (message) => { 
			this.props.putChannelMessage(message) 
		}

		const onChildChanged = () => {}

		const onCompleted = () => { this.props.hideChannelLoader() }

		// if channel has a name, it's a department, for which we use different firebase path
		if (channel.name) {
			const firebasePath = `conversations/departments/${channel.id}/messages`
			const orderBy = 'value/createdAt'

			this.channelSubscription = this.firebaseListener.subscribeNew(
					firebasePath,
					MESSAGES_LOAD_LIMIT,
					orderBy,
					onChildAdded,
					onChildChanged,
					onCompleted
				)
		}

		else {
			const firebasePath = `conversations/channels/${channel.id}/messages`
			const orderBy = 'value/createdAt'

			this.channelSubscription = this.firebaseListener.subscribeNew(
				firebasePath,
				MESSAGES_LOAD_LIMIT,
				orderBy,
				onChildAdded,
				onChildChanged,
				onCompleted
			)
		}

		setTimeout(() => {
			if (this.props.channelMessages.length == 0) {
				this.props.hideChannelLoader()
			}
		}, 3000)
	}

	handleChannelDelete() {
		const channelId = this.state.channelId
		const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken

		this.props.submitDelete(FORM_NAME)

		if (channelId) {
			api.deleteChannel(orgId, channelId, token)
				.then((response) => {
					this.props.submitDeleteSuccess(FORM_NAME)

					this.props.hideConfirmModal(FORM_NAME)

					if (this.props.channel && channelId == this.props.channel.id) {
						this.props.clearChannel()
					}

					this.props.removeChannel(channelId)

					this.forceUpdate()
				})
				.catch((err) => {
					console.log('DELETE CHANNEL ERR', err)
				})
		}
	}

	confirmDeleteChannel(channelId, FORM_NAME) {
		this.setState({ channelId: channelId }, () => {
			this.props.showConfirmModal(FORM_NAME)
		})
	}

	render() {
		const {
			auth: {
				profile: {
					id: userId
				}
			},
			channels,
			showForm,
			channel,
			confirmModalVisible,
			showConfirmModal,
			hideConfirmModal,
			isDeleting
		} = this.props

		return (
			<div className="sidebar sidebar--teamchat">
				<ConfirmModal
					isVisible={confirmModalVisible}
					hideModal={() => { hideConfirmModal(FORM_NAME) }}
					isSubmitting={isDeleting}
					confirmAction={this.handleChannelDelete} />

				<PrivateChannels
					userId={userId}
					showForm={showForm}
					channel={channel}
					channels={channels}
					handleChannelSelect={this.handleChannelSelect}
					confirmDeleteChannel={this.confirmDeleteChannel} />

			 	<UserChannels
					userId={userId}
					channel={channel}
					channels={channels}
					handleChannelSelect={this.handleChannelSelect}
					confirmDeleteChannel={this.confirmDeleteChannel} />

				{/* <DepartmentChannels
					channel={channel}
					channels={connections.departments && connections.departments}
					handleChannelSelect={this.handleChannelSelect} /> */ }
			</div>
		)
	}
}
