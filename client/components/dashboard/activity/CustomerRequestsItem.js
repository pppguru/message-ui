import React, { Component } from 'react'
import moment from 'moment'
import _ from 'lodash'
import PersonPhoto from '../common/PersonPhoto'

const FORM_NAME = 'assignEmployee'

export default class CustomerRequestsItem extends Component {
	handleSelect(request, index) {
		let checkbox = this.refs['checkbox-' + index]

		if (checkbox.checked) {
			checkbox.checked = false

			this.props.removeFromSelected(FORM_NAME, request)
		} else {
			checkbox.checked = true

			this.props.addToSelected(FORM_NAME, request)
		}
	}

	render() {
		const {
			index,
			request,
			users,
			userId,
			selected,
			assignUser
		} = this.props

		const createdAt = moment(request.createdAt * 1000).format('l LT')

		let customer = request.customer
		let customerName = ''

		if (customer.firstName) {
			customerName += customer.firstName + ' '
		}

		if (customer.lastName) {
			customerName += customer.lastName
		}

		if (!customer.firstName && customer.phone) {
			customerName = customer.phone
		}

		if (!customer.firstName && !customer.phone) {
			customerName = 'Live Chat User'//customer.id
		}

		let customerImage

		if (users[customer.id] && users[customer.id].profileImageUrl) {
			customerImage = <PersonPhoto photoUrl={users[customer.id].profileImageUrl} className="person-photo--table" />
		} else {
			customerImage = <PersonPhoto photoUrl='' className="person-photo--table" />
		}

		let assignedTo = request.assignedTo
		let assignedToName = ''

		if (assignedTo && users[assignedTo.id]) {
			if (users[assignedTo.id].firstName) {
				assignedToName += users[assignedTo.id].firstName + ' '
			}

			if (users[assignedTo.id].lastName) {
				assignedToName += users[assignedTo.id].lastName
			}

			if (!users[assignedTo.id].firstName) {
				assignedToName = assignedTo.id
			}
		}

		let assignedToImage

		if (assignedTo) {
			if (users[assignedTo.id] && users[assignedTo.id].profileImageUrl) {
				assignedToImage = 
					<PersonPhoto 
						key={users[assignedTo.id].profileImageUrl} 
						photoUrl={users[assignedTo.id].profileImageUrl} 
						className="person-photo--table"
						isUser={assignedTo.id == userId ? true : false} />
			} else {
				assignedToImage = <PersonPhoto photoUrl='' className="person-photo--table" />
			}
		} else {
			assignedToImage = null
		}

		let department = null

		if (request.department) {
			department = <span className="badge badge--beta">{request.department.name}</span>
		}

		const isSelected = (_.find(selected, request)) ? true : false

		let assignedToCell = null
		
		if (assignedTo) {
			assignedToCell = <div className="table__cell-flex">{assignedToImage} {assignedToName}</div>
		} else {
			assignedToCell = <button type="button" className="btn btn--alpha btn--sm" onClick={() => { assignUser(index) }}>Claim</button>
		}

		let lastMessage

		if (request.lastMessage) {
			if (request.lastMessage.data.text) {
				lastMessage = request.lastMessage.data.text
			} else if (request.lastMessage.data.offerId) {
				lastMessage = '(Offer)'
			} else if (request.lastMessage.data.imageUrl) {
				lastMessage = '(Attachment)'
			}
		}

		return (
			<tr onClick={() => { this.handleSelect(request, index) }} className="table__row">
				<td className="table__cell table__cell--checkbox">
					<input
						type="checkbox"
						ref={'checkbox-' + index}
						id={'checkbox-' + index}
						name="customerRequests" />

					<label htmlFor={'checkbox-' + index}></label>
				</td>
				<td className="table__cell"><div className="table__cell-flex">{customerImage} {customerName}</div></td>
				<td className="table__cell">{lastMessage}</td>
				<td className="table__cell">{assignedToCell}</td>
				<td className="table__cell">{department ? department : 'General'}</td>
				<td className="table__cell text--right">{createdAt}</td>
			</tr>
		)
	}
}