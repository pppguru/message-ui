import React, { Component } from 'react'
import Loader from '../common/Loader'
import CustomerRequestsItem from './CustomerRequestsItem'

const FORM_NAME = 'assignEmployee'

export default class CustomerRequestsList extends Component {
	handleSelectAll() {
		let inputs = document.querySelectorAll('input[name="customerRequests"]')

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

			const selected = Object.keys(this.props.customerRequests).map((request) => {
				return request
			})

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
			users,
			customerRequests,
			visibleLimit,
			selected,
			assignUser,
			isAdmin,
			userId,
			addToSelected,
			removeFromSelected
		} = this.props

		return (
			<div className="section__content">
				<div className="customer-requests-list table-wrapper">
					<table className="table table--hover table--selection table--narrow" id="table-customer-requests-list">
						<thead>
							<tr>
								<th className="table__cell table__cell--header table__cell--checkbox">
									<input
										type="checkbox"
										id="checkbox-header"
										onChange={this.handleSelectAll.bind(this)} />

									<label htmlFor="checkbox-header"></label>
								</th>
								<th className="table__cell table__cell--header">Customer</th>
								<th className="table__cell table__cell--header no-wrap" style={{ maxWidth: '40%' }}>Last message</th>
								<th className="table__cell table__cell--header no-wrap">Assigned to</th>
								<th className="table__cell table__cell--header">Department</th>
								<th className="table__cell table__cell--header text--right no-wrap">Created at</th>
							</tr>
						</thead>
						<tbody>
							{ Object.keys(customerRequests).reverse().map((key) => {
								if (!customerRequests[key].completedAt) {
									return <CustomerRequestsItem
														key={key}
														index={key}
														request={customerRequests[key]}
														selected={selected}
														addToSelected={addToSelected}
														removeFromSelected={removeFromSelected}
														handleSelectAll={this.handleSelectAll}
														users={users}
														userId={userId}
														assignUser={assignUser} />
								}
							})}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}
