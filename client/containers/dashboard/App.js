import React, { Component } from 'react'
import Analytics from '../../utils/analytics'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.analytics = new Analytics()
    this.analytics.init()
  }

  render() {
    return (
      <div className="app">
      	{this.props.children}
      </div>
    )
  }
}
