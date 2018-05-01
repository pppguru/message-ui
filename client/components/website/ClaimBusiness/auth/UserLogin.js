import React, { Component } from 'react'

export default class UserLogin extends Component {
  static PropTypes = {
    formValues: React.PropTypes.object.isRequired,
    loginUser: React.PropTypes.func.isRequired,
    handleChange: React.PropTypes.func.isRequired,
    switchToSignup: React.PropTypes.func.isRequired,
  }

  render () {
    const { formValues, loginUser, handleChange, switchToSignup } = this.props
    return (
      <div>
        <div className="text-block--center extra-padded--top">
          <p className="wtitle--beta mobile-white">
            Log in to your account
          </p>
        </div>
        <div>
          <form
            name="claimBusinessLogin"
            ref="login"
            onSubmit={loginUser}
            onChange={handleChange}>
            <div className="row--flex">
              <div className="form-container">
                <div className="form-row">
                  <div className="single-input single-input--full">
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      name="email"
                      ref="email"
                      value={formValues.email} />
                    <span className="label">Email address</span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="single-input single-input--full">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      name="password"
                      ref="password"
                      value={formValues.password} />
                    <span className="label">Password</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row claim-your-business__submit">
              <div className="text-block--center">
                <input type="submit" className="mbtn" value="Log in" />
              </div>
            </div>
          </form>
        </div>
        <div className="separator"></div>
        <div>
          <div className="text-block--center">
            <p className="paragraph paragraph--beta">
              If you don't have an account yet, <a href="#" className="link"
              onClick={switchToSignup}>click here to Sign Up</a>.
            </p>
          </div>
        </div>
      </div>
    )
  }
}