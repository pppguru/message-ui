import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import * as api from 'utils/api'
import AssignEmployeeForm from 'components/dashboard/activity/AssignEmployeeForm'
import SuccessMessage from 'components/dashboard/common/SuccessMessage'
import { 
	hideForm,
	clearForm,
	submit,
	submitSuccess,
	submitError,
	clearSelected
} from 'reducers/formsReducer'

const FORM_NAME = 'assignEmployee'

@connect((state) => ({
	auth: state.auth,
	employees: state.organization.employees,
	isVisible: state.forms[FORM_NAME].isVisible,
	isSubmitting: state.forms[FORM_NAME].isSubmitting,
	step: state.forms[FORM_NAME].step,
	message: state.forms[FORM_NAME].message,
	selected: state.forms[FORM_NAME].selected
}), {
	hideForm,
	clearForm,
	submit,
	submitSuccess,
	submitError,
	clearSelected
})

export default class AssignEmployee extends Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.hideForm = this.hideForm.bind(this)
	}

	handleSubmit(employeeId) {
		if (employeeId) {
			this.props.submit(FORM_NAME)

			for (let key in this.props.selected) {
				api.assignRequestToEmployee(this.props.selected[key].key, employeeId, this.props.auth.accessToken)
					.then((response) => {
						if (key == this.props.selected.length - 1) {
							const message = 'Customer request assigned.'

							this.props.submitSuccess(FORM_NAME, message)

							this.props.clearSelected(FORM_NAME)

							setTimeout(() => {
								this.hideForm()
							}, 2000)
						}
					})
					.catch((err) => {
						console.log('ASSIGN EMPLOYEE TO REQUEST ERR', err)

						this.props.submitError(FORM_NAME)
					})
			}
		}
	}

	hideForm() {
		this.props.clearForm(FORM_NAME)

		this.props.hideForm(FORM_NAME)
	}

	render() {
		const {
			isVisible,
			employees,
			step,
			message,
			isSubmitting
		} = this.props

		let page

		if (step == 'default') {
			page = <AssignEmployeeForm
								key={'form'}
								employees={employees}
								hideForm={this.hideForm}
								handleSubmit={this.handleSubmit}
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