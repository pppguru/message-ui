import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className="sk-double-bounce">
        <div className="sk-child sk-double-bounce1"></div>
        <div className="sk-child sk-double-bounce2"></div>
      </div>
    )
  }
}