import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className="search-bar">
        <div className="search-bar__icon">
          <i className="mu mu-search"></i>
        </div>
        <form className="search-bar__form">
          <input className="search-bar__input" type="text" placeholder={this.props.placeholder} />
        </form>
        <div className="search-bar__btn">
          {this.props.button}
        </div>
      </div>
    )
	}
}