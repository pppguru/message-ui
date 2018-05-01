import React, { Component } from 'react'
import hljs from 'highlight.js'
import WidgetForm from './WidgetForm'
import * as api from 'utils/api'

export default class Widget extends Component {
	constructor(props) {
		super(props)

		this.handleSelectAll = this.handleSelectAll.bind(this)
		this.setTab = this.setTab.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

		this.state = {
			tab: 'yourself',
			isSubmitting: false
		}
	}

	handleSelectAll() {
		const target = this.refs.widgetCode

		target.select()
	}

	setTab(tab) {
		this.setState({ tab: tab })
	}

	handleSubmit(model) {
		this.setState({ isSubmitting: true })

		const data = {
			receiverEmail: model.email,
			setupMessage: model.message
		}

		api.sendWidgetSetupMail(this.props.organizationId, data, this.props.accessToken)
			.then((response) => {
				this.setState({ isSubmitting: false })

				this.setState({ tab: 'success' })

				setTimeout(() => {
					this.setState({ tab: 'yourself' })
				}, 2000)
			})
	}

	render() {
		const { organizationId, organizationName } = this.props

		const { tab, isSubmitting } = this.state

		let page

		switch (tab) {
			case 'yourself':
				page =
					<div>
						<p className="text-default text--left">To start using MessageUs Widget on your website, copy the code below to the footer section of your website.</p>
						<textarea className="widget-code" ref="widgetCode" onClick={this.handleSelectAll}>{"<!-- Start of MessageUs Widget code -->\n<div id=\"mw\"></div>\n<script type=\"text/javascript\">var messageusWidgetConfig = { organizationName: '" + organizationName + "', organizationId: '" + organizationId + "' };</script>\n<script src=\"https://go.message.us/js/widgetBundle.js\"></script>\n<!-- End of MessageUs Widget code -->"}</textarea>
					</div>

				break

			case 'developer':
				page = <WidgetForm
								onSubmit={this.handleSubmit}
								isSubmitting={isSubmitting} />

				break

			case 'success':
				page =
					<div className="widget-success-message">
						<h3 className="text-beta" style={{ fontWeight: 400 }}>Email successfully sent!</h3>
					</div>

				break
		}

		return (
			<div className="form form--horizontal" style={{ zIndex: 50 }}>
				<div className="form__header">
					<div className="form__tabs form__tabs--sm">
						<button type="button" className={tab == 'yourself' ? 'form__tab form__tab--active' : 'form__tab'} onClick={() => { this.setTab('yourself') }}>Do it yourself</button>
						<button type="button" className={tab == 'developer' ? 'form__tab form__tab--active' : 'form__tab'} onClick={() => { this.setTab('developer') }}>Send code to developer</button>
					</div>
				</div>

				{page}
			</div>
		)
	}
}
