import React, { Component } from 'react'
import Loader from '../../common/Loader'
import Helpers from '../../../../utils/helpers'
import Modal from 'react-modal'
import moment from 'moment'

const FORM_NAME = 'departments'

export default class DepartmentsList extends Component {
	handleSelect(id, event) {
		if (event.target.checked) {
			this.props.addToSelected(FORM_NAME, id)
		} else {
			this.props.removeFromSelected(FORM_NAME, id)
		}
	}

	handleSelectAll() {
		let inputs = document.querySelectorAll('input[name="departments"]')

		let allChecked = true

		for (let i = 1; i < inputs.length; i++) {
			if (inputs[i].checked == false) {
				allChecked = false
			}
		}

		if (!allChecked) {
			this.props.clearSelected(FORM_NAME)

			let selected = []

			for (let i = 0; i < inputs.length; i++) {
				inputs[i].checked = true

				selected.push(inputs[i].dataset.key)
			}

			this.props.addToSelected(FORM_NAME, selected)
		} else {
			for (let i = 0; i < inputs.length; i++) {
				inputs[i].checked = false

				this.props.clearSelected(FORM_NAME)
			}
		}
	}

	render() {
		const {
			showForm,
			departments,
			editDepartment,
			deleteDepartments,
			loading,
			selected,
			showConfirmModal,
			hideConfirmModal,
			confirmModalVisible,
			isDeleting
		} = this.props

		const deleteButton = 
			(selected.length > 0)
			? <button type="button" className="btn btn--md mr--5 btn--default" onClick={showConfirmModal}>Delete</button>
			: <button type="button" className="btn btn--md mr--5 btn--default btn--disabled">Delete</button>

		let loader = (loading) ? <Loader visible={true} centered={true} margin={true} /> : null

		return (
			<div className="box box--default">
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
            <button type="button" className="btn btn--md btn--beta" onClick={deleteDepartments} style={{ width: 120 }}>{(isDeleting) ? <Loader type={'button'} /> : 'Confirm'}</button>
          </div>
        </Modal>

				<div className="box__header">
					<h3 className="box__title">Departments</h3>
					<div className="box__tools">
						<button type="button" className="btn btn--beta btn--sm" onClick={() => { showForm(FORM_NAME) }}>Add</button>
					</div>
				</div>
				<div className="box__body">
					<div className="departments-list table-wrapper">
						<table className="table table--narrow" id="table-departments-list">
							<thead>
								<tr>
									{/* <th className="table__cell table__cell--header table__cell--checkbox">
										<input 
											type="checkbox" 
											id="checkbox-header" 
											onChange={this.handleSelectAll.bind(this)} />

										<label htmlFor="checkbox-header"></label>
									</th> */ }
									<th className="table__cell table__cell--header">Name</th>
									<th className="table__cell table__cell--header text--right" style={{"width": '20%'}}>Created at</th>
									<th className="table__cell table__cell--header text--right" style={{"width": '20%'}}>Action</th>
								</tr>
							</thead>
							<tbody>
								{departments && departments.map((department, index) => {
									const createdAt = moment(Date.parse(department.createdAt)).format('l LT')

									return (
										<tr key={index}>
											{/* <td className="table__cell table__cell--checkbox">
												<input 
													type="checkbox" 
													id={'checkbox-' + index} 
													data-key={department.id} 
													onChange={this.handleSelect.bind(this, department.id)} 
													name="departments" />

												<label htmlFor={"checkbox-" + index}></label>
											</td> */ }
											<td className="table__cell">{department.name}</td>
											<td className="table__cell text--right">{createdAt}</td>
											<td className="table__cell text--right">
												<button type="button" className="btn btn--sm btn--default btn--inline" onClick={() => { editDepartment(department) }}>Edit</button>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>

						{loader}
					</div>
				</div>
			</div>	
		)
	}
}