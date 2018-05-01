import React, { Component } from 'react'
import * as api from '../../../../utils/api'

// Import components
import UserSignup from '../../../../components/website/ClaimBusiness/auth/UserSignup'
import UserLogin from '../../../../components/website/ClaimBusiness/auth/UserLogin'
import Steps from '../../../../components/website/ClaimBusiness/steps/Steps'

export default class UserAuth extends Component {
  constructor () {
    super()
    this.state = {
      loginExisting: false,
      phoneNumberValid: false,
      formValues: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: ''
      }
    }

    // Bind `this` to handlers
    this.createUser = this.createUser.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.switchToLogin = this.switchToLogin.bind(this)
    this.switchToSignup = this.switchToSignup.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.phoneNumberChange = this.phoneNumberChange.bind(this)
  }

  static PropTypes = {
    nextStep: React.PropTypes.func.isRequired,
    saveToken: React.PropTypes.func.isRequired,
    displayError: React.PropTypes.func.isRequired,
    isLoading: React.PropTypes.func.isRequired,
    currentStep: React.PropTypes.number.isRequired,
    checkUserClaimed: React.PropTypes.func.isRequired,
  }

  componentDidMount () {
    this._isMounted = true
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  handleChange ( event ) {
    // Handle form changes
    let currentChange = {}
    if (!event.target.name) return false
    currentChange[event.target.name] = event.target.value

    const newFormValues = Object.assign({}, this.state.formValues, currentChange)
    this.setState({ formValues: newFormValues })
  }

  phoneNumberChange (valid, b, c, number) {
    // Handle phone number input change
    const newFormValues = Object.assign({}, this.state.formValues, { phone: number })
    this.setState({ formValues: newFormValues, phoneNumberValid: valid })
  }

  createUser (event) {
    // Send a create user request with provided data
    event.preventDefault()

    if (!this.state.phoneNumberValid) {
      this.props.displayError('Please enter a valid phone number.')
      return false
    }

    this.props.loading(true)
    api.createUser(this.state.formValues)
      .then(res => {
        this.props.loading(false)
        if (!this._isMounted) return false
        this.props.saveToken(res.data.accessToken)
        this.props.saveData(res.data.profile)
        this.props.nextStep()
      })
      .catch(err => {
        console.log(err)
        this.props.loading(false)
        this.props.displayError(err.data.message)
      })
  }

  loginUser (event) {
    // Send login request with provided data
    event.preventDefault()
    
    this.props.loading(true)
    api.loginUser({
      username: this.state.formValues.email,
      password: this.state.formValues.password,
      grantType: 'password'
    })
      .then(res => {
        if (!this._isMounted) return false
        const accessToken = res.data.accessToken
        this.props.saveToken(accessToken)
        this.props.saveData(res.data.profile)
        this.props.checkUserClaimed()
      })
      .catch(res => {
        this.props.loading(false)
        this.props.displayError('Invalid username and/or password.')
      })
  }

  resetForm () {
    // Clear form fields
    const newFormValues = {}
    for (let prop in this.stateformValues) {
      newFormValues[prop] = ''
    }
    this.setState({ formValues: newFormValues })
  }

  switchToLogin () {
    // Switch signup -> login forms
    this.resetForm()
    this.setState({ loginExisting: true })
  }

  switchToSignup () {
    // Switch login -> signup forms
    this.resetForm()
    this.setState({ loginExisting: false })
  }

  render () {
    const { loginExisting, formValues } = this.state
    const { currentStep } = this.props
    
    if (loginExisting) {
      return (
        <div>
          <UserLogin
            formValues={formValues}
            loginUser={this.loginUser}
            switchToSignup={this.switchToSignup}
            handleChange={this.handleChange}
          />
        </div>
      )
    } else {
      return (
        <div>
          <Steps
            formValues={formValues}
            showBackButton={false}
            active={currentStep}
          />
          <UserSignup
            formValues={formValues}
            createUser={this.createUser}
            switchToLogin={this.switchToLogin}
            handleChange={this.handleChange}
            phoneNumberChange={this.phoneNumberChange}
          />
        </div>
      )
    }
  }
}