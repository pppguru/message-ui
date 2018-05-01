import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import * as api from 'utils/api'
import ProductForm from 'components/dashboard/products/ProductForm'
import SuccessMessage from 'components/dashboard/common/SuccessMessage'
import {
	hideForm,
	clearForm,
	submit,
	submitSuccess,
	submitError
} from 'reducers/formsReducer'

const FORM_NAME = 'products'

@connect((state) => ({
	auth: state.auth,
	isVisible: state.forms[FORM_NAME].isVisible,
	isEditing: state.forms[FORM_NAME].isEditing,
	isSubmitting: state.forms[FORM_NAME].isSubmitting,
	step: state.forms[FORM_NAME].step,
	message: state.forms[FORM_NAME].message,
	formData: state.forms[FORM_NAME].data
}), {
	hideForm,
	clearForm,
	submit,
	submitSuccess,
	submitError
})

export default class AddEditProduct extends Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.putImage = this.putImage.bind(this)
		this.hideForm = this.hideForm.bind(this)

		this.state = {
			success: false,
			image: null
		}
	}

	handleSubmit(model) {
		const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken

		const data = {
			name: model.name,
			description: model.description,
			price: parseFloat(model.price) * 100,
			images: []
		}

		if (this.state.image) {
			api.getProductImageUrl(orgId, token)
				.then((response) => {
					const uploadUrl = response.uploadUrl
					const imageUrl = response.imageUrl

					api.uploadImage(this.state.image, uploadUrl)
						.then((response) => {
							data.images = [imageUrl]

							this.addProduct(data, orgId, token)
						})
				})
				.catch((err) => {
					console.log('didnt get image url', err.message)
				})
		} else {
			this.addProduct(data, orgId, token)	
		}

		this.props.submit(FORM_NAME)
	}

	addProduct(data, orgId, token) {
		if (this.props.isEditing) {
			const productId = this.props.formData.id

			api.editProduct(orgId, productId, data, token)
				.then((response) => {

					const message = 'Product "' + data.name + '" edited.'

					this.props.submitSuccess(FORM_NAME, message)

					this.props.refreshProducts()

					setTimeout(() => {
						this.hideForm()
					}, 2000)
				})
		}

		else {
			data.customProductType = 'Product'
			data.customProduct = false

			api.addProduct(orgId, data, token)
				.then((response) => {
					const message = 'Product "' + data.name + '" added.'

					this.props.submitSuccess(FORM_NAME, message)

					this.props.refreshProducts()

					setTimeout(() => {
						this.hideForm()
					}, 2000)
				})
		}
	}

	putImage(image) {
		this.setState({ image: image })
	}

	hideForm() {
		this.props.clearForm(FORM_NAME)

		this.props.hideForm(FORM_NAME)
	}

	render() {
		const {
			isVisible,
			formData,
			isEditing,
			isSubmitting,
			message,
			step
		} = this.props

		let page

		if (step == 'default') {
			page = <ProductForm
								key={'form'}
								hideForm={this.hideForm}
								onSubmit={this.handleSubmit}
								initialValues={formData}
								isEditing={isEditing}
								isSubmitting={isSubmitting}
								putImage={this.putImage} />
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
