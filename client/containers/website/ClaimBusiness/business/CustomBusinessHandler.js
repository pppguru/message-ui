import React, { Component } from 'react'
import * as api from '../../../../utils/api'

// Import components
import CustomBusiness from '../../../../components/website/ClaimBusiness/business/CustomBusiness'

export default class CustomBusinessHandler extends Component {
  constructor () {
    super()
    this.state = {
      formValues: {
        name: '',
        website: '',
        street: '',
        country: '',
        city: '',
        region: '',
        zip: ''
      }
    }

    // Bind `this` to handlers
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCountryChange = this.handleCountryChange.bind(this)
  }

  static PropTypes = {
    switchBusinessType: React.PropTypes.func.isRequired,
    registerBusiness: React.PropTypes.func.isRequired,
    nextStep: React.PropTypes.func.isRequired,
    saveData: React.PropTypes.func.isRequired,
    loading: React.PropTypes.func.isRequired
  }

  handleChange ( event ) {
    // Handle form changes
    let currentChange = {}
    if (!event.target.name) return false
    currentChange[event.target.name] = event.target.value

    const newFormValues = Object.assign({}, this.state.formValues, currentChange)
    this.setState({ formValues: newFormValues })
  }

  handleSubmit ( event ) {
    // Handle form submission
    event.preventDefault()
    const { formValues, countrySelectValue } = this.state
    const { name, website, street, country, city, region, zip } = formValues
    const geocoder = new google.maps.Geocoder()
    const address = country + ', ' +
      region + ', ' +
      city + ', ' +
      street + ', ' +
      zip

    // Geocoder address validation
    this.props.loading(true)
    geocoder.geocode({ 'address': address }, (results, status) => {
      let longitude = null
      let latitude = null
      if (status == google.maps.GeocoderStatus.OK) {
        longitude = results[0].geometry.location.lng()
        latitude = results[0].geometry.location.lat()
      }

      if ( longitude === null || latitude === null ) {
        this.props.displayError("Please provide a valid address.")
      } else {
        this.props.saveData(null, {
          name,
          website,
          latitude,
          longitude,
          address: {
            street,
            city,
            country,
            region,
            zip
          }
        })
        this.props.nextStep()
        this.props.loading(false)
      }
    })
  }

  handleCountryChange ( val ) {
    // Handle country select change
    const newFormValues = Object.assign({}, this.state.formValues, {country: val.value})
    this.setState({ formValues: newFormValues })
  }

  render () {
    const { switchBusinessType } = this.props
    const { formValues } = this.state
    return (
      <CustomBusiness
        switchBusinessType={switchBusinessType}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleCountryChange={this.handleCountryChange}
        formValues={formValues}
      />
    )
  }
}