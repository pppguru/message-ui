import React, { Component } from 'react'
import * as api from '../../utils/api'

// Import containers
import UserAuth from './ClaimBusiness/auth/UserAuth'
import BusinessData from './ClaimBusiness/business/BusinessData'
import Verification from './ClaimBusiness/verify/Verification'

export default class ClaimBusiness extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentStep: 1,
      isLoading: false,
      branchLinked: false,
      userClaimedBusiness: false,
      accessToken: null,
      organizationId: null,
      errorMessage: null,
      businessId: null,
      businessData: {
        factualId: '',
        name: '',
        website: null,
        address: {
          street: null,
          city: null,
          state: null,
          zip: null,
          country: null
        }
      },
      userData: {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null
      }
    }

    // Bind `this` to handlers
    this.saveData = this.saveData.bind(this)
    this.saveToken = this.saveToken.bind(this)
    this.displayError = this.displayError.bind(this)
    this.updateBusinessId = this.updateBusinessId.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.loading = this.loading.bind(this)
    this.checkUserClaimed = this.checkUserClaimed.bind(this)
  }

  componentDidMount () {
    // Check if the website is deep linked with Branch.io on mount
    this.checkBranchLink()
  }

  displayError (message) {
    // Display an error message
    this.setState({ errorMessage: message })
  }

  saveToken (token) {
    // Set session's access token
    this.setState({ accessToken: token })
  }

  checkBranchLink () {
    // Check if user visited the website from Branch.io deep link
    (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setIdentity track validateCode".split(" "), 0);
    branch.init('key_live_jedH847uR9nk3BH5xYaiKhcmqycUtY84', (err, data) => {
      let organizationId = data.data_parsed.organizationId

      // Retrieve business data if the business id is provided 
      if (organizationId) {
        api.getClaimedBusinessData(organizationId)
          .then(res => {
            this.setState({
              organizationId: organizationId,
              branchLinked: true
            })
            this.saveData( null, res.data )
          })
          .catch((error) => {
            console.log('Fetch organization data error', error)
          })
      }
    })
  }

  updateBusinessId (id) {
    // Update businessId after it was registered
    this.setState({ businessId: id })
  }

  checkUserClaimed () {
    // Check if user has already claimed a business
    api.getUserClaimed(this.state.accessToken)
      .then(res => {
        if (res) {
          // Retrieve data for the business attached to user
          api.getClaimedBusinessData(res)
            .then(res => {
              this.loading(false)
              this.saveData(null, res.data)
              this.setState({ userClaimedBusiness: true })
              this.nextStep()
            })
            .catch(err => {
              console.log('Organization info retrieval error...', err.stack)
            })
        } else {
          // User is clear to continue claiming a business
          this.loading(false)
          this.nextStep()
        }
      })
      .catch(err => {
        console.log('Retrieving user info failed...', err)
      })
  }

  saveData (userData = {}, businessData = {}) {
    // Save values to state
    typeof userData !== 'object' && ( userData = {} )
    typeof businessData !== 'object' && ( businessData = {} )

    const updatedUserData = Object.assign({}, this.state.userData, userData)
    const updatedBusinessData = Object.assign({}, this.state.businessData, businessData)

    this.setState({ userData: updatedUserData, businessData: updatedBusinessData })
  }

  nextStep (step) {
    // Trigger the next step
    if ( this.state.branchLinked && !this.state.userClaimedBusiness ) {
      step = 3
    } else {
      step = typeof step === "number" ? step : this.state.currentStep + 1
    }
    this.setState({ currentStep: step })
    this.displayError(null)
  }

  previousStep () {
    // Let user go one step back
    this.setState({ currentStep: this.state.currentStep - 1 })
    this.displayError(null)
  }

  finish () {
    // Relocate the user to the dashboard
    window.location = './app'
  }

  loading (state) {
    // Trigger loading spinner
    this.setState({ isLoading: state })
  }

  render () {
    const { currentStep, businessData, userData, userClaimedBusiness,
      accessToken, businessId, branchLinked } = this.state
    const currentComponent = (() => {
      switch (this.state.currentStep) {
        case 1:
          return <UserAuth
            nextStep={this.nextStep}
            saveData={this.saveData}
            saveToken={this.saveToken}
            displayError={this.displayError}
            checkUserClaimed={this.checkUserClaimed}
            loading={this.loading}
            currentStep={currentStep}
          />
          break

        case 2:
          return <BusinessData
            nextStep={this.nextStep}
            saveData={this.saveData}
            displayError={this.displayError}
            currentStep={currentStep}
            businessData={businessData}
            userData={userData}
            userClaimedBusiness={userClaimedBusiness}
            loading={this.loading}
          />
          break

        case 3:
          return <Verification
            finish={this.finish}
            displayError={this.displayError}
            updateBusinessId={this.updateBusinessId}
            previousStep={this.previousStep}
            currentStep={currentStep}
            businessData={businessData}
            accessToken={accessToken}
            businessId={businessId}
            loading={this.loading}
            branchLinked={branchLinked}
          />
          break
      }
    })()

    return (
      <div>
        { this.state.errorMessage && <span className="error-message">{this.state.errorMessage}</span> }
        { this.state.isLoading && <div className="loading-spinner absolute"></div> }
        {currentComponent}
      </div>
    )
  }
}
