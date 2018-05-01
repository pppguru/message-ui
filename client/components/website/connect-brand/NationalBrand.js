import React, { Component } from 'react'
import Select from 'react-select'

export default class NationalBrand extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typeOfBrandValue: null,
      numberOfEmployeesValue: null
    }
    this.submit = this.submit.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleNumOfEmpChange = this.handleNumOfEmpChange.bind(this)
  }

  submit() {
    let brandData = {
      name: this.refs.name.value,
      type: this.state.typeOfBrandValue,
      usersRole: this.refs.companyRole.value,
      website: this.refs.website.value,
      numberOfEmployees: this.state.numberOfEmployeesValue
    }
    this.props.saveData(brandData)
  }

  handleTypeChange(val) {
    this.setState({
      typeOfBrandValue: val.value
    })
  }

  handleNumOfEmpChange(val) {
    this.setState({
      numberOfEmployeesValue: val.value
    })
  }

  render() {
    var typeOfBrand = [
      { "value": "type1", "label": "Automotive" },
      { "value": "type2", "label": "Consumer Packaged Goods" },
      { "value": "type3", "label": "Financial Services" },
      { "value": "type4", "label": "Mobile Carrier" },
      { "value": "type5", "label": "Movies" },
      { "value": "type6", "label": "Music" },
      { "value": "type7", "label": "Publisher" },
      { "value": "type8", "label": "Radio" },
      { "value": "type9", "label": "Sports" },
      { "value": "type10", "label": "Television" },
      { "value": "type11", "label": "Other" }
    ]

    var numberOfEmployees = [
      { "value": "1-10", "label": "1 - 10" },
      { "value": "11 - 50", "label": "11 - 50" },
      { "value": "51 - 100", "label": "51 - 100" },
      { "value": "101 - 250", "label": "101 - 250" },
      { "value": "250+", "label": "250+" }
    ]

    return (
      <div>
        <div className="form-row">
          <div className="single-input">
            <input className="full-width" type="text" ref="name" placeholder="Business Name"/>
            <span className="label">Business Name</span>
          </div>
        </div>
        <div className="form-row--justify">
          <div className="single-input--inline single-input--full">
            <Select
              name="typeOfBrandSelect"
              placeholder="Type of Brand"
              value={this.state.typeOfBrandValue}
              searchable={false}
              clearable={false}
              options={typeOfBrand}
              onChange={this.handleTypeChange}
            />
          </div>
          <div className="single-input--inline single-input--full">
            <input type="text" placeholder="Role at your company" required ref="companyRole" />
            <span className="label">Role at your company</span>
          </div>
        </div>
        <div className="form-row">
          <div className="single-input">
            <input className="full-width" type="text" placeholder="Official website" ref="website" />
            <span className="label">Official website</span>
          </div>
        </div>
        <div className="form-row">
          <div className="single-input">
            <Select
              name="numberOfEmployeesSelect"
              placeholder="Number of Employees"
              value={this.state.numberOfEmployeesValue}
              searchable={false}
              clearable={false}
              options={numberOfEmployees}
              onChange={this.handleNumOfEmpChange}
            />
          </div>
        </div>
      </div>
    )
  }
}