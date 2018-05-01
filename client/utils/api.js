import axios from 'axios'
import superagent from 'superagent'
import config from '../../config'

require('superagent-as-promised')(superagent)

/*
 * Warroom
 */
export function getPendingPaymentGateways (accessToken) {
  return axios.get(`${config.apiUrl}/pending-gateway-requests/`, {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log('GET PENDING GATEWAYS ERR', err)
    })
}

export function getPendingPaymentGateway (id, token) {
  return axios.get(`${config.apiUrl}/pending-gateway-requests/${id}`, {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log('GET PENDING GATEWAY ERR', err)
    })
}

export function resolvePaymentGatewayRequest (id, accessToken) {
  return axios.post(`${config.apiUrl}/pending-gateway-requests/${id}/resolve`, {}, {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log('RESOLVE PAYMENT GATEWAY ERR', err)
    })
}

export function rejectPaymentGatewayRequest (id, accessToken) {
  return axios.post(`${config.apiUrl}/pending-gateway-requests/${id}/reject`, {}, {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log('REJECT PAYMENT GATEWAY ERR', err)
    })
}

export function inviteOrganization (data, accessToken) {
  return axios.post(`${config.apiUrl}/send-claim-business-email`, data, {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log('REJECT PAYMENT GATEWAY ERR', err)
    })
}

/*
 * Misc
 */
export function login (username, password) {
  return axios.post(`${config.apiUrl}/auth/login`, {
    grantType: 'password',
    username,
  password})
    .then((response) => {
      return response.data
    })
}

export function resetPassword (email) {
  return axios.post(`${config.apiUrl}/auth/forgot-password`, {
  email})
    .then((response) => {
      return response.data
    })
}

export function changePassword (code, password) {
  return axios.post(`${config.apiUrl}/auth/change-forgotten-password`, {
    code,
  password})
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log('CHANGE PASSWORD ERR', err)
    })
}

export function uploadImage (image, url) {
  return superagent.put(url).send(image)
    .then((response) => {
      console.log('upload image success', response)
    })
    .catch((err) => {
      console.log('UPLOAD IMAGE ERR', err)
    })
}

export function uploadBase64Image (image, url) {
    let pureBase64Image = image.replace(/^data:image\/\w+;base64,/, "");

    return superagent
      .put(url)
      .set('X-Requested-With', 'XMLHttpRequest')
      .set('Expires', '-1')
      .set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1,private')
      .send(new Buffer(pureBase64Image, 'base64'))
      .set('Content-Type', '')
      .then((response) => {
        return response
      })
      .catch((err) => {
        console.log('UPLOAD BASE64 IMAGE', err);
      })
}

export function getInvitation (invitationId) {
  return axios.get(`${config.apiUrl}/invitations/${invitationId}`)
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log('GET INVITATION ERR', err)
    })
}

export function acceptInvitation (invitationId, accessToken) {
  return axios.post(`${config.apiUrl}/invitations/${invitationId}/accept`, {}, {
    headers: createAuthHeader(accessToken)
  })
  .then((response) => {
    return response.data
  })
  .catch((err) => {
    console.log('ACCEPT INVITATION ERR', err)
  })
}

export function geoIpLookup () {
  return axios.get(`http://ipinfo.io`)
    .then((response) => {
      const countryCode = (response.data && response.data.country) ? response.data.country : ''

      return countryCode
    })
    .catch((err) => {
      console.log('GEO IP LOOKUP ERR', err)
    })
}

export function sendWidgetSetupMail(orgId, data, accessToken) {
  return axios.post(`${config.apiUrl}/orgs/${orgId}/widget-setup-mail`, data, {
    headers: createAuthHeader(accessToken)
  })
  .then((response) => {
    return response.data
  })
  .catch((err) => {
    console.log('SEND WIDGET SETUP EMAIL ERR', err)
  })
}

/*
 * Users
 */

export function addUser (data, accessToken) {
  return axios.post(`${config.apiUrl}/users`, data, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function editUser (userId, data, accessToken) {
  return axios.patch(`${config.apiUrl}/users/${userId}`, data, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function loadUser (userId, accessToken) {
  return axios.get(`${config.apiUrl}/users/${userId}`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function getUserImageUrl (accessToken, mimeType) {
  return axios.get(`${config.apiUrl}/users/me/image?base64=true`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function getMessageUsMembers (accessToken) {
  return axios.get(`${config.apiUrl}/messageus/members`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

/*
 * Customer requests
 */

export function assignRequestToEmployee (requestId, employeeId, accessToken) {
  return axios.put(`${config.apiUrl}/customer-requests/${requestId}/assign-employee/${employeeId}`, [], {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response
    })
}

/*
 * Organization
 */

export function loadOrganization (orgId, accessToken) {
  return axios.get(`${config.apiUrl}/orgs/${orgId}?source=local`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function updateOrganizationContact (model, orgId, accessToken) {
  const data = {
    contactInfo: model
  }
  return axios.put(`${config.apiUrl}/orgs/${orgId}`, data, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function getEmployees (orgId, accessToken) {
  return axios.get(`${config.apiUrl}/orgs/${orgId}/members`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function inviteEmployee (data, accessToken) {
  return axios.post(`${config.apiUrl}/invitations`, data, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function removeEmployee (deptId, employeeId, accessToken) {
  return axios.delete(`${config.apiUrl}/departments/${deptId}/members/${employeeId}`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function createPaymentGateway (orgId, data, accessToken) {
  return axios.post(`${config.apiUrl}/orgs/${orgId}/payments/gateway`, data, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function deletePaymentGateway (orgId, accessToken) {
  return axios.delete(`${config.apiUrl}/orgs/${orgId}/payments/gateway`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function getOrgPendingPaymentGateways (orgId, accessToken) {
  return axios.get(`${config.apiUrl}/orgs/${orgId}/pending-gateway-requests/`, {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log('GET ORG PENDING GATEWAYS ERR', err)
    })
}

export function getDepartments (orgId, accessToken) {
  return axios.get(`${config.apiUrl}/orgs/${orgId}/departments`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function addDepartment (orgId, data, accessToken) {
  return axios.post(`${config.apiUrl}/orgs/${orgId}/departments`, data, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function editDepartment (orgId, departmentId, data, accessToken) {
  return axios.patch(`${config.apiUrl}/orgs/${orgId}/departments/${departmentId}`, data, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

/*
 * Teamchat
 */

export function getUserConnections (accessToken) {
  return axios.get(`${config.apiUrl}/users/me/connections`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function createChannel (orgId, members, accessToken) {
  return axios.post(`${config.apiUrl}/orgs/${orgId}/channels`, members, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function createChannelMessage (channelId, data, accessToken) {
  return axios.post(`${config.apiUrl}/channels/${channelId}/messages`, data, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function createDepartmentMessage (orgId, departmentId, data, accessToken) {
  return axios.post(`${config.apiUrl}/orgs/${orgId}/departments/${departmentId}/messages`, data, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function deleteChannel (orgId, channelId, accessToken) {
  return axios.delete(`${config.apiUrl}/orgs/${orgId}/channels/${channelId}`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

/*
 * Products
 */

export function getProducts (orgId, accessToken) {
  return axios.get(`${config.apiUrl}/orgs/${orgId}/products`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function addProduct (orgId, data, accessToken) {
  return axios.post(`${config.apiUrl}/orgs/${orgId}/products`, data, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function editProduct (orgId, productId, data, accessToken) {
  return axios.put(`${config.apiUrl}/orgs/${orgId}/products/${productId}`, data, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function getProductImageUrl (orgId, accessToken) {
  return axios.get(`${config.apiUrl}/orgs/${orgId}/products/image`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function deleteProduct (orgId, productId, accessToken) {
  return axios.delete(`${config.apiUrl}/orgs/${orgId}/products/${productId}`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

/*
 * Offers
 */

export function createOffer (orgId, data, accessToken) {
  return axios.post(`${config.apiUrl}/orgs/${orgId}/offers`, data, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

export function getOfferDetails (offerId, accessToken) {
  return axios.get(`${config.apiUrl}/offers/${offerId}`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

// Used within the website
export function loadSuggestions (searchQuery) {
  return axios.post(`${config.apiUrl}/business/orgs/search`, {
    query: searchQuery
  }).then((response) => {
    return response.data
  })
}

/*
 * Messages
 */

export function sendMessage (requestId, messageData, accessToken) {
  return axios.post(`${config.apiUrl}/customer-requests/${requestId}/messages`, messageData, {
    headers: createAuthHeader(accessToken)
  })
}

export function resolveCustomerRequest (requestId, accessToken) {
  return axios.put(`${config.apiUrl}/customer-requests/${requestId}`, {}, {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response
    })
}

export function getRequestImageUrl (requestId, accessToken) {
  return axios.get(`${config.apiUrl}/customer-requests/${requestId}/image`, {
    headers: createAuthHeader(accessToken)
  }).then((response) => {
    return response.data
  })
}

/*
 * Settings
 */

export function getPaymentMethods (accessToken) {
  return axios.get(`https://core.spreedly.com/v1/gateways_options.json`, {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getTwillioCountryCode (accessToken) {
  return axios.get(`${config.apiUrl}/twilio/countries`, {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getTwillioAreaCode (accessToken, country) {
  return axios.get(`${config.apiUrl}/twilio/countries/${country}/areaCodes`, {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getTwillioPhoneNumbers (accessToken, countryCode, areaCode) {
  return axios.get(`${config.apiUrl}/twilio/phone-numbers`, {
    headers: createAuthHeader(accessToken),
    params: {
      countryCode,
    areaCode}
  })
    .then((response) => {
      return response
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getTwillioNumbers (accessToken) {
  return axios.get(`${config.apiUrl}/twilio/countries`, {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response
    })
    .catch((err) => {
      console.log(err)
    })
}

export function savetwillioNumber (orgId, data, accessToken) {
  return axios.post(`${config.apiUrl}/orgs/${orgId}/twilio-number`, {phoneNumber: data}, {
    headers: createAuthHeader(accessToken)
  })
}

export function validateTwillioNumber (number) {
  return axios.get(`https://lookups.twilio.com/v1/PhoneNumbers/${number}`)
    .then((response) => {
      return response
    })
}

export function getTwillioToken (accessToken) {
  return axios.get(`${config.apiUrl}/twilio/call-token`, {
    headers: createAuthHeader(accessToken)
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log(err)
    })
}

// JWT authorization
function createAuthHeader (accessToken) {
  return {
    'Authorization': `JWT ${accessToken}`,
    'app': 'business'
  }
}


// Settings - Subscriptions

export function postCreditCardInfo (number, expMonth, expYear, cvc, accessToken) {
  return axios.post(`${config.apiUrl}/users/me/credit-card`, {
    number,
    expMonth,
    expYear,
    cvc
  },{
    headers: createAuthHeader(accessToken)
  })
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    console.log("postCreditCardInfo API call failed, response: ", error)
    return error
  })
}

export function getOrganizationSubscription (orgId, accessToken) {
  return axios.get(`${config.apiUrl}/orgs/${orgId}/subscription/upcomming-invoice`, {
    headers: createAuthHeader(accessToken)
  })
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    console.log("getOrganizationSubscription API call failed, response: ", error)
    return error
  })
}


export function subscribeOrganization (orgId, accessToken) {
  return axios.post(`${config.apiUrl}/orgs/${orgId}/subscription/subscribe`, null, {
    headers: createAuthHeader(accessToken)
  })
  .then((response) => {
    return response.data
  })
}

export function unsubscribeOrganization (orgId, accessToken) {
  return axios.post(`${config.apiUrl}/orgs/${orgId}/subscription/unsubscribe`, null, {
    headers: createAuthHeader(accessToken)
  })
  .then((response) => {
    return response.data
  })
}



// Integrations - Facebook Messenger Token

export function getOrganizationFacebookPages (orgId, accessToken, facebookAccessToken) {
  return axios.get(`${config.apiUrl}/orgs/${orgId}/facebook/pages?facebookAccessToken=${facebookAccessToken}`, {
    headers: createAuthHeader(accessToken)
  })
  .then((response) => {
    return response.data
  })
}

export function getAppId () {
  return axios.get(`${config.apiUrl}/facebook/app-id`, null)
  .then((response) => {
    return response.data
  })
}



export function postOrganizationFacebookPageSubscribe (orgId, pageId, accessToken, facebookAccessToken) {
  return axios.post(`${config.apiUrl}/orgs/${orgId}/facebook/pages/${pageId}/subscribe?facebookAccessToken=${facebookAccessToken}`, null, {
    headers: createAuthHeader(accessToken)
  })
  .then((response) => {
    return response.data
  })
}

export function postOrganizationFacebookPageUnsubscribe (orgId, pageId, accessToken, facebookAccessToken) {
  return axios.post(`${config.apiUrl}/orgs/${orgId}/facebook/pages/${pageId}/unsubscribe?facebookAccessToken=${facebookAccessToken}`, null, {
    headers: createAuthHeader(accessToken)
  })
  .then((response) => {
    return response.data
  })
}


// Landing

export function loginUser (data) {
  return axios.post(`${config.apiUrl}/auth/login`, data)
    .then(res => {
      return res
    })
    .catch(err => {
      throw err
    })
}

export function createUser (data) {
  return axios.post(`${config.apiUrl}/users`, data)
    .then(res => {
      return res
    })
    .catch(err => {
      throw err
    })
}

export function getUserPhone (accessToken, factualId) {
  // const instance = axios.create({ headers: { 'Authorization': `JWT ${accessToken}` } })
  return axios.get(`${config.apiUrl}/get-phone-for-verification-call`, {
    headers: createAuthHeader(accessToken),
    params: {
    factualId}
  })
    .then(res => {
      return res.data.phone
    })
    .catch(err => {
      throw err
    })
}

export function getUserClaimed (accessToken) {
  return axios.get(`${config.apiUrl}/users/me`, {
    headers: createAuthHeader(accessToken)
  })
    .then(res => {
      return res.data.organizationId
    })
    .catch(err => {
      throw err
    })
}

export function getClaimedBusinessData (orgId) {
  return axios.get(`${config.apiUrl}/orgs/${orgId}`, {
    params: {
      source: 'local'
    }
  })
    .then(res => {
      return res
    })
    .catch(err => {
      throw err
    })
}

export function connectBrand (data) {
  return axios.post(`${config.apiUrl}/brands`, data)
    .then(res => {
      console.log(res)
      return res
    })
    .catch(err => {
      throw err
    })
}

export function claimYourBusiness (data, accessToken) {
  const instance = axios.create({ headers: { 'Authorization': `JWT ${accessToken}` } })

  return instance.post(`${config.apiUrl}/orgs`, data)
    .then(res => {
      return res
    })
    .catch(err => {
      throw err
    })
}
export function verifyBusiness (orgId, code, accessToken) {
  const instance = axios.create({ headers: { 'Authorization': `JWT ${accessToken}` } })

  return instance.post(`${config.apiUrl}/orgs/${orgId}/verification`, {
    verificationCode: code
  }).then(res => {
    return res
  }).catch(err => {
    throw err
  })
}
