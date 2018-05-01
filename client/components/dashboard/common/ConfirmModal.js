import React, { Component } from 'react'
import Modal from 'react-modal'
import Loader from './Loader'

export default class ConfirmModal extends Component {
	render() {
		const {
			isVisible,
			hideModal,
			isSubmitting,
			confirmAction
		} = this.props

		return (
			<Modal
				isOpen={isVisible}
				onRequestClose={hideModal}
				className={{}}
				overlayClassName="modal modal--confirm">
				<div className="modal__header">
					<h3 className="modal__title">Are you sure?</h3>
					<button type="button" className="modal__close" onClick={hideModal}>&times;</button>
				</div>
				<div className="modal__footer">
					<button type="button" className="btn btn--md btn--beta" onClick={confirmAction} style={{ width: 120 }}>{(isSubmitting) ? <Loader type={'button'} /> : 'Confirm'}</button>
				</div>
			</Modal>
		)
	}
}