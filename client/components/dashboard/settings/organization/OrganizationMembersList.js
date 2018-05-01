import React, { Component } from 'react'
import Helpers from '../../../../utils/helpers'
import _ from 'lodash'
import moment from 'moment'

const FORM_NAME = 'organizationMembers'

export default class OrganizationMembersList extends Component {
	handleSelect(member, index) {
		let checkbox = this.refs['checkbox-' + index]

		if (checkbox.checked) {
			checkbox.checked = false
			
			this.props.removeFromSelected(FORM_NAME, member)
		} else {
			checkbox.checked = true

			this.props.addToSelected(FORM_NAME, member)
		}
	}

	handleSelectAll() {
		let inputs = document.querySelectorAll('input[name="organizationMembers"]')

		let allChecked = true

		for (let i = 1; i < inputs.length; i++) {
			if (inputs[i].checked == false) {
				allChecked = false
			}
		}

		if (!allChecked) {
			this.props.clearSelected(FORM_NAME)

			document.querySelectorAll('input[id="checkbox-header"]')[0].checked = true

			this.props.addAllToSelected(FORM_NAME, this.props.organizationMembers)
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
			showForm,
			selected,
			organizationMembers,
			showConfirmModal
		} = this.props

		const deleteButton = 
			(selected.length > 0)
			? <button type="button" className="btn btn--md mr--5 btn--delete" onClick={() => { showConfirmModal(FORM_NAME) }}>Delete</button>
			: <button type="button" className="btn btn--md mr--5 btn--delete btn--disabled">Delete</button>

		return (
			<div>
				<div className="box box--default">
					<div className="box__header">
						<h3 className="box__title">Members</h3>
						<div className="box__tools">
							{deleteButton}
							<button type="button" className="btn btn--beta btn--sm" onClick={() => { showForm(FORM_NAME) }}>Add</button>
						</div>
					</div>
					<div className="box__body">
						<div className="members-list table-wrapper">
							<table className="table table--hover table--selection">
								<thead>
									<tr>
										<th className="table__cell table__cell--header table__cell--checkbox">
											<input 
												type="checkbox" 
												id="checkbox-header" 
												onChange={this.handleSelectAll.bind(this)} />

											<label htmlFor="checkbox-header"></label>
										</th>
										<th className="table__cell table__cell--header">Name</th>
										<th className="table__cell table__cell--header">Email</th>
										<th className="table__cell table__cell--header">Phone</th>
										<th className="table__cell table__cell--header">Department</th>
										<th className="table__cell table__cell--header text--right">Created at</th>
									</tr>
								</thead>
								<tbody>
									{organizationMembers && organizationMembers.map((member, index) => {
										const createdAt = moment(Date.parse(member.createdAt)).format('l LT')

										const rowClassName = (_.find(selected, member)) ? 'table__row--selected' : null

										return ( 
											<tr key={index} onClick={this.handleSelect.bind(this, member, index)} className={'table__row ' + rowClassName}>
												<td className="table__cell table__cell--checkbox">
													<input 
														type="checkbox" 
														id={'checkbox-' + index}
														ref={'checkbox-' + index}
														name="organizationMembers" />

													<label htmlFor={"checkbox-" + index}></label>
												</td>
												<td className="table__cell">{member.firstName + ' ' + member.lastName}</td>
												<td className="table__cell">{member.email}</td>
												<td className="table__cell">{member.phone}</td>
												<td className="table__cell">{member.department && member.department.name}</td>
												<td className="table__cell text--right">{createdAt}</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		)
	}
}