import React, { Component } from 'react'
import moment from 'moment'
import * as api from 'utils/api'
import { connect } from 'react-redux'
import { putCustomer, clearCustomer, showLoader, hideLoader } from 'reducers/messages/messagesSidebarReducer'
import Loader from 'components/dashboard/common/Loader'
import PersonPhoto from 'components/dashboard/common/PersonPhoto'
import OrganizationDetail from './OrganizationDetail/OrganizationDetail'

@connect((state) => ({
	auth: state.auth,
	loading: state.messagesSidebar.loading,
	conversation: state.messagesDetail.conversation,
	customer: state.messagesSidebar.customer,
	users: state.users.users
}), {
	putCustomer,
	clearCustomer,
	showLoader,
	hideLoader,

})

export default class MessagesSidebar extends Component {
	constructor(props) {
		super(props)

		this.callOrganization = this.callOrganization.bind(this)
		this.hangUp = this.hangUp.bind(this)
		this.initTwillio = this.initTwillio.bind(this)
		this.refreshOrganization = this.refreshOrganization.bind(this)

		this.state = {
			userId: null,
			orgId: null,
			orgDetail: null,
			isCalling: false,
			isEstablishingCall: false
		}
	}

	componentDidMount() {
		if (this.props.auth.isAdmin) {
			this.initTwillio()
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.conversation) {
			const orgId = nextProps.conversation && nextProps.conversation.organization && nextProps.conversation.organization.id

			if (orgId !== this.state.orgId) {
				this.state.orgId = orgId;

				if (orgId) {
					this.props.showLoader()

					api.loadOrganization(orgId, this.props.auth.accessToken).then((result) => {
						console.log('result', result);
						this.setState({
							orgDetail: result
						}, () => {
							setTimeout(() => {
								this.props.hideLoader()
							}, 500)
						})
					})
				} else {
					this.setState({
						orgDetail: null
					})
				}

			}
			const userId = nextProps.conversation.customer.id

			if (!this.state.userId || this.state.userId != userId) {
				this.setState({ userId: userId }, () => {
					const customer = this.props.users[userId]

					this.props.putCustomer(this.props.users[userId])
				})
			}
		}
	}

	initTwillio() {
		api.getTwillioToken(this.props.auth.accessToken)
			.then((response) => {
				Twilio.Device.setup(response.token)

				Twilio.Device.ready(() => {
					Twilio.Device.offline(() => {
						Twilio.Device.setup(response.token)
					})

					Twilio.Device.disconnect(() => {
						this.setState({
							isCalling: false,
							isEstablishingCall: false
						})
					})
				})
			})
	}

	callOrganization(number) {
		this.setState({ isEstablishingCall: true })

		Twilio.Device.connect({ phone: number })

		this.setState({
			isCalling: true,
			isEstablishingCall: false
		})
	}

	hangUp() {
		Twilio.Device.disconnectAll()

		this.setState({ isCalling: false })
	}

	refreshOrganization(data) {
		let orgDetail = { ...this.state.orgDetail }
		orgDetail.contactInfo = data

		this.setState({ orgDetail: orgDetail })

		this.forceUpdate()
	}

	render() {
		const {
			auth,
			conversation,
			customer,
			loading,
			users
		} = this.props

		let fullName = 'Live Chat User'
		let address = ''

		if (customer) {
			if (customer.phone) {
				fullName = customer.phone
			}

			if (customer.firstName && customer.lastName) {
				fullName = customer.firstName + ' ' + customer.lastName
			} else if (customer.firstName) {
				fullName = customer.firstName
			}

			if (customer.address) {
				if (customer.address.city) {
					address += customer.address.city
				}

				if (customer.address.country) {
					if (address != '') {
						address += ', ' + customer.address.country
					} else {
						address += customer.address.country
					}
				}
			}
		}

		let lastSeenDate = customer && users[customer.id].lastSeenDate && users[customer.id].lastSeenDate
		let online = customer && users[customer.id].online && users[customer.id].online

		let onlineStatus = <span className="profile__online-status"></span>

		if (lastSeenDate) {
			if (elapsedTime < secondsDay) {
			  lastSeenDate = moment(lastSeenDate).format('LT')
			} else {
			  lastSeenDate = moment(lastSeenDate).format('l LT')
			}
		}

		if (online) {
			onlineStatus = <span className="profile__online-status profile__online-status--online"></span>
		}

		const elapsedTime = Date.now() - lastSeenDate
		const secondsDay = 24 * 60 * 60 * 1000

		const isAdmin = auth.profile && auth.profile.roles && auth.profile.roles[0] === 'admin'

		return customer
			? <div className="messages-sidebar">
					<div className={isAdmin ? 'profile profile--border' : 'profile'}>
						<div className="profile__header">
							<div className="profile__picture-wrapper">
								<PersonPhoto photoUrl={customer.profileImageUrl} className="profile__picture" />
								{onlineStatus}
							</div>
							<ul className="profile__info">
								<li>{fullName}</li>
								<li><a href={'mailto:' + customer.email}>{customer.email}</a></li>
								<li>{customer.phone}</li>
							</ul>
						</div>
						<div className="profile__body">
							<ul className="profile__data">
								{(address != '') && <li className="profile__data-item"><i className="mu mu-map"></i> <span>{address}</span></li>}
								{(lastSeenDate) && <li className="profile__data-item"><i className="mu mu-clock"></i> <span>Last active: {lastSeenDate}</span></li>}
							</ul>
						</div>
					</div>

				  {auth.isAdmin && this.state.orgDetail &&
						<OrganizationDetail
							detail={this.state.orgDetail}
							loading={loading}
							isCalling={this.state.isCalling}
							isEstablishingCall={this.state.isEstablishingCall}
							callOrganization={this.callOrganization}
							orgId={this.state.orgId}
							hangUp={this.hangUp}
							refreshOrganization={this.refreshOrganization} />
					}
				</div>
			: <div className="messages-sidebar--empty">
					No request selected
				</div>
	}
}
