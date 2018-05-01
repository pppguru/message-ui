import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import * as api from 'utils/api'
import AddPeopleToChannelForm from 'components/dashboard/teamchat/AddPeopleToChannelForm'
import SuccessMessage from 'components/dashboard/common/SuccessMessage'
import {
	hideForm,
	clearForm,
	addToSelected,
	removeFromSelected,
	clearSelected,
	submit,
	submitSuccess,
	submitError
} from 'reducers/formsReducer'

const FORM_NAME = 'addPeopleToChannel'

@connect((state) => ({
	auth: state.auth,
	channelMembers: state.teamchat.channelMembers,
	isVisible: state.forms[FORM_NAME].isVisible,
	isEditing: state.forms[FORM_NAME].isEditing,
	isSubmitting: state.forms[FORM_NAME].isSubmitting,
	step: state.forms[FORM_NAME].step,
	message: state.forms[FORM_NAME].message,
	selected: state.forms[FORM_NAME].selected,
  organizationMembers: state.organization.employees
}), {
	hideForm,
	clearForm,
	addToSelected,
	removeFromSelected,
	clearSelected,
	submit,
	submitSuccess,
	submitError
})

// imported from header container
export default class AddPeopleToChannel extends Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.hideForm = this.hideForm.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()

		this.props.submit(FORM_NAME)

		const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken

		let members = this.props.selected

		for (let key in this.props.channelMembers) {
			members.push(this.props.channelMembers[key].id)
		}

		if (members.length > 0) {
			const data = {
				'members': members
			}

			api.createChannel(orgId, data, token)
				.then((response) => {
					const message = 'Channel created.'

					this.props.submitSuccess(FORM_NAME, message)

					this.props.getChannels()
				})
		}
	}

	hideForm() {
		this.props.clearForm(FORM_NAME)

		this.props.hideForm(FORM_NAME)
	}

	render() {
		const {
			auth,
			message,
			addToSelected,
			removeFromSelected,
			clearSelected,
			step,
			isVisible,
			organizationMembers,
			isSubmitting,
			channelMembers
		} = this.props

		let page

		if (step == 'default') {
			page = <AddPeopleToChannelForm
								key={'form'}
								handleSubmit={this.handleSubmit}
								hideForm={this.hideForm}
								organizationMembers={organizationMembers}
								handleSubmit={this.handleSubmit}
								userId={auth.profile.id}
								addToSelected={addToSelected}
								removeFromSelected={removeFromSelected}
								clearSelected={clearSelected}
								isSubmitting={isSubmitting}
								channelMembers={channelMembers} />
		} 

		else if (step == 'success') {
			page = <SuccessMessage
							 key={'success'}
							 hideForm={this.hideForm}
							 message={message} />
		}

		return (
			<Modal isOpen={isVisible} className={{}} overlayClassName={{}}>
				<ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{page}
				</ReactCSSTransitionGroup>
			</Modal>
		)
	}
}