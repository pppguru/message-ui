import React, { Component } from 'react'

export default class Steps extends Component {
  static PropTypes = {
    showBackButton: React.PropTypes.bool.isRequired,
    active: React.PropTypes.number.isRequired,
    goBack: React.PropTypes.func
  }

  render () {
    const { showBackButton, goBack, active } = this.props
    return (
      <div className="claim-steps">
        { showBackButton 
          ? <a href="#" className="claim-steps__single-step-link link-back" onClick={goBack} >
              <span className="claim-steps__number"></span>
              <p className="claim-steps__title">
                Back
              </p>
            </a>
          : <div className={ active == 1 ? "claim-steps__single-step-active" : "claim-steps__single-step-finished" }>
              <span className="claim-steps__number">
                1
              </span>
              <p className="claim-steps__title">
                Register an account
              </p>
            </div>
        }
        <div className={ active >= 2 ? "claim-steps__single-step-active" : "claim-steps__single-step" }>
          <span className="claim-steps__number">
            2
          </span>
          <p className="claim-steps__title">
            Claim your business
          </p>
        </div>
      </div>
    )
  }
}