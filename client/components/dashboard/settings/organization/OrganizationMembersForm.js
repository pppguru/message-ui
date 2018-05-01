import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Loader from '../../common/Loader'
import InviteRow from './InviteRow/InviteRow'
import _ from 'lodash'

const FORM_NAME = 'organizationMembers'

export const fields = [
	'department'
]

const validate = values => {
	const errors = {}

	if (!values.department) {
		errors.department = 'Required'
	}

	return errors
}

const generateRows = num => {
  const result = []
  for (let index = 0; index < num; index++) {
    result.push({
      id: index + 1,
      email: '',
      phone: ''
    })
  }
  return result
}

class OrganizationMembersForm extends Component {

	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleRowSubmit = this.handleRowSubmit.bind(this)

		this.state = {
			num: 1,
			rows: []
		}
	}

	componentWillMount() {
		this.updateRows(this.state.num)
	}

	handleSubmit() {
		for (let i = 0; i < this.state.num; i++) {
			this.refs['inviteRow-' + i].submit()
		}
	}

	handleRowSubmit() {
		this.props.handleSubmit()
	}

	updateRows(num) {
    const { rows } = this.state
    
    this.setState({
      num,
      rows: rows.length < num ? rows.concat(generateRows(num - rows.length)) : rows.slice(0, num)
    })
  }

	recalculateRows() {
		const { rows } = this.state
		
		var numRows = 1
		
		Object.keys(this.props.inviteMembers).map(key => {
			
			const item = this.props.inviteMembers[key]
			
			if (item.email.value || item.phone.value) {
				numRows++
			}
		})
		
		this.state.rows = rows.length < numRows ? rows.concat(generateRows(numRows - rows.length)) : rows.slice(0, numRows)
	}

	render() {
		const {
			fields: {
				department
			},
			hideForm,
			isSubmitting,
			departments
		} = this.props
		
		const { num, rows } = this.state
		
		return (
			<div className="form form--fullscreen">
				<button type="button" className="form__close" onClick={() => {hideForm(FORM_NAME)}}>&times;</button>

				<div className="form__header">
					<h3 className="form__title">Invite team members</h3>
				</div>

				<div className="form__content form__content--column">
					<div className="form__fields mb--20">
						<div className="form__row">
							<div className={(department.touched && department.error) ? 'form__group form__group--flex form__group--error' : 'form__group form__group--flex'}>
								<label>Department</label>

								<select
									className="input input--select input--grow"
									{...department}
									value={department.value || ''}>
									<option></option>
									{departments && departments.map((department, index) => {
										return (
											<option key={index} value={department.id}>{department.name}</option>
										)
									})}
								</select>
							</div>
						</div>
					</div>

					<div className="form__fields">
						<div className="form__row form__row--column">
							{rows.map((row, index) =>
								<InviteRow
									ref={'inviteRow-' + index}
									onSubmit={this.handleRowSubmit}
									recalculateRows={() => this.recalculateRows()}
									key={index} // required by React
									formKey={index.toString()} // formKey should be a string
									initialValues={row} />
							)}
						</div>
					</div>
				</div>

				<div className="form__footer">
					<button type="button" className="btn btn--alpha form__submit" onClick={this.handleSubmit}>{(isSubmitting) ? <Loader type={'button'} /> : 'Invite'}</button>
				</div>
			</div>
		)
	}
}

export default reduxForm({
	form: 'OrganizationMembersForm',
	fields,
	validate
})(OrganizationMembersForm)
