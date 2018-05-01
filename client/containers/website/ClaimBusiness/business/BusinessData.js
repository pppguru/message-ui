import React, { Component } from 'react'
import * as api from '../../../../utils/api'

// Import containers
import FactualHandler from '../../../../containers/website/ClaimBusiness/business/FactualHandler'
import CustomBusinessHandler from '../../../../containers/website/ClaimBusiness/business/CustomBusinessHandler'

// Import components
import AlreadyClaimed from '../../../../components/website/ClaimBusiness/business/AlreadyClaimed'
import Steps from '../../../../components/website/ClaimBusiness/steps/Steps'

export default class BusinessData extends Component {
  constructor () {
    super()
    this.state = {
      useCustomBusiness: false
    }

    // Bind `this` to handlers
    this.useCustomBusiness = this.useCustomBusiness.bind(this)
  }

  static PropTypes = {
    nextStep: React.PropTypes.func.isRequired,
    saveData: React.PropTypes.func.isRequired,
    currentStep: React.PropTypes.number.isRequired,
    displayError: React.PropTypes.func.isRequired,
    loading: React.PropTypes.func.isRequired,
    userClaimedBusiness: React.PropTypes.bool.isRequired,
    userData: React.PropTypes.object,
    businessData: React.PropTypes.object
  }

  componentDidMount () {
    this._isMounted = true
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  useCustomBusiness (useCustom) {
    // Trigger between Factual search and custom business
    this.setState({ useCustomBusiness: useCustom })
  }

  render () {
    const { nextStep, saveData, userClaimedBusiness, userData, businessData, currentStep, displayError, loading } = this.props
    const { useCustomBusiness } = this.state

    // Break the flow if user has already registered a business
    if (userClaimedBusiness) {
      return (
        <div>
          <Steps
              showBackButton={false}
              active={currentStep}
            />
          <AlreadyClaimed
            userEmail={userData.email}
            businessData={businessData}
          />
        </div>
      )
    }

    // Continue to business registration
    if (!useCustomBusiness) {
      return (
        <div>
          <Steps
            showBackButton={false}
            active={currentStep}
          />
          <FactualHandler
            switchBusinessType={()=>this.useCustomBusiness(true)}
            nextStep={nextStep}
            saveData={saveData}
          />
        </div>
      )
    } else {
      return (
        <div>
          <Steps
            showBackButton={true}
            goBack={()=>this.useCustomBusiness(false)}
            active={currentStep}
          />
          <CustomBusinessHandler
            displayError={displayError}
            nextStep={nextStep}
            switchBusinessType={()=>this.useCustomBusiness(false)}
            saveData={saveData}
            loading={loading}
          />
        </div>
      )
    }
  }
}