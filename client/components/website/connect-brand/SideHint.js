import React, { Component } from 'react'

export default class SideHint extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="col-sm-12 col-md-5 col-xl-4 col-centered">
        <p className="paragraph paragraph--form-part-title">
          <span className="form-part-number">{this.props.number}</span>
          {this.props.text}
        </p>
      </div>
    )
  }
}