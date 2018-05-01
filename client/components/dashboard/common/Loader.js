import React, { Component } from 'react'
import classNames from 'classnames'

export default class Loader extends Component {
	render() {
		let overlayClasses = classNames({
			'loader-overlay': this.props.overlay,
			'loader-overlay--centered': this.props.centered,
			'loader-overlay--visible': this.props.visible,
			'loader-overlay--margin': this.props.margin
		})

		let elementClasses = ''

		if (this.props.small) {
			elementClasses += 'small '
		}

		if (this.props.type) {
			elementClasses += this.props.type + ' '
		}

		const loader = 
			<div className={'sk-circle ' + elementClasses}>
				<div className="sk-circle1 sk-child"></div>
				<div className="sk-circle2 sk-child"></div>
				<div className="sk-circle3 sk-child"></div>
				<div className="sk-circle4 sk-child"></div>
				<div className="sk-circle5 sk-child"></div>
				<div className="sk-circle6 sk-child"></div>
				<div className="sk-circle7 sk-child"></div>
				<div className="sk-circle8 sk-child"></div>
				<div className="sk-circle9 sk-child"></div>
				<div className="sk-circle10 sk-child"></div>
				<div className="sk-circle11 sk-child"></div>
				<div className="sk-circle12 sk-child"></div>
			</div>

		return (
			<div className={overlayClasses}>{loader}</div>
		)
	}
}