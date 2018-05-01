import React, { Component } from 'react'
import _ from 'lodash'

const FORM_NAME = 'addPeopleToChannel'

export default class AddPeopleToChannel extends Component {
	constructor(props) {
		super(props)
	}

	componentWillUnmount() {
		this.props.clearSelected(FORM_NAME)
	}

	handleSelect(id, event) {
		if (event.target.checked) {
			this.props.addToSelected(FORM_NAME, id)
		} else {
			this.props.removeFromSelected(FORM_NAME, id)
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
			let selected = []

			for (let i = 0; i < inputs.length; i++) {
				inputs[i].checked = true

				selected.push(inputs[i].dataset.key)
			}

			this.props.addToSelected(FORM_NAME, selected)
		} 

		else {
			for (let i = 0; i < inputs.length; i++) {
				inputs[i].checked = false

				this.props.clearSelected(FORM_NAME)
			}
		}
	}

	render() {
		const {
			handleSubmit,
			hideForm,
			organizationMembers,
			channelMembers,
			userId,
			isSubmitting
		} = this.props

		let availableMembers = []

		for (let key in organizationMembers) {
			let target = _.find(channelMembers, { id: organizationMembers[key].id })

			if (!target) {
				availableMembers.push(organizationMembers[key])
			}
		}

		return (
			<form className="form form--fullscreen form--create-channel" onSubmit={handleSubmit}>
				<button type="button" className="form__close" onClick={hideForm}>&times;</button>

				<div className="form__header">
					<h3 className="form__title">Add people to channel</h3>
				</div>

				<div className="form__content ">
					<div className="form__row">
						<div className="form__group">
							<label>Available team members</label>
							<div className="table-overflow-hidden">
								<table className="table">
									<thead>
										<tr>
											<th className="table__cell table__cell--header table__cell--checkbox">
												<input name="organizationMembers" type="checkbox" id="checkbox-header" onChange={this.handleSelectAll.bind(this)} />
												<label htmlFor="checkbox-header"></label>
											</th>
											<th className="table__cell table__cell--header">Team member</th>
											<th className="table__cell table__cell--header">E-mail</th>
										</tr>
									</thead>
									<tbody>
										{availableMembers && availableMembers.map((member, index) => {
											if (member.id != userId) {
												return (
													<tr key={index}>
														<td className="table__cell table__cell--checkbox">
															<input 
																type="checkbox" 
																id={'checkbox-' + index} 
																data-key={member.id} 
																onChange={this.handleSelect.bind(this, member.id)} 
																name="organizationMembers" />

															<label htmlFor={"checkbox-" + index}></label>
														</td>
														<td className="table__cell">{member.firstName + ' ' + member.lastName}</td>
														<td className="table__cell">{member.email}</td>
													</tr>
												)
											}
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				<div className="form__footer">
					<button type="submit" className="btn btn--alpha form__submit" style={{ width: 160 }}>{(isSubmitting) ? <Loader type={'button'} /> : 'Add people'}</button>
				</div>
			</form>
		)
	}
}