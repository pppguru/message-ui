import React, { Component } from 'react'
import Select from 'react-select'

export default class ConnectBrandUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactMethod: null
    }
    this.updateContactMethod = this.updateContactMethod.bind(this)
  }

  updateContactMethod(newMethod) {
    this.setState({contactMethod: newMethod})
  }

  render() {
    return (
      <div className="col-sm-12 col-md-7 col-xl-8">
        <div className="form-container">
          <div className="form-row--justify">
            <div className="single-input--inline single-input--full">
              <input type="text" placeholder="First name" required ref="firstName" />
              <span className="label">First name</span>
            </div>
            <div className="single-input--inline single-input--full">
              <input type="text" placeholder="Last name" required ref="lastName" />
              <span className="label">Last name</span>
            </div>
          </div>
          <div className="form-row--justify">
            <div className="single-input--inline single-input--full">
              <input type="email" placeholder="Email Address" required ref="email" />
              <span className="label">Email Address</span>
            </div>
            <div className="single-input--inline single-input--full">
              <input type="text" placeholder="Phone Number" required ref="phone" />
              <span className="label">Phone Number</span>
            </div>
          </div>
          <div className="form-row--justify">
            <p className="paragraph paragraph--beta">Preferred method of contact:</p>
            <div className="single-input--inline">
              <input type="radio" id="radio1" name="contact" />
              <label htmlFor="radio1" onClick={this.updateContactMethod.bind(this,"email")}>Email</label>
            </div>
            <div className="single-input--inline">
              <input type="radio" id="radio2" name="contact" />
              <label htmlFor="radio2" onClick={this.updateContactMethod.bind(this,"phone")}>Phone</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/*
        
          
          
        
*/