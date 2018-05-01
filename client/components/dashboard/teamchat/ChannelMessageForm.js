import React, { Component } from 'react'

const ENTER_KEY = 13

export default class ChannelMessageForm extends Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
		this.handleKeyPress = this.handleKeyPress.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

		this.state = {
			text: ''
		}
	}

	handleChange(event) {
		this.setState({ text: event.target.value })
	}

	handleKeyPress(event) {
		const isEnter = event.which == ENTER_KEY

		if (isEnter && !event.shiftKey) {
			this.handleSubmit(event)
		}
	}

	handleSubmit(event) {
		event.preventDefault()

		if (this.state.text != '') {
			this.props.handleMessageSubmit(this.state.text)

			this.setState({ text: '' })
		}
	}

	render() {
		return (
			<form className="teamchat-channel__form" onSubmit={this.handleSubmit}>
				<textarea
					ref="message"
					onKeyPress={this.handleKeyPress}
					onChange={this.handleChange}
					value={this.state.text}
					placeholder="Type message..."
				/>
			</form>
		)
	}
}