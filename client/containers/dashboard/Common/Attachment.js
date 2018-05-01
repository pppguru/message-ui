import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import AttachmentForm from 'components/dashboard/common/AttachmentForm'
import * as api from 'utils/api'
import {
	hideForm,
	submit,
	submitSuccess,
	submitError
} from 'reducers/formsReducer'

const FORM_NAME = 'attachment'

@connect(
	state => ({
		auth: state.auth,
		isVisible: state.forms[FORM_NAME].isVisible,
		isSubmitting: state.forms[FORM_NAME].isSubmitting
	}), {
		hideForm,
		submit,
		submitSuccess,
		submitError
	}
)

export default class Attachment extends Component {
	render() {
		const {
			isVisible,
			isSubmitting,
			hideForm,
			handleSubmit,
			putImage
		} = this.props

		return (
			<Modal 
				isOpen={isVisible}
				onRequestClose={() => { hideForm(FORM_NAME) }}
				className={{}}
				overlayClassName="modal--attachment">
				
				<AttachmentForm
			 		handleSubmit={handleSubmit}
			 		putImage={putImage}
			 		hideForm={hideForm}
			 		isSubmitting={isSubmitting} />

			</Modal>
		)
	}
}