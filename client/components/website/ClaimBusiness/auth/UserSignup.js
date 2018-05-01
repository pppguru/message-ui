import React, { Component } from 'react'
import IntlTelInput from 'react-intl-tel-input'

export default class UserSignup extends Component {
  static PropTypes = {
    formValues: React.PropTypes.object.isRequired,
    handleChange: React.PropTypes.func.isRequired,
    createUser: React.PropTypes.func.isRequired,
    phoneNumberChange: React.PropTypes.func.isRequired,
    switchToLogin: React.PropTypes.func.isRequired
  }

  render () {
    const { formValues, handleChange, createUser, phoneNumberChange,
      loginUser, switchToLogin } = this.props
    return (
      <form
        name="personalInfo"
        ref="personalInfo"
        className="claim-your-business__form"
        onSubmit={createUser}
        onChange={handleChange} >
        <div className="row--flex">
          <div className="form-container">
            <div className="form-row--justify">
              <div className="single-input--inline single-input--full">
                <input
                  type="text"
                  placeholder="First name"
                  ref="firstName"
                  name="firstName"
                  required
                  value={formValues.firstName} />
                <span className="label">First name</span>
              </div>
              <div className="single-input--inline single-input--full">
                <input
                  type="text"
                  placeholder="Last name"
                  ref="lastName"
                  name="lastName"
                  required
                  value={formValues.lastName} />
                <span className="label">Last name</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row--flex">
          <div className="form-container">
            <div className="form-row--justify">
              <div className="single-input--inline single-input--full">
                <input
                  type="email"
                  placeholder="Email address"
                  ref="email"
                  name="email"
                  required
                  value={formValues.email} />
                <span className="label">Email address</span>
              </div>
              <div className="single-input--inline single-input--full">
                <IntlTelInput
                  defaultCountry={typeof window.countryCode !== 'undefined' ? window.countryCode : 'ca'}
                  css={['intl-tel-input single-input--full']}
                  onPhoneNumberChange={phoneNumberChange}
                  autoFormat={false}
                  ref="phoneNumber" />
                <span className="label">Phone number</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row--flex">
          <div className="form-container">
            <div className="form-row--justify">
              <div className="single-input--inline single-input--full">
                <input
                  type="password"
                  placeholder="Password"
                  ref="password"
                  name="password"
                  required
                  value={formValues.password} />
                <span className="label">Password</span>
              </div>
            </div>
          </div>
        </div>
        <div className="form-row claim-your-business__submit">
          <div className="text-block--center">
            <input type="submit" className="mbtn" value="Continue" />
          </div>
        </div>
        <div className="separator"></div>
        <div className="text-block--center">
          <p className="paragraph paragraph--beta">
            <a href="#" className="link" onClick={switchToLogin}>Click here to sign in</a> if you already have a MessageUs account.
          </p>
        </div>
      </form>
    )
  }
}