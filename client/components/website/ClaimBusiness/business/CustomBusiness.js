import React, { Component } from 'react'
import Select from 'react-select'

// Import country list
import vars from '../../helpers/vars'

export default class CustomBusiness extends Component {
  constructor () {
    super()
    // Bind `this` to handler
    this.handleCountryChange = this.handleCountryChange.bind(this)
  }

  static PropTypes = {
    handleChange: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    handleCountryChange: React.PropTypes.func.isRequired,
    formValues: React.PropTypes.object.isRequired
  }

  handleCountryChange (change) {
    // Pop label before taking real action
    this.refs.countryLabel.classList.add('visible')
    this.props.handleCountryChange(change)
  }

  render () {
    const { handleChange, handleSubmit, handleCountryChange, formValues } = this.props
    return (
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-row">
          <div className="single-input">
            <input
              className="full-width"
              pattern=".{2,}"
              type="text"
              placeholder="Business Name"
              ref="name"
              name="name"
              value={formValues.name}
              required />
            <span className="label">Business Name</span>
          </div>
        </div>
        <div className="form-row">
          <div className="single-input">
            <input
              className="full-width"
              type="text"
              placeholder="Official website"
              ref="website"
              name="website"
              value={formValues.website}
              pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$" />
            <span className="label">Official website</span>
          </div>
        </div>
        <div className="form-row">
          <div className="single-input">
            <input
              className="full-width"
              type="text"
              pattern=".{5,}"
              placeholder="Mailing address"
              ref="street"
              name="street"
              value={formValues.street}
              required />
            <span className="label">Mailing address</span>
          </div>
        </div>
        <div className="form-row--justify">
          <div className="single-input--inline single-input--full">

            <Select
              name="country"
              placeholder="Country"
              value={formValues.country}
              searchable={true}
              openOnFocus={true}
              clearable={false}
              options={vars.states}
              onChange={this.handleCountryChange}
            />
            <span className="label" ref="countryLabel">Country</span>
          </div>
          <div className="single-input--inline single-input--full">
            <input
              type="text"
              placeholder="City"
              pattern=".{2,}"
              ref="city"
              name="city"
              required
              value={formValues.city} />
            <span className="label">City</span>
          </div>
        </div>
        <div className="form-row--justify">
          <div className="single-input--inline single-input--full">
            <input
              type="text"
              placeholder="State or province"
              ref="region"
              name="region"
              value={formValues.region} />
            <span className="label">State or province</span>
          </div>
          <div className="single-input--inline single-input--full">
            <input
              type="text"
              pattern="\w{1,9}"
              placeholder="ZIP"
              ref="zip"
              name="zip"
              required
              value={formValues.zip} />
            <span className="label">ZIP</span>
          </div>
        </div>
        <div className="form-row claim-your-business__submit">
          <div className="text-block--center">
            <input type="submit" className="mbtn" value="Continue" />
          </div>
        </div>
      </form>
    )
  }
}