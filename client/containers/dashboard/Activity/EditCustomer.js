import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import * as api from 'utils/api'
import SuccessMessage from 'components/dashboard/common/SuccessMessage'
import EditCustomerForm from 'components/dashboard/activity/EditCustomerForm'
import { hideCustomerForm, clearCustomerFormData } from 'reducers/activityReducer'

@connect((state) => ({
	auth: state.auth,
	isOpen: state.activity.customerFormVisible,
	formData: state.activity.customerFormData
}), {
	hideCustomerForm,
	clearCustomerFormData
})

export default class EditCustomer extends Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.hideForm = this.hideForm.bind(this)

		this.state = {
			isSubmitting: false,
			success: false,
			message: null
		}
	}

	handleSubmit(model) {
		const data = {
			firstName: model.firstName,
			lastName: model.lastName,
			phone: model.phone,
			address: {
				country: model.country,
				region: model.region,
				city: model.city,
				street: model.street,
				zip: model.zip,
			}
		}

		const token = this.props.auth.accessToken

		this.setState({
			isSubmitting: true
		}, () => {
			const userId = this.props.formData.id

					// this.setState({
					// 	isSubmitting: false,
					// 	success: true,
					// 	message: 'Consumer\'s personal information saved.'
					// }, this.props.refreshCustomerRequests())

			api.editUser(userId, data, token)
				.then((response) => {
					this.setState({
						isSubmitting: false,
						success: true,
						message: 'Consumer\'s personal information saved.'
					}, this.props.refreshCustomerRequests())
				})
				.catch((err) => {
					console.log(err)
				})
		})
	}

	hideForm() {
		this.setState({
			isSubmitting: false,
			success: false,
			message: null
		}, () => {
			this.props.clearCustomerFormData()

			this.props.hideCustomerForm()
		})
	}

	render() {
		const {
			isOpen,
			formData
		} = this.props

		const {
			isSubmitting,
			success,
			message
		} = this.state

		let page

		if (success) {
			page = <SuccessMessage
								key={'success'}
								hideForm={this.hideForm}
								message={message} />
		} else {
			page = <EditCustomerForm
								key={'form'}
								hideForm={this.hideForm}
								onSubmit={this.handleSubmit}
								initialValues={formData}
								isSubmitting={isSubmitting} />
		}

		return (
			<Modal isOpen={isOpen} className={{}} overlayClassName={{}}>
				<ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={200}>
					{page}
				</ReactCSSTransitionGroup>
			</Modal>
		)
	}	
}