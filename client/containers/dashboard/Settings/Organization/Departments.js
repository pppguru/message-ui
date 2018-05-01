import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import * as api from 'utils/api'
import DepartmentsList from 'components/dashboard/settings/organization/DepartmentsList'
import DepartmentsForm from 'components/dashboard/settings/organization/DepartmentsForm'
import SuccessMessage from 'components/dashboard/common/SuccessMessage'
import {
	showForm,
	hideForm,
	putFormData,
	clearForm,
	addToSelected,
	removeFromSelected,
	clearSelected,
	submit,
	submitSuccess,
	submitError,
	submitDelete,
	submitDeleteSuccess
} from 'reducers/formsReducer'

import {
	showLoader,
	hideLoader,
	clearDepartments,
	putDepartments,
	incrementLimit,
	showConfirmModal,
	hideConfirmModal
} from 'reducers/settings/departmentsReducer'

const FORM_NAME = 'departments'

@connect((state) => ({
	auth: state.auth,
	isVisible: state.forms[FORM_NAME].isVisible,
	formData: state.forms[FORM_NAME].data,
	selected: state.forms[FORM_NAME].selected,
	isSubmitting: state.forms[FORM_NAME].isSubmitting,
	isDeleting: state.forms[FORM_NAME].isDeleting,
	isEditing: state.forms[FORM_NAME].isEditing,
	step: state.forms[FORM_NAME].step,
	message: state.forms[FORM_NAME].message,
	departments: state.settingsDepartments.departments,
	loading: state.settingsDepartments.loading,
	visibleLimit: state.settingsDepartments.visibleLimit,
	confirmModalVisible: state.settingsDepartments.confirmModalVisible
}), {
	showForm,
	hideForm,
	putFormData,
	clearForm,
	addToSelected,
	removeFromSelected,
	clearSelected,
	submit,
	submitSuccess,
	submitError,
	showLoader,
	hideLoader,
	clearDepartments,
	putDepartments,
	incrementLimit,
	showConfirmModal,
	hideConfirmModal,
	submitDelete,
	submitDeleteSuccess
})

export default class Departments extends Component {
	constructor(props) {
		super(props)

		this.hideForm = this.hideForm.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.editDepartment = this.editDepartment.bind(this)
		this.getDepartments = this.getDepartments.bind(this)
		this.deleteDepartments = this.deleteDepartments.bind(this)
	}

	componentDidMount() {
		this.getDepartments()
	}

	getDepartments() {
		const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken

		if (this.props.departments.length == 0) {
			this.props.showLoader()
		}

		api.getDepartments(orgId, token)
			.then((response) => {
				this.props.clearDepartments()

				this.props.putDepartments(response)

				this.props.hideLoader()
			})
	}

	handleSubmit(model) {
		this.props.submit(FORM_NAME)

		const isPrivate = (model.isPrivate == undefined) ? false : model.isPrivate

		const data = {
			name: model.name,
			private: isPrivate
		}

		const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken

		if (this.props.isEditing) {
			const departmentId = this.props.formData.id

			api.editDepartment(orgId, departmentId, data, token)
				.then((response) => {
					const message = 'Department ' + name + ' modified.'

					this.props.submitSuccess(FORM_NAME, message)

					this.getDepartments()

					setTimeout(() => {
						this.props.clearForm(FORM_NAME)

						this.props.hideForm(FORM_NAME)
					}, 2000)
				})
				.catch((err) => {
					console.log('ADD DEPARTMENT ERR', err)
				})
		} else {
			api.addDepartment(orgId, data, token)
				.then((response) => {
					const message = 'Department ' + name + ' created.'

					this.props.submitSuccess(FORM_NAME, message)

					this.getDepartments()

					setTimeout(() => {
						this.props.clearForm(FORM_NAME)

						this.props.hideForm(FORM_NAME)
					}, 2000)
				})
				.catch((err) => {
					console.log('EDIT DEPARTMENT ERR', err)
				})
		}
	}

	hideForm() {
		this.props.clearForm(FORM_NAME)

		this.props.hideForm(FORM_NAME)
	}

	editDepartment(department) {
		const formData = {
			id: department.id,
			name: department.name,
			isPrivate: department.private
		}

		this.props.putFormData(FORM_NAME, formData)

		this.props.showForm(FORM_NAME)
	}

	deleteDepartments() {
		this.props.submitDelete(FORM_NAME)
	}

	render() {
		const {
			isVisible,
			formData,
			isEditing,
			isSubmitting,
			isDeleting,
			selected,
			showForm,
			message,
			step,
			departments,
			editDepartment,
			addToSelected,
			removeFromSelected,
			clearSelected,
			loading,
			confirmModalVisible,
			showConfirmModal,
			hideConfirmModal
		} = this.props

		let page

		if (step == 'default') {
			page = <DepartmentsForm
								key={'form'}
								hideForm={this.hideForm}
								initialValues={formData}
								isSubmitting={isSubmitting}
								isEditing={isEditing}
								onSubmit={this.handleSubmit}
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
				<DepartmentsList
					departments={departments}
					loading={loading}
					isDeleting={isDeleting}
					showForm={showForm}
					editDepartment={this.editDepartment}
					deleteDepartments={this.deleteDepartments}
					selected={selected}
					addToSelected={addToSelected}
					removeFromSelected={removeFromSelected}
					clearSelected={clearSelected}
					confirmModalVisible={confirmModalVisible}
					showConfirmModal={showConfirmModal}
					hideConfirmModal={hideConfirmModal} />

				<Modal isOpen={isVisible} className={{}} overlayClassName={{}} onRequestClose={this.hideForm}>
					<ReactCSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={300} transitionLeaveTimeout={200}>
						{page}
					</ReactCSSTransitionReplace>
				</Modal>
			</div>
		)
	}
}