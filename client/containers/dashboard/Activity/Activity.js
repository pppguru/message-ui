import React, { Component } from 'react'
import { connect } from 'react-redux'
import AssignEmployee from 'containers/dashboard/Activity/AssignEmployee'
import CustomerRequestsList from 'components/dashboard/activity/CustomerRequestsList'
import Loader from 'components/dashboard/common/Loader'
import * as api from 'utils/api'
import { toggleIsRedirectedFromActivity, decrementUnassignedCount, setRequestKeyToSelect } from 'reducers/activityReducer'
import {
	showForm,
	hideForm,
	putFormData,
	clearForm,
	addToSelected,
	addAllToSelected,
	removeFromSelected,
	clearSelected,
	submit,
	submitSuccess,
	submitError
} from 'reducers/formsReducer'
import {
	incrementUnreadConversationCount
} from 'reducers/messages/messagesListReducer'

const CONVERSATION_LOAD_LIMIT = 100

const FORM_NAME = 'assignEmployee'

@connect((state) => ({
	auth: state.auth,
	users: state.users.users,
	lastUpdated: state.users.lastUpdated,
	loading: state.activity.loading,
	customerRequests: state.activity.customerRequests,
	isVisible: state.forms[FORM_NAME].isVisible,
	selected: state.forms[FORM_NAME].selected,
	isSubmitting: state.forms[FORM_NAME].isSubmitting,
	step: state.forms[FORM_NAME].step,
	message: state.forms[FORM_NAME].message
}), {
	showForm,
	hideForm,
	putFormData,
	clearForm,
	addToSelected,
	addAllToSelected,
	removeFromSelected,
	clearSelected,
	submit,
	submitSuccess,
	submitError,
	toggleIsRedirectedFromActivity,
	decrementUnassignedCount,
	setRequestKeyToSelect,
	incrementUnreadConversationCount
})

export default class MessagesList extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

	constructor(props) {
		super(props)

		this.assignUser = this.assignUser.bind(this)
	}

	componentWillUnmount() {
		this.props.clearSelected(FORM_NAME)
	}

	assignUser(requestKey) {
		api.assignRequestToEmployee(requestKey, this.props.auth.profile.id, this.props.auth.accessToken)
			.then((response) => {
				this.props.toggleIsRedirectedFromActivity()

				this.props.setRequestKeyToSelect(requestKey)

				this.props.decrementUnassignedCount()

				this.context.router.push('/dashboard/messages')
			})
			.catch((err) => {
				console.log('ASSIGN EMPLOYEE TO REQUEST ERR', err)
			})
	}

	render() {
		const {
			auth: {
				profile: {
					id: userId
				},
				isAdmin
			},
			customerRequests,
			loading,
			addToSelected,
			addAllToSelected,
			removeFromSelected,
			clearSelected,
			selected,
			users
		} = this.props
		
		let isButtonActive = (selected.length > 0) ? true : false

		for (let key in selected) {
			if (selected[key].value && selected[key].value.assignedTo) {
				isButtonActive = false
			}
		}

		const assignButton =
			(isButtonActive)
			? <button type="button" className="btn btn--md btn--alpha" onClick={() => {this.props.showForm('assignEmployee')}}>Assign employee</button>
			: <button type="button" className="btn btn--md btn--alpha btn--disabled">Assign employee</button>

		return (
			<section className="section section--activity" key={'section--activity'}>
				<div className="section__container">
					<div className="section__header">
						<div className="section__title">
							<i className="mu mu-activity"></i><h2>Activity</h2>
						</div>
						<div className="section__tools">
							{assignButton}
						</div>
					</div>

					<CustomerRequestsList
						isAdmin={isAdmin}
						userId={userId}
						assignUser={this.assignUser}
						customerRequests={customerRequests}
						loading={loading}
						users={users}
						selected={selected}
						addToSelected={addToSelected}
						addAllToSelected={addAllToSelected}
						removeFromSelected={removeFromSelected}
						clearSelected={clearSelected} />

					{loading && <Loader visible={true} centered={true} margin={true} />}

					<AssignEmployee />
				</div>
			</section>
		)
	}
}
