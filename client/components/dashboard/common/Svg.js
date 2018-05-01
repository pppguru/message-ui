import React, { Component } from 'react'

export default class Svg extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <object type="image/svg+xml" data={this.props.url + ".svg"}>
        <img src={this.props.fallback ? this.props.fallback : this.props.url + ".png"} />
      </object>
    )
  }
}