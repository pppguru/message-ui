import React, { Component } from 'react'

export default class VerificationSummary extends Component {
  static PropTypes = {
    name: React.PropTypes.string.isRequired,
    address: React.PropTypes.object,
    website: React.PropTypes.string,
    phone: React.PropTypes.string,
    continueVerification: React.PropTypes.func.isRequired
  }

  render () {
    const { name, address, website, phone, continueVerification } = this.props
    return (
      <div>
        <div className="claim-your-business__card">
          <div className="claim-your-business__card-container">
            <div className="row claim-your-business__title">
              <div className="col-xs-12">
                <span className="claim-your-business__label">Business Name</span>
                <p className="claim-your-business__data-text claim-your-business__business-title">
                  {name}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-7">
                <div className="field">
                  <span className="claim-your-business__label">Street</span>
                  <p className="claim-your-business__data-text">
                    {address.street || '-'}
                  </p>
                </div>
                <div className="field">
                  <span className="claim-your-business__label">City</span>
                  <p className="claim-your-business__data-text">
                    {address.city || '-'}
                  </p>
                </div>
                <div className="field">
                  <span className="claim-your-business__label">Website</span>
                  <p className="claim-your-business__data-text">
                    {website || '-'}
                  </p>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="field">
                  <span className="claim-your-business__label">Zip code</span>
                  <p className="claim-your-business__data-text">
                    {address.zip || '-'}
                  </p>
                </div>
                <div className="field">
                  <span className="claim-your-business__label">Country</span>
                  <p className="claim-your-business__data-text">
                    {address.country || '-'}
                  </p>
                </div>
              </div>
            </div>
            <div className="separator"></div>
            <form onSubmit={continueVerification}>
              <div className="claim-your-business__verification">
                <div className="text-block--center">
                  <p className="paragraph paragraph--delta">
                    You will be called at this number and supplied with a 6-digit verification code
                  </p>
                </div>
                <input
                  className="phoneNumber"
                  type="text"
                  ref="phoneNumber"
                  placeholder="Phone Number"
                  value={phone}
                  readOnly />
                <div className="text-block--center">
                  <input type="submit" className="mbtn" value="Call me" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}