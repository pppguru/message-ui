import React, { Component } from 'react'
import * as api from '../../../../utils/api'

// Import components
import FactualSearch from '../../../../components/website/ClaimBusiness/business/FactualSearch'

export default class FactualHandler extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: '',
      previousInputValue: '',
      suggestions: [],
      cursorPosition: -1
    }

    // Bind `this` to handlers
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.loadSuggestions = this.loadSuggestions.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
  }

  static PropTypes = {
    switchBusinessType: React.PropTypes.func.isRequired,
    nextStep: React.PropTypes.func.isRequired,
    saveData: React.PropTypes.func.isRequired
  }

  componentDidMount () {
    // Set interval to periodically load factual data if necessary
    this._isMounted = true
    this.intervalCheck = setInterval(this.loadSuggestions, 1750)
  }

  componentWillUnmount () {
    // Clear interval
    clearInterval(this.intervalCheck)
    this._isMounted = false
  }

  handleChange (event) {
    // Handle change to text input
    const query = event.target.value.replace(/("|“)/g, '')
    this.setState({ inputValue: query })
    this.loadSuggestions()
  }

  handleKeyPress (event) {
    // Handle suggestion navigating with arrow keys
    if (!this.state.suggestions.length) return false
    if ( event.key === 'ArrowDown' || event.key === 'ArrowUp' ) event.preventDefault()

    let needToScroll = false
    let newCursorPosition = this.state.cursorPosition
    
    switch (event.key) {
      case 'ArrowDown':
        if (this.state.cursorPosition < this.state.suggestions.length - 1) {
          newCursorPosition = this.state.cursorPosition + 1
          needToScroll = true
        }
        break

      case 'ArrowUp':
        if (this.state.cursorPosition > 0) {
          newCursorPosition = this.state.cursorPosition - 1
          needToScroll = true
        }
        break

      case 'Enter':
        // Submit the selection using enter key
        this.handleSelection( this.state.suggestions[this.state.cursorPosition] )
        break
    }

    this.setState({ cursorPosition: newCursorPosition })

    // Scroll the suggestion list when traversing with keyboard
    if (needToScroll) {
      let suggestionList = { elem: document.getElementById('keyboard-controlled-list') }
      let activeSuggestion = { elem: suggestionList.elem.querySelectorAll('.suggestion')[newCursorPosition] }

      if (activeSuggestion.elem) {

        suggestionList = {
          elem: suggestionList.elem,
          height: suggestionList.elem.offsetHeight,
          scrollTop: suggestionList.elem.scrollTop
        }

        activeSuggestion = {
          elem: activeSuggestion.elem,
          top: activeSuggestion.elem.offsetTop,
          bottom: activeSuggestion.elem.offsetTop + activeSuggestion.elem.offsetHeight
        }

        // Scroll to the bottom of the next element if it is *below* the visible area
        if ( activeSuggestion.bottom > (suggestionList.scrollTop + suggestionList.height) ) {
          suggestionList.elem.scrollTop = activeSuggestion.bottom - suggestionList.height + 4
        }
        // Scroll to the top of the previous element if it is *above* the visible area
        if ( activeSuggestion.top < suggestionList.scrollTop ) {
          suggestionList.elem.scrollTop = activeSuggestion.top
        }
      }
    }
  }

  loadSuggestions () {
    // Load Factual suggestions
    const query = this.state.inputValue

    if ( this.state.inputValue === this.state.previousInputValue ) return false
    if (query.length >= 3) {
      api.loadSuggestions(query)
        .then(res => {
          if (!this._isMounted) return false
          if ( this.state.suggestions !== res.data ) {
            this.setState({ cursorPosition: -1 })
          }
          this.setState({ suggestions: res.data, previousInputValue: this.state.inputValue })
        })
        .catch(err => {
          console.log(err)
          this.setState({ previousInputValue: this.state.inputValue })
        })
    }
  }

  handleSelection (suggestion) {
    // Handle click on a Factual business from the list
    this.props.saveData(null, suggestion)
    this.props.nextStep()
  }

  render () {
    const { switchBusinessType } = this.props
    const { suggestions, inputValue, cursorPosition } = this.state
    return (
      <FactualSearch
        suggestions={suggestions}
        inputValue={inputValue}
        switchBusinessType={switchBusinessType}
        handleChange={this.handleChange}
        handleKeyPress={this.handleKeyPress}
        handleSelection={this.handleSelection}
        cursorPosition={cursorPosition}
      />
    )
  }
}