import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import sessionStore from 'utils/sessionStore'
import Loader from 'components/dashboard/common/Loader'
import * as api from 'utils/api'
import {
	setTab,
	setInvitation,
	setEmailFromInvitation
} from 'reducers/authReducer'

@connect((state) => ({
	auth: state.auth,
	loading: state.auth.loading,
	resetLoading: state.auth.resetLoading
}), {
	setTab,
	setInvitation,
	setEmailFromInvitation
})

export default class Invitation extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

	componentDidMount() {
		// init branch.io
		(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setIdentity track validateCode".split(" "), 0);

		let invitationId = null

		branch.init('key_test_mafP456zT9nl3BR3xWcUefkgvsmKTncg', (err, data) => {
			invitationId = data.data_parsed.invitationId

			if (invitationId) {
				api.getInvitation(invitationId)
					.then((response) => {
						if (response.isValid) {
							if (response.isUserRegistered) {
								if (response.contactType == 'email') {
									api.acceptInvitation(invitationId, this.props.auth.accessToken)

									this.props.setEmailFromInvitation(response.contactValue)
								}

								this.context.router.push('/')
							} else {
								const invitation = Object.assign({}, response, {
									invitationId: invitationId
								})

								this.props.setInvitation(invitation)

								this.props.setTab('signup')

								this.context.router.push('/')
							}
						} else {
							this.context.router.push('/')
						}
					})
					.catch((err) => {
						console.log('GET INVITATION ERR', err)
					})
			}
		})
	}

	render() {
		return (
			<section className="section section--invitation">
				<div className="invitation">
					<div className="invitation__logo">
						<img src={require('assets/img/messageus-logo-sign.svg')} />
					</div>

					<div className="invitation__loader">
						<Loader visible={true} centered={true} margin={true} />
					</div>
				</div>
			</section>
		)
	}
}