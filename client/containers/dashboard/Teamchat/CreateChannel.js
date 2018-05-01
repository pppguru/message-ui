import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import * as api from 'utils/api'
import CreateChannelForm from 'components/dashboard/teamchat/CreateChannelForm'
import SuccessMessage from 'components/dashboard/common/SuccessMessage'
import {
	hideForm,
	clearForm,
	addToSelected,
	addAllToSelected,
	removeFromSelected,
	clearSelected,
	submit,
	submitSuccess,
	submitError
} from 'reducers/formsReducer'

const FORM_NAME = 'createChannel'

@connect((state) => ({
  auth: state.auth,
	isVisible: state.forms[FORM_NAME].isVisible,
	isEditing: state.forms[FORM_NAME].isEditing,
	isSubmitting: state.forms[FORM_NAME].isSubmitting,
	step: state.forms[FORM_NAME].step,
	message: state.forms[FORM_NAME].message,
	selected: state.forms[FORM_NAME].selected,
  organizationMembers: state.organization.employees,
  users: state.users.users
}), {
	hideForm,
	clearForm,
	addToSelected,
	addAllToSelected,
	removeFromSelected,
	clearSelected,
	submit,
	submitSuccess,
	submitError
})

// imported from header container
export default class CreateChannel extends Component {
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

		if (this.props.selected.length > 0) {
			const data = {
				'members': [...this.props.selected]
			}

			api.createChannel(orgId, data, token)
				.then((response) => {
					const message = 'Channel created.'

					this.props.submitSuccess(FORM_NAME, message)

					this.props.getUserConnections()

					setTimeout(() => {
						this.hideForm()
					}, 2000)
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
			selected,
			addToSelected,
			addAllToSelected,
			removeFromSelected,
			clearSelected,
			step,
			isVisible,
			organizationMembers,
			users,
			isSubmitting
		} = this.props

		const members = organizationMembers.filter((member) => {
			return member.id != auth.profile.id
		})

		let page

		if (step == 'default') {
			page = <CreateChannelForm
								key={'form'}
								hideForm={this.hideForm}
								users={users}
								organizationMembers={members}
								handleSubmit={this.handleSubmit}
								userId={auth.profile.id}
								selected={selected}
								addToSelected={addToSelected}
								addAllToSelected={addAllToSelected}
								removeFromSelected={removeFromSelected}
								clearSelected={clearSelected}
								isSubmitting={isSubmitting} />
		} 

		else if (step == 'success') {
			page = <SuccessMessage
							 key={'success'}
							 hideForm={this.hideForm}
							 message={message} />
		}

		return (
			<Modal isOpen={isVisible} className={{}} overlayClassName={{}} onRequestClose={this.hideForm}>
				<ReactCSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
					{page}
				</ReactCSSTransitionReplace>
			</Modal>
		)
	}
}