import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as api from 'utils/api'
import uuid from 'uuid'
import OfferProduct from './OfferProduct'
import Attachment from '../Common/Attachment'
import MessagesDetailHeader from 'components/dashboard/messages/detail/MessagesDetailHeader'
import MessagesDetailEmpty from 'components/dashboard/messages/detail/MessagesDetailEmpty'
import MessagesDetailList from 'components/dashboard/messages/detail/MessagesDetailList'
import MessagesDetailForm from 'components/dashboard/messages/detail/MessagesDetailForm'
import { showForm } from 'reducers/formsReducer'
import { removeConversation } from 'reducers/messages/messagesListReducer'
import { resetDetail } from 'reducers/messages/messagesDetailReducer'
import { resetSidebar } from 'reducers/messages/messagesSidebarReducer'
import { setLastMessage, setReadStatus, setIsListening } from 'reducers/messages/messagesListReducer'
import {
	addMessage,
	showLoader,
	hideLoader,
	showStatusDropdown,
	hideStatusDropdown,
	showConfirmModal,
	hideConfirmModal,
	submitStatus,
	submitStatusSuccess
} from  'reducers/messages/messagesDetailReducer'

import {
	submit,
	submitSuccess,
	hideForm
} from 'reducers/formsReducer'

const MESSAGE_LOAD_LIMIT = 100

@connect(
	state => ({
		auth: state.auth,
		offers: state.offers.offers,
		users: state.users.users,
		loading: state.messagesDetail.loading,
		conversation: state.messagesDetail.conversation,
		messages: state.messagesDetail.messages,
		conversations: state.messagesList.conversations,
		statusDropdownVisible: state.messagesDetail.statusDropdownVisible,
		confirmModalVisible: state.messagesDetail.confirmModalVisible,
		isSubmittingStatus: state.messagesDetail.isSubmittingStatus
	}), {
		addMessage,
		showLoader,
		hideLoader,
		showForm,
		showStatusDropdown,
		hideStatusDropdown,
		showConfirmModal,
		hideConfirmModal,
		submitStatus,
		submitStatusSuccess,
		removeConversation,
		resetDetail,
		resetSidebar,
		setLastMessage,
		submit,
		submitSuccess,
		hideForm,
		setReadStatus,
		setIsListening
	}
)

export default class MessagesDetail extends Component {
	constructor(props) {
		super(props)

		this.handleMessageSubmit = this.handleMessageSubmit.bind(this)
		this.resolveCustomerRequest = this.resolveCustomerRequest.bind(this)
		this.handleAttachmentSubmit = this.handleAttachmentSubmit.bind(this)
		this.putAttachmentImage = this.putAttachmentImage.bind(this)

		this.state = {
			image: {}
		}
	}

	componentWillUnmount() {
		this.props.hideForm('offerProduct')
	}

	handleMessageSubmit(message) {
		const convKey = this.props.conversation.key
		const token = this.props.auth.accessToken

		const data = {
			type: 'text',
			ref: uuid.v1(),
			data: {
				text: message
			}
		}

		api.sendMessage(convKey, data, token)
			.then((response) => {
				this.props.setReadStatus(convKey, this.props.auth.profile.id, true)
			})
	}

	handleAttachmentSubmit(event) {
		event.preventDefault()

		this.props.submit('attachment')
		
		const orgId = this.props.auth.profile.organizationId
		const convKey = this.props.conversation.key
		const token = this.props.auth.accessToken

		let data = {
			type: 'image',
			ref: uuid.v1(),
			data: {}
		}

		api.getRequestImageUrl(orgId, token)
			.then((response) => {
				const uploadUrl = response.uploadUrl
				const imageUrl = response.imageUrl

				api.uploadImage(this.state.image, uploadUrl)
					.then((response) => {
						data.data.imageUrl = imageUrl

						this.props.submitSuccess('attachment', '')

						this.props.hideForm('attachment')

						api.sendMessage(convKey, data, token)
							.then((response) => {
								this.props.setReadStatus(convKey, this.props.auth.profile.id, true)
								
								// this.props.setLastMessage(convKey, '(Attachment)')
							})
					})
			})
	}

	putAttachmentImage(image) {
		this.setState({ image: image })
	}

	resolveCustomerRequest() {
		const requestId = this.props.conversation.key
		const token = this.props.auth.accessToken

		this.props.submitStatus()

		api.resolveCustomerRequest(requestId, token)
			.then((response) => {
				this.props.resetDetail()
				this.props.resetSidebar()

				this.props.setIsListening(requestId, false)

				this.props.submitStatusSuccess()
				this.props.hideConfirmModal()
				this.props.hideStatusDropdown()
				
				this.props.removeConversation(requestId)

			})
			.catch((err) => {
				console.log('ERR RESOLVING CUSTOMER REQUEST', err)
			})
	}

	render() {
		const {
			loading,
			conversations,
			conversation,
			messages,
			auth,
			showForm,
			statusDropdownVisible,
			confirmModalVisible,
			isSubmittingStatus,
			showConfirmModal,
			hideConfirmModal,
			showStatusDropdown,
			hideStatusDropdown,
			offers,
			users
		} = this.props

		const isAdmin = auth.profile && auth.profile.roles && auth.profile.roles[0] === 'admin'

		const read = (conversation && conversations[conversation.key].read) || {}

		return conversation
			? <div className="messages-detail">
					{ !isAdmin && <OfferProduct conversation={conversation} /> }
					
					<Attachment
						handleSubmit={this.handleAttachmentSubmit}
						putImage={this.putAttachmentImage} />

					<MessagesDetailHeader
						showConfirmModal={showConfirmModal}
						hideConfirmModal={hideConfirmModal}
						showStatusDropdown={showStatusDropdown}
						hideStatusDropdown={hideStatusDropdown}
						resolveCustomerRequest={this.resolveCustomerRequest}
						dropdownVisible={statusDropdownVisible}
						confirmVisible={confirmModalVisible}
						isSubmitting={isSubmittingStatus} />

					<MessagesDetailList
						conversations={conversations}
						messages={messages}
						read={read}
						offers={offers}
						users={users}
						user={auth.profile}
						conversation={conversation}
						loading={loading} />

					<MessagesDetailForm
						isAdmin={isAdmin}
						onSubmit={this.handleMessageSubmit}
						showForm={showForm} />
				</div>
			: <MessagesDetailEmpty />
	}
}
