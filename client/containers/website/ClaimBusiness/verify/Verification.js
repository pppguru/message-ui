import React, { Component } from 'react'
import * as api from '../../../../utils/api'

// Import components
import VerificationSummary from '../../../../components/website/ClaimBusiness/verify/VerificationSummary'
import VerifyBusiness from '../../../../components/website/ClaimBusiness/verify/VerifyBusiness'
import Steps from '../../../../components/website/ClaimBusiness/steps/Steps'

export default class Verification extends Component {
  constructor () {
    super()
    this.state = {
      userProceeded: false,
      userCode: '',
      retrievedPhone: null
    }

    // Bind `this` to handlers
    this.continueVerification = this.continueVerification.bind(this)
    this.verifyEntry = this.verifyEntry.bind(this)
    this.handleCodeChange = this.handleCodeChange.bind(this)
    this.retrievePhone = this.retrievePhone.bind(this)
  }

  static PropTypes = {
    finish: React.PropTypes.func.isRequired,
    previousStep: React.PropTypes.func.isRequired,
    currentStep: React.PropTypes.number.isRequired,
    businessData: React.PropTypes.object.isRequired,
    accessToken: React.PropTypes.string.isRequired,
    businessId: React.PropTypes.string.isRequired,
    branchLinked: React.PropTypes.bool.isRequired,
    updateBusinessId: React.PropTypes.func.isRequired,
    displayError: React.PropTypes.func.isRequired
  }

  componentDidMount () {
    this._isMounted = true
    // Get phone number to be displayed
    this.retrievePhone()
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  retrievePhone () {
    // Retrieve phone number attached to business from database
    api.getUserPhone(this.props.accessToken, this.props.businessData.factualId)
      .then(resPhone => {
        this.setState({ retrievedPhone: resPhone })
      })
      .catch(err => {
        console.log(err)
    })
  }

  continueVerification ( event ) {
    // Let user proceed
    const { accessToken, businessData } = this.props
    const data = businessData.factualId
      ? { factualId: businessData.factualId }
      : {
        name: businessData.name,
        phone: this.state.retrievedPhone,
        website: businessData.website,
        latitude: businessData.latitude,
        longitude: businessData.longitude,
        address: businessData.address
      }

    if ( typeof event !== 'undefined' ) event.preventDefault()

    this.setState({ userProceeded: true })
    this.props.loading(true)
    api.claimYourBusiness(data, accessToken)
      .then(res => {
        this.props.loading(false)
        if (!this._isMounted) return false
        this.props.updateBusinessId( res.data.id )
        this.setState({ userProceeded: true })
      })
      .catch(err => {
        this.props.loading(false)
        console.log(err)
      })
  }

  handleCodeChange ( event ) {
    // Handle verification input change
    const savedValue = event.target.value.replace(/\D/g, '')
    this.setState({ userCode: savedValue })
  }

  verifyEntry ( event ) {
    // Verify user provided code
    if ( typeof event !== 'undefined' ) event.preventDefault()
      
    if ( this.state.userCode.length != 6 ) {
      this.props.displayError('The code must consist of 6 numbers.')
      return false
    }

    this.props.loading(true)
    api.verifyBusiness(this.props.businessId, this.state.userCode, this.props.accessToken)
      .then(res => {
        this.props.loading(false)
        if (!this._isMounted) return false
        this.props.finish()
      })
      .catch(err => {
        this.props.loading(false)
        this.props.displayError('The code you entered appears to be invalid.')
      })
  }

  render () {
    const { userProceeded, userCode, retrievedPhone } = this.state
    const { previousStep, businessData, currentStep, finish, branchLinked } = this.props

    const steps = <Steps
        showBackButton={!branchLinked}
        active={currentStep}
        goBack={previousStep}
      />

    if (!userProceeded) {
      return (
        <div>
          {steps}
          <VerificationSummary
            name={businessData.name}
            address={businessData.address}
            website={businessData.website}
            phone={retrievedPhone}
            continueVerification={this.continueVerification}
          />
        </div>
      )
    } else {
      return (
        <div>
          {steps}
          <VerifyBusiness
            userCode={userCode}
            name={businessData.name}
            verifyEntry={this.verifyEntry}
            handleCodeChange={this.handleCodeChange}
            continueVerification={this.continueVerification}
          />
        </div>
      )
    }
  }
}