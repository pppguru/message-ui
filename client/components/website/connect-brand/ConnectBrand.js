import React, { Component } from 'react'
import ConnectBrandUser from './ConnectBrandUser'
import FormSelector from './FormSelector'
import NationalBrand from './NationalBrand'
import SmallBusiness from './SmallBusiness'
import SideHint from './SideHint'
import * as api from '../../../utils/api'

var formData = {}

export default class ConnectBrand extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      nationalForm: 0,
      brandIsConnected: false,
      errorMessage: ''
    }
    this.switchForm = this.switchForm.bind(this)
    this.submit = this.submit.bind(this)
    this.saveData = this.saveData.bind(this)
  }

  switchForm( value ) {
    this.setState({
      nationalForm: value
    })
  }

  saveData(data) {
    formData = Object.assign({}, formData, data)
  }

  submit(event) {
    event.preventDefault()
    this.refs.activeForm.submit()
    let formUser = this.refs.formUser
    let data = {
      firstName: formUser.refs.firstName.value,
      lastName: formUser.refs.lastName.value,
      email: formUser.refs.email.value,
      phone: formUser.refs.phone.value,
      preferedContactMethod: formUser.state.contactMethod
    }
    formData = Object.assign({}, formData, data)

    api.connectBrand(formData)
      .then(res => {
        this.setState({brandIsConnected: true})
      })
      .catch(err => {
        this.setState({errorMessage: err.data.message})
      })
  }

  render() {

    const errorMessage = (this.state.errorMessage) ?
      <div className="error-message--inline">{ this.state.errorMessage }</div>
      : null;

    if (!this.state.brandIsConnected) {
      return(
        <form name="userInfo" onSubmit={this.submit}>
          <div className="row--flex form">
            <SideHint number="1" text="Tell us about yourself" />
            <ConnectBrandUser ref="formUser" />
          </div>
          <div className="row--flex form">
            <SideHint number="2" text="Tell us about your business" />
            <div className="col-sm-12 col-md-7 col-xl-8">
              <div className="form-container">
                <FormSelector action={this.switchForm} />
                { this.state.nationalForm ? <NationalBrand ref="activeForm" saveData={this.saveData} /> : <SmallBusiness ref="activeForm" saveData={this.saveData} /> }
                <div className="form-row--center">
                  <div className="text-block--center">
                    <a href="#" className="mbtn button-submit" onClick={this.submit}>Submit info</a>
                    {errorMessage}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" style={{'display':'none'}}></button>
        </form>
      )
    } else {
      return (
        <div className="text-block--center">
          <p className="paragraph paragraph--beta">
            Your brand has been connected successfully!
          </p>
        </div>
      )
    }
  }
}