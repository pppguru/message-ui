import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import * as api from 'utils/api'
import Loader from 'components/dashboard/common/Loader'
import ProductsList from 'components/dashboard/products/ProductsList'
import AddEditProduct from './AddEditProduct'
import {
	putProducts,
	clearProducts,
	incrementLimit,
	showLoader,
	hideLoader,
	showConfirmModal,
	hideConfirmModal
} from 'reducers/productsReducer'

import {
	showForm,
	addToSelected,
	addAllToSelected,
	removeFromSelected,
	clearSelected,
	putFormData,
	submitDelete,
	submitDeleteSuccess
} from 'reducers/formsReducer'

const FORM_NAME = 'products'

@connect((state) => ({
	auth: state.auth,
	loading: state.products.loading,
	visibleLimit: state.products.visibleLimit,
	confirmModalVisible: state.products.confirmModalVisible,
	products: state.products.products,
	selected: state.forms[FORM_NAME].selected,
	isDeleting: state.forms[FORM_NAME].isDeleting
}), {
	showForm,
	putProducts,
	clearProducts,
	incrementLimit,
	showLoader,
	hideLoader,
	addToSelected,
	addAllToSelected,
	removeFromSelected,
	clearSelected,
	putFormData,
	showConfirmModal,
	hideConfirmModal,
	submitDelete,
	submitDeleteSuccess
})

export default class Products extends Component {
	constructor(props) {
		super(props)

		this.addProduct = this.addProduct.bind(this)
		this.editProduct = this.editProduct.bind(this)
		this.getProducts = this.getProducts.bind(this)
		this.deleteProducts = this.deleteProducts.bind(this)

		this.didScroll = false
		this.scrollHandler = null
	}

	componentDidMount() {
		this.getProducts()

		document.querySelector('.section__container').addEventListener('scroll', () => { this.didScroll = true })

		this.handleScroll()
	}

	componentWillUnmount() {
		this.props.hideLoader()

		this.props.clearSelected(FORM_NAME)

		document.querySelector('.section__container').removeEventListener('scroll', () => { this.didScroll = true })

		this.scrollHandler = null
	}

	handleScroll() {
		this.scrollHandler = setInterval(() => {
			if (this.didScroll) {
				this.didScroll = false

				const scrollContainer = document.querySelector('.section__container')
				const scrollTarget = document.querySelector('.section__content')

				const breakpoint = scrollTarget.getBoundingClientRect().height - 1000
				const scrollTop = scrollContainer.scrollTop

				if (scrollTop >= breakpoint && breakpoint != 0) {
					this.props.showLoader()

					setTimeout(() => {
						this.props.incrementLimit(50)

						this.props.hideLoader()
					}, 1000)
				}
			}
		}, 250)
	}

	getProducts() {
		if (this.props.products.length == 0) {
			this.props.showLoader()
		}

		const orgId = this.props.auth.profile.organizationId
		const token = this.props.auth.accessToken

		api.getProducts(orgId, token)
			.then((response) => {
				this.props.clearProducts()

				this.props.putProducts(response)

				this.props.hideLoader()
			})
			.catch((err) => {
				console.log('LOAD PRODUCTS ERR', err)
			})
	}

	addProduct() {
		this.props.showForm(FORM_NAME)
	}

	editProduct(product) {
		const formData = {
			id: product.id,
			name: product.name,
			description: product.description,
			price: (product.price / 100),
			images: product.images
		}

		this.props.putFormData(FORM_NAME, formData)

		this.props.showForm(FORM_NAME)
	}

	deleteProducts() {
		const {
			selected,
			auth
		} = this.props

		if (selected.length > 0) {
			this.props.submitDelete(FORM_NAME)

			const orgId = auth.profile.organizationId
			const token = auth.accessToken

			for (let key in selected) {
				api.deleteProduct(orgId, selected[key], token)
					.then((response) => {
						if (key == selected.length - 1) {
							this.props.clearSelected(FORM_NAME)
							
							this.getProducts()

							this.props.submitDeleteSuccess(FORM_NAME)

							this.props.hideConfirmModal()
						}
					})
					.catch((err) => {
						console.log(err)
					})
			}
		}
	}

	render() {
		const {
			products,
			visibleLimit,
			loading,
			addToSelected,
			addAllToSelected,
			removeFromSelected,
			clearSelected,
			selected,
			confirmModalVisible,
			showConfirmModal,
			hideConfirmModal,
			isDeleting
		} = this.props

		const deleteButtonn = 
			(selected.length > 0)
			? <button type="button" className="btn btn--md mr--5 btn--delete" onClick={showConfirmModal}>Delete</button>
			: <button type="button" className="btn btn--md mr--5 btn--delete btn--disabled">Delete</button>

		return (
			<section className="section section--products" key={'section--products'}>
        <Modal
          isOpen={confirmModalVisible}
          onRequestClose={hideConfirmModal}
          className={{}}
          overlayClassName="modal modal--confirm">
          <div className="modal__header">
            <h3 className="modal__title">Are you sure?</h3>
            <button type="button" className="modal__close" onClick={hideConfirmModal}>&times;</button>
          </div>
          <div className="modal__footer">
            <button type="button" className="btn btn--md btn--beta" onClick={this.deleteProducts} style={{ width: 120 }}>{(isDeleting) ? <Loader type={'button'} /> : 'Confirm'}</button>
          </div>
        </Modal>

				<div className="section__container">
					<div className="section__header">
						<div className="section__title">
							<i className="mu mu-cart"></i><h2>Products</h2>
						</div>
						<div className="section__tools">
							{deleteButtonn}
							<button type="button" className="btn btn--md btn--beta" onClick={this.addProduct}>Add product</button>
						</div>
					</div>

					<ProductsList
						products={products}
						visibleLimit={visibleLimit}
						selected={selected}
						addToSelected={addToSelected}
						addAllToSelected={addAllToSelected}
						removeFromSelected={removeFromSelected}
						clearSelected={clearSelected}
						editProduct={this.editProduct}
						deleteProduct={this.deleteProduct} />

					{loading && <Loader visible={true} centered={true} margin={true} />}

					<AddEditProduct
						refreshProducts={this.getProducts} />
				</div>
			</section>
		)
	}
}
