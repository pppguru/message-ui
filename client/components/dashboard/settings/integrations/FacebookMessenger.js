import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Loader from 'components/dashboard/common/Loader'
import sessionStore from 'utils/sessionStore'
import * as api from 'utils/api'
import FacebookLogin from 'react-facebook-login'
import { updateProfile } from 'reducers/authReducer'

@connect((state) => ({
	auth: state.auth,
	organization: state.organization
}), {
	updateProfile
})
export default class FacebookMessenger extends Component {

	constructor(props){
		super(props)

		this.state = {
			facebookProfileLoaded: false,
			isLoading: true,
			errorMessage: null,
			appId: null
		}

		this.responseFacebook = this.responseFacebook.bind(this)
		this.handleSubscribe = this.handleSubscribe.bind(this)
		this.handleUnsubscribe = this.handleUnsubscribe.bind(this)
	}

	componentWillMount(){
		api.getAppId()
		.then((response) => {
			console.log(response)
			this.setState({
				appId: response.appId
			})
		})
	}

	responseFacebook(response){

		const auth = this.props.auth

		if (response && response.status != "unknown") {

			auth.profile.facebook.profileData = response
			sessionStore.saveAuth(auth)
			this.props.updateProfile(auth.profile)

			this.setState({
				isLoading: false,
				facebookProfileLoaded: true
			})

			this.getOrganizationFacebookPages()

		} else {

			this.setState({
				isLoading: false
			})
			// is there anything to be handled? if response is unknown, probably not logged in to FB, and should use button again
			return
		}
	}

	handleSubscribe(pageId) {
		api.postOrganizationFacebookPageSubscribe(this.props.organization.details.id, pageId, this.props.auth.accessToken, this.props.auth.profile.facebook.profileData.accessToken)
		.then((response) => {
			this.getOrganizationFacebookPages()
		})
	}

	handleUnsubscribe(pageId) {
		api.postOrganizationFacebookPageUnsubscribe(this.props.organization.details.id, pageId, this.props.auth.accessToken, this.props.auth.profile.facebook.profileData.accessToken)
		.then((response) => {
			this.getOrganizationFacebookPages()
		})
	}

	getOrganizationFacebookPages() {
		return api.getOrganizationFacebookPages(this.props.organization.details.id, this.props.auth.accessToken, this.props.auth.profile.facebook.profileData.accessToken)
		.then((response) => {

			const auth = this.props.auth
				
			auth.profile.facebook.pages = response
			this.props.updateProfile(auth.profile)
			sessionStore.saveAuth(auth)
			
			this.setState({
				facebookPagesList: response
			})			
			
			//console.log(this.props.auth.profile.facebook.pages)
		})
	}

	render() {

		//const loginButtonClass = (this.props.auth.profile.facebook.profileDataaccessToken || this.state.isLoading) ? "form--hidden__force" : ""

		const facebookProfileData = this.props.auth.profile.facebook.profileData

		return (
			<div className="form form--horizontal" style={{ zIndex: 50 }}>
				<div className="form form--horizontal">
					<div className="form__row">

						{
							this.state.errorMessage && <div className="form--notice__error">{this.state.errorMessage}</div>
						}

						<div className="form__group form__group--flex">
							<label className="form__label form__label--fixed">
								{
									facebookProfileData && facebookProfileData.accessToken
									? "Facebook status:"
									: "Connect with Facebook:"
								}
							</label>
							<div className="form__label">
								{
									facebookProfileData && facebookProfileData.accessToken
									? "Connected!"
									: <div>
										{
											this.state.appId
											? <FacebookLogin appId={this.state.appId} autoLoad={true} fields="name,email,picture" scope="public_profile,pages_messaging,manage_pages" callback={this.responseFacebook} />
											: "Waiting for API..."
										}									  	
									  </div>				
								}

								{/* this.state.isLoading && !this.props.auth.profile.facebook.profileData.accessToken && <Loader /> */}
							</div>
						</div>
					</div>
					{
						this.props.auth.profile.facebook.pages && 
						<div className="form__row">
							<div className="form__row">
								<div className="form__group form__group--flex">
									<label className="form__label form__label--fixed">
										Facebook pages your account own/maintains 
									</label>
									{
										this.props.auth.profile.facebook.pages.map((item, index) => 
											<div className="form__label">
												{item.name}
												{
													item.subscribed
													? <button className="btn btn--danger btn--inline btn--sm" style={{ marginLeft:20}} onClick={() => this.handleUnsubscribe(item.id)}>
														Unsubscribe</button>
													: <button className="btn btn--beta btn--sm btn--inline" style={{ marginLeft:20}} onClick={() => this.handleSubscribe(item.id)}>Subscribe</button>
												}
											</div>
										)
									}
								</div>
							</div>
						</div>
					}
				</div>
			</div>
		)
	}
}