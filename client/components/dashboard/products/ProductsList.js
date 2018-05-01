import React, { Component } from 'react'
import Loader from '../common/Loader'

const FORM_NAME = 'products'

export default class ProductsList extends Component {
	handleSelect(id, index) {
		let checkbox = this.refs['checkbox-' + index]

		if (checkbox.checked) {
			checkbox.checked = false
			
			this.props.removeFromSelected(FORM_NAME, id)
		} else {
			checkbox.checked = true

			this.props.addToSelected(FORM_NAME, id)
		}
	}

	handleSelectAll() {
		let inputs = document.querySelectorAll('input[name="products"]')

		let allChecked = true

		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].checked == false) {
				allChecked = false
			}
		}

		if (!allChecked) {
			this.props.clearSelected(FORM_NAME)

			for (let i = 0; i < inputs.length; i++) {
				inputs[i].checked = true
			}

			document.querySelectorAll('input[id="checkbox-header"]')[0].checked = true
			
			let selected = []

			for (let i = 0; i < this.props.products.length; i++) {
				selected.push(this.props.products[i].id)
			}

			this.props.addAllToSelected(FORM_NAME, selected)
		} 

		else {
			for (let i = 0; i < inputs.length; i++) {
				inputs[i].checked = false
			}

			this.props.clearSelected(FORM_NAME)

			document.querySelectorAll('input[id="checkbox-header"]')[0].checked = false
		}
	}

	render() {
		const {
			products,
			selected
		} = this.props

		return (
			<div className="section__content">
				<div className="products-list table-wrapper">
					<table className="table table--hover table--selection table--narrow" id="table-products-list">
						<thead>
							<tr>
								<th className="table__cell table__cell--header table__cell--checkbox">
									<input 
										type="checkbox" 
										id="checkbox-header"
										onChange={this.handleSelectAll.bind(this)} />

									<label htmlFor="checkbox-header"></label>
								</th>
								<th className="table__cell table__cell--header">Product</th>
								<th className="table__cell table__cell--header">Description</th>
								<th className="table__cell table__cell--header">Price</th>
								<th className="table__cell table__cell--header text--right">Action</th>
							</tr>
						</thead>
						<tbody>
							{products && products.map((product, index) => {
								const imageUrl = (product.images && product.images[0]) && product.images[0].small
								
								const image = imageUrl ? <img src={imageUrl} alt={product.name} /> : <div className="modal__placeholder-image" style={{ marginRight: 10 }}><i className="mu mu-cart"></i></div>

								const rowClassName = (_.find(selected, product)) && 'table__row--selected'

								if (index < this.props.visibleLimit) {
									return (
										<tr key={index} onClick={this.handleSelect.bind(this, product.id, index)} className={'table__row ' + rowClassName}>
											<td className="table__cell table__cell--checkbox">
												<input 
													type="checkbox" 
													ref={'checkbox-' + index} 
													id={'checkbox-' + index} 
													name="products" />

												<label htmlFor={"checkbox-" + index}></label>
											</td>
											<td className="table__cell table__cell--image">
												<div className="table__cell-flex" style={{ flexDirection: 'row' }}>
													{image} {product.name}
												</div>
											</td>
											<td className="table__cell">{product.description}</td>
											<td className="table__cell">{'$ ' + (product.price / 100)}</td>
											<td className="table__cell text--right">
												<button 
													type="button" 
													className="btn btn--sm btn--default btn--inline mr--5" 
													onClick={() => {this.props.editProduct(product)}}>Edit</button>
											</td>
										</tr>
									)
								}
							})}
						</tbody>
					</table>
				</div>
			</div>	
		)
	}
}