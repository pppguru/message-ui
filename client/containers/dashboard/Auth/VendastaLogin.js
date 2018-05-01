import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as api from 'utils/api'
import { loginUser } from 'reducers/authReducer'

@connect((state) => ({
	auth: state.auth
}), {
	loginUser
})

export default class VendastaLogin extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  	constructor(props){
  		super(props)
  	}

  	componentDidMount() {

  		const rawData = decodeURI(this.props.params.data)
  		const vendastaAuth = JSON.parse(rawData)

  		if (!vendastaAuth.accessToken){
  			return
  		}

  		vendastaAuth.isAdmin = false

  		this.props.loginUser(vendastaAuth)
  		this.context.router.push('/dashboard')
  	}

	render() {

		
		return (
			<div></div>
		)
	}
}