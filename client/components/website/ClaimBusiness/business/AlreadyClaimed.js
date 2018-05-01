import React, { Component } from 'react'

export default class AlreadyClaimed extends Component {
  static PropTypes = {
    userEmail: React.PropTypes.string.isRequired,
    businessData: React.PropTypes.object.isRequired
  }

  render () {
    const { userEmail } = this.props
    const { name, address, website } = this.props.businessData
    return (
      <div>
        <div className="col-md-8 col-md-push-2 text-block text-block--center">
          <p className="paragraph paragraph--beta margin-bottom--20">
            You have already claimed a business with the email <strong>{userEmail}</strong>
          </p>
        </div>
        <div className="claim-your-business__card claim-your-business__card--forbidden">
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
          </div>
        </div>
        <div className="text-block--center">
          <p className="paragraph paragraph--beta">
            All good though.
          </p>
          <p className="paragraph paragraph--beta">
            You can <a href="/app" className="link">manage your business here</a>.
          </p>
        </div>
      </div>
    )
  }
}