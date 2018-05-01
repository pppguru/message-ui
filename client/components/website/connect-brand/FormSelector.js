import React, { Component } from 'react'

export default class FormSelector extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="form-row">
        <div className="single-input--inline single-input--space-right">
          <input type="radio" id="radio3" name="business" onClick={this.props.action.bind(this, false)} ref="smallbusiness" defaultChecked value="true" />
          <label htmlFor="radio3">Small Business</label>
        </div>
        <div className="single-input--inline single-input--space-right">
          <input type="radio" id="radio4" name="business" onClick={this.props.action.bind(this, true)} ref="largebusiness" value="false" />
          <label htmlFor="radio4">National Chain/Brand</label>
        </div>
      </div>
    )
  }
}