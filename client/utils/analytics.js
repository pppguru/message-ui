import moment from 'moment'

const updatePeopleProperty = (property, value) => {
	let payload = {}

	payload[property] = value

	mixpanel.people.set(payload)
}

const incrementProperty = (property, superOnly = false, amount = 1) => {
	if (!superOnly) {
		mixpanel.people.increment(property, amount)
	}

	let payload = {}

	payload[property] = 1

	mixpanel.register_once(payload)

	const currentValue = mixpanel.get_property(property)

	if (currentValue) {
		payload[property] = 1

		mixpanel.register(payload)
	}
}

const setDateToPropertyOnce = (property, superOnly) => {
	let payload = {}

	payload[property] = moment(Date.now()).format('MMMM Do YYYY, h:mm a')

	mixpanel.register_once(payload)

	if (!superOnly) {
		mixpanel.people.set_once(payload)
	}
}

const setDateToProperty = (property, superOnly) => {
	let payload = {}

	payload[property] = moment(Date.now()).format('MMMM Do YYYY, h:mm a')

	mixpanel.register(payload)

	if (!superOnly) {
		mixpanel.people.set(payload)
	}
}

export default class Analytics {
	init() {
		(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);
mixpanel.init("d0cb9c017baafac7a52ed2befffa59fc")
	}

	signIn(userId) {
		mixpanel.identify(userId)

		updatePeopleProperty("$last_login", moment(Date.now()).format('MMMM Do YYYY, h:mm a'))

		this.trackSignIn()
	}

	signUp(user) {
		mixpanel.alias(user.id, mixpanel.get_distinct_id())

		mixpanel.identify(user.id)

		const payload = {
			"User Id": user.id,
			"$first_name": user.firstName,
			"$last_name": user.lastName,
			"$email": user.email,
			"$phone": user.phone,
			"Organisation Id": user.organizationId,
			"$last_login": moment(Date.now()).format('MMMM Do YYYY, h:mm a'),
			"$created": user.createdAt
		}

		mixpanel.people.set(payload)

		this.trackSignUp()
	}

	signOut() {
		mixpanel.cookie.clear()

		// this.init()

		this.trackSignOut()
	}

	trackSignIn() {
		incrementProperty("Number of Sign Ins")
		setDateToPropertyOnce("Date of First Sign In")
		setDateToProperty("Date of Last Sign In")

		mixpanel.track("Sign In")
	}

	trackSignUp() {
		incrementProperty("Number of Sign Ins", true)
		setDateToPropertyOnce("Date of First Sign In", true)
		setDateToProperty("Date of Last Sign In", true)

		mixpanel.track("Sign Up")
	}

	trackSignOut() {
		incrementProperty("Number of Sign Outs")
		setDateToPropertyOnce("Date of First Sign Out")
		setDateToProperty("Date of Last Sign Out")

		mixpanel.track("Sign Out")
	}

	trackMessageSent(requestId, orgId, messageType) {
		incrementProperty("Number of Business Messages Sent")
		setDateToPropertyOnce("Date of First Business Message Sent")
		setDateToProperty("Date of Last Business Message Sent")

		mixpanel.track("Business Message Sent", {
			request: requestId,
			org: orgId,
			type: messageType
		})
	}

	trackUserAssignedRequest(orgId, requestId, userId, isAdmin) {
	  setDateToPropertyOnce("Date of First Assigned Request")
	  setDateToProperty("Date of Last Assigned Request")
	  incrementProperty("Number of Assigned Requests")

	  mixpanel.track("User Assigned Requests", {
	  	orgId: orgId,
	  	request: requestId,
	  	user: userId,
	  	isAdmin: isAdmin
	  })
	}

  trackRequestAnswered(orgId, requestId, userId) {
		self.setDateToPropertyOnce("Date of First Request Answer")
		self.setDateToProperty("Date of Last Request Answer")
		self.incrementProperty("Number of Request Answers")

		mixpanel.track("User Answered Requests", {
			org: orgId,
			request: requestId,
			user: userId
		})
  }

  trackUserSentMessageToDepartment(orgId, departmentId, userId) {
		setDateToPropertyOnce("Date of First Message to Dept")
		setDateToProperty("Date of Last Message to Dept")
		incrementProperty("Number of Message to Dept")

		mixpanel.track("User Sent Message to Dept", {
			orgId: orgId,
			departmentId: departmentId,
			userId: user
		})
  }

	trackUserSentMessageToChannel(orgId, channelId, userId) {
		setDateToPropertyOnce("Date of First Message to Channel")
		setDateToProperty("Date of Last Message to Channel")
		incrementProperty("Number of Message to Channel")

		Mixpanel.track("User Sent Message to Channel", {
			orgId: orgId,
			channelId: channelId,
			userId: userId
		})
	}
}
