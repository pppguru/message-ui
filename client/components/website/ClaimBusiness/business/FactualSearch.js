import React, { Component } from 'react'

export default class FactualSearch extends Component {
  static PropTypes = {
    handleChange: React.PropTypes.func.isRequired,
    handleKeyPress: React.PropTypes.func.isRequired,
    handleSelection: React.PropTypes.func.isRequired, 
    switchBusinessType: React.PropTypes.func.isRequired,
    inputValue: React.PropTypes.string.isRequired,
    cursorPosition: React.PropTypes.number.isRequired,
    suggestions: React.PropTypes.array
  }

  render() {
    const { handleChange, handleKeyPress, handleSelection, switchBusinessType, inputValue, suggestions, cursorPosition } = this.props
    let suggestionList = null

    if (suggestions.length) {
      suggestionList = <ul className="autosuggest-list" id="keyboard-controlled-list">
        {
          suggestions.length
          ? suggestions.map((suggestion, i) => (
            <li tabIndex="-1" key={suggestion.factualId}>
              <div className={i === cursorPosition ? "active suggestion" : "suggestion"} onClick={()=>handleSelection(suggestion)}>{suggestion.name} | {suggestion.address.street}</div>
            </li>
          ))
          : <li><em>No businesses were found.</em></li>
        }
      </ul>
    }

    return (
      <div>
        <div className="row--flex claim-your-business__pick-business">
          <div className="form-container">
            <div className="form-row--justify">
              <div className="single-input--full autosuggest-container">
                <input
                  type="text"
                  placeholder="Search business ..."
                  ref="businessName"
                  required
                  value={inputValue}
                  onKeyDown={handleKeyPress}
                  onChange={handleChange} />
                <span className="label">Business name</span>
                { suggestionList }
              </div>
            </div>
          </div>
        </div>
        <div className="text-block--center">
          <p className="paragraph paragraph--beta">
            Is your business not showing up on the list?
          </p>
          <a href="#" className="link" onClick={switchBusinessType}>Sign up here.</a>
        </div>
      </div>
    )
  }
}