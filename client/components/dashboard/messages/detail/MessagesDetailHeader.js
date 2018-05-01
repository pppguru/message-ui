import React, { Component } from 'react'
import Modal from 'react-modal'
import Loader from '../../common/Loader'

export default class MessagesDetailHeader extends Component {
  constructor(props) {
    super(props)

    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown() {
    if (this.props.dropdownVisible) {
      this.props.hideStatusDropdown()
    } else {
      this.props.showStatusDropdown()
    }
  }

  render() {
    const {
      dropdownVisible,
      confirmVisible,
      showConfirmModal,
      hideConfirmModal,
      showStatusDropdown,
      hideStatusDropdown,
      resolveCustomerRequest,
      isSubmitting
    } = this.props

    return (
      <div className="messages-detail__header">
        <Modal
          isOpen={confirmVisible}
          onRequestClose={hideConfirmModal}
          className={{}}
          overlayClassName="modal modal--confirm">
          <div className="modal__header">
            <h3 className="modal__title">Are you sure?</h3>
            <button type="button" className="modal__close" onClick={hideConfirmModal}>&times;</button>
          </div>
          <div className="modal__footer">
            <button type="button" className="btn btn--md btn--beta" onClick={resolveCustomerRequest} style={{ width: 120 }}>{(isSubmitting) ? <Loader type={'button'} /> : 'Confirm'}</button>
          </div>
        </Modal>

        <div className="messages-detail__status">
          <div className="messages-detail__status-header">
            Status: <button type="button" className="btn btn--sm btn--beta" onClick={this.toggleDropdown}>Open</button>
          </div>
          <ul className={(dropdownVisible) ? 'messages-detail__status-dropdown messages-detail__status-dropdown--visible' : 'messages-detail__status-dropdown'}>
            <li><a onClick={showConfirmModal}>Closed</a></li>
          </ul>
				</div>
      </div>
    )
  }
}