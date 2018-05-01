import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
export const fields = [ 'id', 'email', 'phone' ]

export const validate = values => {
  const errors = {}

  if (!values.email && !values.phone) {
    errors.phone = 'Required'
    errors.email = 'Required'
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) && !values.phone) {
    errors.email = 'Invalid email address'
  }
  
  return errors
}

class InviteRow extends Component {
  render() {
    const {
      fields: { email, phone },
      handleSubmit,
      pristine,
      resetForm,
      submitting,
      valid,
      dirty
    } = this.props

    if (valid && dirty) {
      this.props.recalculateRows()
    }

    return (
      <form className="form--invite-employees">
        <div className={(email.touched && email.error) ? 'form__group form__group--half form__group--error' : 'form__group form__group--half'}>
          <label>Email</label>
          <input type="email" className="input input--text" placeholder="Email" {...email} />
        </div>
        <div className="text-or">or</div>
        <div className={(phone.touched && phone.error) ? 'form__group form__group--half form__group--error' : 'form__group form__group--half'}>
          <label>Phone</label>
          <input type="text" className="input input--text" placeholder="Phone number" {...phone} />
        </div>
      </form>
    )
  }
}

InviteRow.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}


export default reduxForm({
  form: 'inviteMembers',
  fields,
  validate
})(InviteRow)
