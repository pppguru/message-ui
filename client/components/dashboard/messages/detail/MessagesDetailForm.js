import React, { Component } from 'react'

const ENTER_KEY = 13
const FORM_NAME = 'offerProduct'

export default class MessagesDetailForm extends Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleKeyPress = this.handleKeyPress.bind(this)

		this.state = {
			message: ''
		}
	}

	handleChange(event) {
		this.setState({ message: event.target.value })
	}

	handleKeyPress(event) {
		if (event.which == ENTER_KEY && !event.shiftKey) {
			this.handleSubmit(event)
		}
	}

	handleSubmit(event) {
		event.preventDefault()

		const message = this.state.message.replace(/\r?\n/g, '<br />')

		if (message != '') {
			this.props.onSubmit(message)

			this.setState({ message: '' })
		}
	}

	render() {
		const {
			showForm,
			isAdmin
		} = this.props

		return (
			<div className="messages-detail__form">
				<div className="messages-detail__form-header">
					<a className="messages-detail__offer-btn mr--5" onClick={() => { showForm('attachment') }}><i className="mu mu-attachment"></i>Attachment</a>
					{ !isAdmin && <a className="messages-detail__offer-btn" onClick={() => { showForm('offerProduct') }}><i className="mu mu-cart"></i>Products</a> }
				</div>
				<form onSubmit={this.handleSubmit}>
					<textarea 
						ref="message"
						onKeyPress={this.handleKeyPress}
						onChange={this.handleChange}
						value={this.state.message}
						placeholder="Type message..." />
				</form>
			</div>
		)
	}
}