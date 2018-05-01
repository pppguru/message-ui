import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import _ from 'lodash'
import * as api from 'utils/api'
import ConfirmModal from 'components/dashboard/common/ConfirmModal'
import SuccessMessage from 'components/dashboard/common/SuccessMessage'
import OrganizationMembersList from 'components/dashboard/settings/organization/OrganizationMembersList'
import OrganizationMembersForm from 'components/dashboard/settings/organization/OrganizationMembersForm'
import { removeEmployee } from 'reducers/organizationReducer'
import { putEmployees, clearEmployees } from 'reducers/organizationReducer'
import {
	showForm,
	hideForm,
	clearForm,
	addToSelected,
	addAllToSelected,
	removeFromSelected,
	clearSelected,
	submit,
	submitSuccess,
	submitError,
	showConfirmModal,
	hideConfirmModal,
	submitDelete,
	submitDeleteSuccess,
	setError,
	clearError
} from 'reducers/formsReducer'

const FORM_NAME = 'organizationMembers'

@connect((state) => ({
	auth: state.auth,
	organizationMembers: state.organization.employees,
	isVisible: state.forms[FORM_NAME].isVisible,
	selected: state.forms[FORM_NAME].selected,
	isSubmitting: state.forms[FORM_NAME].isSubmitting,
	isDeleting: state.forms[FORM_NAME].isDeleting,
	isEditing: state.forms[FORM_NAME].isEditing,
	step: state.forms[FORM_NAME].step,
	message: state.forms[FORM_NAME].message,
	errorMessage: state.forms[FORM_NAME].errorMessage,
	confirmModalVisible: state.forms[FORM_NAME].confirmModalVisible,
	departments: state.settingsDepartments.departments,
	inviteMembers: state.form.inviteMembers || []
}), {
	showForm,
	hideForm,
	clearForm,
	addToSelected,
	addAllToSelected,
	removeFromSelected,
	clearSelected,
	submit,
	submitSuccess,
	submitError,
	showConfirmModal,
	hideConfirmModal,
	submitDelete,
	submitDeleteSuccess,
	setError,
	clearError,
	putEmployees,
	clearEmployees,
	removeEmployee
})

export default class OrganizationMembers extends Component {
	constructor(props) {
		super(props)

		this.refreshEmployees = this.refreshEmployees.bind(this)
		this.inviteEmployee = this.inviteEmployee.bind(this)
		this.removeEmployee = this.removeEmployee.bind(this)
		this.hideForm = this.hideForm.bind(this)
	}

	refreshEmployees() {
		const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken

		api.getEmployees(orgId, token)
			.then((response) => {
				this.props.clearEmployees()

				this.props.putEmployees(response)
			})
			.catch((err) => {
				console.log('REFRESH EMPLOYEES ERR', err)
			})
	}

	inviteEmployee(model) {
		this.props.submit(FORM_NAME)

		let data = {
			departmentId: model.department,
			invitations: []
		}

		_.forEach(this.props.inviteMembers, (invitation) => {
			if (invitation.email.value) {
				data.invitations.push({
					type: 'email',
					value: invitation.email.value
				})
			}

			if (invitation.phone.value) {
				data.invitations.push({
					type: 'phone',
					value: invitation.phone.value
				})
			}
		})

		api.inviteEmployee(data, this.props.auth.accessToken)
			.then((response) => {
				const message = 'Invites sent.'

				this.props.submitSuccess(FORM_NAME, message)

				setTimeout(() => {
					this.hideForm()
				}, 2000)
			})
			.catch((err) => {
				console.log('INVITE EMPLOYEES ERR', err)
			})
	}

	hideForm() {
		this.props.clearForm(FORM_NAME)

		this.props.hideForm(FORM_NAME)
	}

	removeEmployee() {
		const {
			selected,
			auth
		} = this.props

		if (selected.length > 0) {
			this.props.submitDelete(FORM_NAME)

			const token = auth.accessToken

			for (let key in selected) {
				const deptId = selected[key].department.id
				const employeeId = selected[key].id

				api.removeEmployee(deptId, employeeId, token)
					.then((response) => {
						if (key == selected.length - 1) {
							this.refreshEmployees()

							this.props.submitDeleteSuccess(FORM_NAME)

							this.props.hideConfirmModal(FORM_NAME)
						}
					})
					.catch((err) => {
						console.log('REMOVE EMPLOYEE ERR', err)
					})
			}
		}
	}

	render() {
		const {
			isVisible,
			isSubmitting,
			isDeleting,
			selected,
			showForm,
			message,
			step,
			organizationMembers,
			confirmModalVisible,
			showConfirmModal,
			hideConfirmModal,
			addToSelected,
			addAllToSelected,
			removeFromSelected,
			clearSelected,
			departments,
			errorMessage,
			inviteMembers
		} = this.props

		let page

		if (step == 'default') {
			page = <OrganizationMembersForm
								key={'form'}
								departments={departments}
								errorMessage={errorMessage}
								hideForm={this.hideForm}
								isSubmitting={isSubmitting}
								onSubmit={this.inviteEmployee}
								inviteMembers={inviteMembers}
								selected={selected} />
		}

		else if (step == 'success') {
			page = <SuccessMessage
								key={'success'}
								hideForm={this.hideForm}
								message={message} />
		}

		return (
			<div>
				<OrganizationMembersList
					showForm={showForm}
					addToSelected={addToSelected}
					addAllToSelected={addAllToSelected}
					removeFromSelected={removeFromSelected}
					clearSelected={clearSelected}
					selected={selected}
					organizationMembers={organizationMembers}
					confirmModalVisible={confirmModalVisible}
					showConfirmModal={showConfirmModal}
					hideConfirmModal={hideConfirmModal}
					isDeleting={isDeleting}
					removeEmployee={this.removeEmployee} />

				<ConfirmModal
					isVisible={confirmModalVisible}
					hideModal={() => { hideConfirmModal(FORM_NAME) }}
					isSubmitting={isDeleting}
					confirmAction={this.removeEmployee} />

				<Modal isOpen={isVisible} className={{}} overlayClassName={{}} onRequestClose={this.hideForm}>
					<ReactCSSTransitionGroup transitionName="cross-fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
						{page}
					</ReactCSSTransitionGroup>
				</Modal>
			</div>
		)
	}
}
