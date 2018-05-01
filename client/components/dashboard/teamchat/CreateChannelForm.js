import React, { Component } from 'react'
import Loader from 'components/dashboard/common/Loader'
import PersonPhoto from 'components/dashboard/common/PersonPhoto'

const FORM_NAME = 'createChannel'

export default class CreateChannelForm extends Component {
	constructor(props) {
		super(props)
	}

	componentWillUnmount() {
		this.props.clearSelected(FORM_NAME)
	}

	handleSelect(id, index) {
		let checkbox = this.refs['checkbox-' + index]

		if (checkbox.checked) {
			checkbox.checked = false
			
			this.props.removeFromSelected(FORM_NAME, id)
		} else {
			checkbox.checked = true

			this.props.addToSelected(FORM_NAME, id)
		}
	}

	handleSelectAll() {
		let inputs = document.querySelectorAll('input[name="organizationMembers"]')

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

			let selected = []

			for (let i = 0; i < this.props.organizationMembers.length; i++) {
				selected.push(this.props.organizationMembers[i].id)
			}

			document.querySelectorAll('input[id="checkbox-header"]')[0].checked = true

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
			handleSubmit,
			hideForm,
			organizationMembers,
			userId,
			isSubmitting,
			selected,
			users
		} = this.props

		return (
			<form className="form form--fullscreen form--create-channel" onSubmit={handleSubmit}>
				<button type="button" className="form__close" onClick={hideForm}>&times;</button>

				<div className="form__header">
					<h3 className="form__title">Create new channel</h3>
				</div>

				<div className="form__content">
					<div className="form__row">
						<div className="form__group">
							<label>Available team members</label>
							<div className="table-wrapper">
								<table className="table table--narrow table--hover table--selection">
									<thead>
										<tr>
											<th className="table__cell table__cell--header table__cell--checkbox">
												<input type="checkbox" id="checkbox-header" onChange={this.handleSelectAll.bind(this)} />
												<label htmlFor="checkbox-header"></label>
											</th>
											<th className="table__cell table__cell--header">Team member</th>
											<th className="table__cell table__cell--header">E-mail</th>
										</tr>
									</thead>
									<tbody>
										{organizationMembers && organizationMembers.map((member, index) => {
											const rowClassName = (_.find(selected, member)) ? 'table__row--selected' : null

											let personPhoto

											if (users[member.id] && users[member.id].profileImageUrl) {
												personPhoto = <PersonPhoto photoUrl={users[member.id].profileImageUrl} className="person-photo--table" />
											} else {
												personPhoto = <PersonPhoto photoUrl='' className="person-photo--table" />
											}

											return (
												<tr key={index} onClick={this.handleSelect.bind(this, member.id, index)} className={'table__row ' + rowClassName}>
													<td className="table__cell table__cell--checkbox">
														<input 
															type="checkbox" 
															id={'checkbox-' + index} 
															ref={'checkbox-' + index} 
															name="organizationMembers" />

														<label htmlFor={"checkbox-" + index}></label>
													</td>
													<td className="table__cell">
														<div className="table__cell-flex">
															{personPhoto} {member.firstName + ' ' + member.lastName}
														</div>
													</td>
													<td className="table__cell">{member.email}</td>
												</tr>
											)
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				<div className="form__footer">
					<button type="submit" className="btn btn--alpha form__submit" style={{ width: 160 }}>{(isSubmitting) ? <Loader type={'button'} /> : 'Create channel'}</button>
				</div>
			</form>
		)
	}
}