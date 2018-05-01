import React, { Component } from 'react'
import Loader from '../common/Loader'

const FORM_NAME = 'assignEmployee'

export default class AssignEmployeeForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedEmployeeId: null
		}
	}

	componentWillUnmount() {
		this.setState({
			selectedEmployeeId: null
		})
	}

	handleEmployeeSelect(id, index) {
		let target = this.refs['radio-' + index]

		let radios = document.querySelectorAll('input[name="selectedEmployee"]')

		for (let i = 0; i < radios.length; i++) {
			radios[i].checked = false
		}

		target.checked = true

		this.setState({
			selectedEmployeeId: id
		})
	}

	handleSubmit(event) {
		event.preventDefault()

		if (this.state.selectedEmployeeId != null) {
			this.props.handleSubmit(this.state.selectedEmployeeId)
		}
	}

	render() {
		const {
			employees,
			handleSubmit,
			hideForm,
			isSubmitting
		} = this.props

		let submitBtn

		if (this.state.selectedEmployeeId) {
			submitBtn = <button type="submit" className="btn btn--md btn--alpha form__submit">{(isSubmitting) ? <Loader type={'button'} /> : 'Submit'}</button>
		} else {
			submitBtn = <button type="button" className="btn btn--md btn--inactive btn--inactive form__submit">Submit</button>
		}

		return (
			<form className="form form--fullscreen" onSubmit={this.handleSubmit.bind(this)}>
				<button type="button" className="form__close" onClick={() => { hideForm(FORM_NAME) }}>&times;</button>

				<div className="form__header">
					<h3 className="form__title">Assign team member to request</h3>
				</div>

				<div className="form__content form__content--column">
					<h3 className="form__subtitle">Currently free team members</h3>
					<div className="form__row">
						<div className="form__group">
							<div className="table-wrapper">
								<table className="table table--hover table--selection">
									<thead>
										<tr>
											<th className="table__cell table__cell--checkbox"></th>
											<th className="table__cell table__cell--header">Team member</th>
											<th className="table__cell table__cell--header">Department</th>
										</tr>
									</thead>
									<tbody>
										{employees && employees.map((employee, index) => {
											const rowClassName = (employee.id == this.state.selectedEmployeeId) ? 'table__row--selected' : null

											return (
												<tr key={index} onClick={this.handleEmployeeSelect.bind(this, employee.id, index)} className={'table__row ' + rowClassName}>
													<td className="table__cell table__cell--radio">
														<input 
															type="radio" 
															id={'radio-' + index}
															ref={'radio-' + index}
															name="selectedEmployee" />

														<label htmlFor={'radio-' + index}></label>
													</td>
													<td className="table__cell">{employee.firstName + ' ' + employee.lastName}</td>
													<th className="table__cell">{employee.department && employee.department.name}</th>
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
					{submitBtn}
				</div>
			</form>
		)
	}
}
