import React, { Component } from 'react'

export default class VerifyBusiness extends Component {
  static PropTypes = {
    name: React.PropTypes.string.isRequired,
    userCode: React.PropTypes.string.isRequired,
    verifyEntry: React.PropTypes.func.isRequired,
    continueVerification: React.PropTypes.func.isRequired,
    handleCodeChange: React.PropTypes.func.isRequired
  }

  render () {
    const { name, verifyEntry, userCode, handleCodeChange, continueVerification } = this.props
    return (
      <div>
        <div className="row--flex claim-your-business__pick-business">
          <div className="form-container">
            <div className="form-row--justify">
              <div className="single-input--full autosuggest-container">
                <input type="text" disabled value={name} />
                <span className="label visible">Business name</span>
              </div>
            </div>
          </div>
        </div>
        <div className="claim-your-business__card">
          <div className="claim-your-business__card-container">
            <div className="text-block--center">
              <p className="paragraph--delta">
                Input the 6-digit code we supplied you with during the call.
              </p>
            </div>
            <form onSubmit={verifyEntry}>
              <div className="claim-your-business__code-check">
                <div className="single-input">
                  <input
                    type="text"
                    placeholder="6-Digit code"
                    ref="checkCode"
                    style={{textAlign: 'center'}}
                    required
                    value={userCode}
                    pattern=".{6}"
                    maxLength="6"
                    onChange={handleCodeChange} />
                  <span className="label">6-Digit code</span>
                </div>
                <div className="text-block--center">
                  <a href="#" className="mbtn" onClick={verifyEntry}>Submit code</a>
                </div>
              </div>
            </form>
            <div className="text-block--center">
              <p className="paragraph paragraph--beta">
                Need us to call you again?
              </p>
              <a className="link link--purple" href="#" onClick={continueVerification}>Click here.</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}