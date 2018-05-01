import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Loader from '../../common/Loader'

const FORM_NAME = 'offerProduct'

export default class OfferProductForm extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

	constructor(props) {
		super(props)

		this.handleScroll = this.handleScroll.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.redirectToPaymentSetup = this.redirectToPaymentSetup.bind(this)

		this.state = {
			items: []
		}
	}

	handleScroll(event) {
		// console.log('scrolling', event)
	}

	handleCountChange(event) {
		const {
			items
		} = this.state

		const item = {
			id: event.target.id,
			value: parseInt(event.target.value)
		}

		const target = _.find(items, { id: item.id })
		
		if (target) {
			const index = _.indexOf(items, target)

			let newItems = items

			newItems[index] = item

			this.setState({
				items: newItems
			})
		} 

		else {
			this.setState({
				items: [
					...items,
					item
				]
			})
		}
	}

	handleSubmit(event) {
		event.preventDefault()

		let valid = false

		for (let key in this.state.items) {
			if (this.state.items[key].value > 0) {
				valid = true
			}
		}

		if (valid) {
			const message = this.refs.message.value

			this.props.handleSubmit(this.state.items, message)
		}
	}

	redirectToPaymentSetup() {
		this.context.router.push('/dashboard/settings/integrations')
	}

	render() {
		const {
			products,
			hideForm,
			isSubmitting,
			hasGateway
		} = this.props

		const {
			items
		} = this.state

		let submitBtnActive = false

		for (let key in items) {
			if (items[key].value > 0) {
				submitBtnActive = true
			}
		}

		return (
			<form onSubmit={this.handleSubmit} className="modal">
				<div className="modal__header">
					<h3 className="modal__title">Products</h3>
					<button type="button" className="modal__close" onClick={() => { hideForm(FORM_NAME) }}>&times;</button>
				</div>
				<div className="modal__message">
					<input type="textarea" ref="message" placeholder="Type message..." />
				</div>
				<div className="modal__body" onScroll={this.handleScroll}>
					<ul className="modal__list">
						{products && products.map((product, index) => {
							let image

							if (product.images[0] && product.images[0].small) {
								image = <img src={product.images[0].small} />
							} else {
								image = <div className="modal__placeholder-image"><i className="mu mu-cart"></i></div>
							}

							return (
								<li className="modal__item" key={index}>
									<div className="modal__image">
										{image}
									</div>
									<div className="modal__name">
										{product.name}
									</div>
									<div className="modal__count">
										<span style={{ marginRight: 10, fontSize: 18 }}>x</span>
										<input type="number" min="0" placeholder="0" id={product.id} onChange={this.handleCountChange.bind(this)} />
									</div>
								</li>
							)
						})}
					</ul>
				</div>
				<div className={hasGateway ? 'modal__footer' : 'modal__footer modal__footer--center'}>
					{hasGateway 
						? <button type="submit" className={(submitBtnActive) ? 'btn btn--sm btn--alpha form__submit' : 'btn btn--sm btn--alpha btn--disabled form__submit'}>{(isSubmitting) ? <Loader type={'button'} /> : 'Send'}</button>
						: <span className="text-default"><a className="link-default" onClick={this.redirectToPaymentSetup}>Click here</a> to setup your payment gateway first.</span>
					}
				</div>
			</form>
		)
	}
}