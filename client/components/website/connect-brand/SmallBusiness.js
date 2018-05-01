import React, { Component } from 'react'
import Select from 'react-select'
import vars from '../helpers/vars'

export default class SmallBusiness extends Component {
  constructor (props) {
    super(props)
    this.state = {
      typeOfBusinessValue: null,
      physicalLocationsValue: null,
      countryValue: null,
      locationInUs: true
    }
    this.submit = this.submit.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleCountryChange = this.handleCountryChange.bind(this)
    this.handleLocationsChange = this.handleLocationsChange.bind(this)
    this.changeUsLocation = this.changeUsLocation.bind(this)
  }

  changeUsLocation (value) {
    this.setState({locationInUs: value})
  }

  handleTypeChange (val) {
    this.setState({
      typeOfBusinessValue: val.value
    })
  }

  handleCountryChange (val) {
    this.setState({
      countryValue: val.value
    })
  }

  handleLocationsChange (val) {
    this.setState({
      physicalLocationsValue: val.value
    })
  }

  submit () {
    let brandData = {
      name: this.refs.name.value,
      type: this.state.typeOfBusinessValue,
      physicalLocations: { 'value': this.state.physicalLocationsValue },
      country: this.state.countryValue,
      website: this.refs.website.value,
      street: this.refs.street.value,
      city: this.refs.city.value,
      state: this.refs.state.value
    }
    this.props.saveData(brandData)
  }

  render () {
    var typeOfBusiness = [
      { 'value': 'type1', 'label': 'Arts & Entertainment' },
      { 'value': 'type2', 'label': 'Colleges & Universities' },
      { 'value': 'type3', 'label': 'Convention Centers' },
      { 'value': 'type4', 'label': 'Government Buildings' },
      { 'value': 'type5', 'label': 'Gyms or Fitness Centers' },
      { 'value': 'type6', 'label': 'Hotel & Hospitality' },
      { 'value': 'type7', 'label': 'Medical Centers' },
      { 'value': 'type8', 'label': 'Movie Theaters' },
      { 'value': 'type9', 'label': 'Museums' },
      { 'value': 'type10', 'label': 'Music and Performing Arts Veneus' },
      { 'value': 'type11', 'label': 'Nightlife Spots' },
      { 'value': 'type12', 'label': 'Professional & Other Places' },
      { 'value': 'type13', 'label': 'QSR' },
      { 'value': 'type14', 'label': 'Restaurant' },
      { 'value': 'type15', 'label': 'Retail Stores' },
      { 'value': 'type16', 'label': 'Stadium & Event Spaces' },
      { 'value': 'type17', 'label': 'Travel & Transport' },
      { 'value': 'type18', 'label': 'Other' }
    ]

    var physicalLocations = [
      { 'value': '1', 'label': '1' },
      { 'value': '2-5', 'label': '2 - 5' },
      { 'value': '6-10', 'label': '6 - 10' },
      { 'value': '11+', 'label': '11+' }
    ]

    var countries = vars.states
    return (
    <div>
      <div className="form-row">
        <div className="single-input">
          <input
            className="full-width"
            type="text"
            placeholder="Business Name"
            ref="name"
            name="name" />
          <span className="label">Business Name</span>
        </div>
      </div>
      <div className="form-row--justify">
        <div className="single-input--inline single-input--full">
          <Select
            name="typeOfBusinessSelect"
            placeholder="Type of Business"
            value={this.state.typeOfBusinessValue}
            searchable={false}
            clearable={false}
            options={typeOfBusiness}
            onChange={this.handleTypeChange} />
        </div>
        <div className="single-input--inline single-input--full">
          <Select
            name="physicalLocationsSelect"
            placeholder="Physical locations"
            value={this.state.physicalLocationsValue}
            searchable={false}
            clearable={false}
            options={physicalLocations}
            onChange={this.handleLocationsChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="single-input">
          <Select
            name="countrySelect"
            placeholder="Country"
            value={this.state.countryValue}
            searchable={false}
            clearable={false}
            options={countries}
            onChange={this.handleCountryChange} />
        </div>
      </div>
      <div className="form-row--justify">
        <p className="paragraph paragraph--beta">
          Do you have locations in the US?
        </p>
        <div className="single-input--inline">
          <input
            type="radio"
            id="radio5"
            name="us-geo"
            defaultChecked />
          <label htmlFor="radio5" onClick={this.changeUsLocation.bind(this, true)}>
            Yes
          </label>
        </div>
        <div className="single-input--inline">
          <input type="radio" id="radio6" name="us-geo" />
          <label htmlFor="radio6" onClick={this.changeUsLocation.bind(this, true)}>
            No
          </label>
        </div>
      </div>
      <div className="form-row">
        <div className="single-input">
          <input
            className="full-width"
            type="text"
            placeholder="Official website"
            ref="website"
            name="website" />
          <span className="label">Official website</span>
        </div>
      </div>
      <div className="form-row">
        <div className="single-input">
          <input
            className="full-width"
            type="text"
            placeholder="Mailing address"
            ref="street"
            name="street" />
          <span className="label">Mailing address</span>
        </div>
      </div>
      <div className="form-row--justify">
        <div className="single-input--inline single-input--full">
          <input
            type="text"
            placeholder="City"
            ref="city"
            name="city" />
          <span className="label">City</span>
        </div>
        <div className="single-input--inline single-input--full">
          <input
            type="text"
            placeholder="State or province"
            ref="state"
            name="state" />
          <span className="label">State or province</span>
        </div>
      </div>
    </div>
    )
  }
}
