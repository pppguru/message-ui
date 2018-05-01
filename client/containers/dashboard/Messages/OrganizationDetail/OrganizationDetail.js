import React, { Component, PropTypes } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps"
import Loader from 'components/dashboard/common/Loader'
import libphonenumber from 'google-libphonenumber'
import OrganizationItem from './Item'
import OrganizationEdit from './EditForm'
import InviteOrganization from './InviteOrganization'
import { connect } from 'react-redux'
import { updateOrganizationContact, inviteOrganization } from '../../../../utils/api'

@connect((state) => ({
	auth: state.auth
}), {})

export default class OrganizationDetail extends Component {

  constructor(props) {
    super(props)
    
    this.cancelEditing = this.cancelEditing.bind(this)
    this.cancelInvitation = this.cancelInvitation.bind(this)
    this.handleInvite = this.handleInvite.bind(this)

    this.state = {
      edit: false,
      isInviting: false,
      isSubmittingInvite: false
    }
  }

  handleSubmit(model) {
    const orgId = this.props.orgId

    updateOrganizationContact(model, orgId, this.props.auth.accessToken)
      .then((response) => {
        this.setState({ edit: false })

        this.props.refreshOrganization(model)
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleInvite(model) {
    this.setState({ isSubmittingInvite: true })

    console.log('this.props.detail.id', this.props.detail.id);

    const data = {
      organizationId: this.props.detail.id,
      email: model.email,
      phone: model.phone
    }

    inviteOrganization(data, this.props.auth.accessToken)
      .then((response) => {
        this.setState({
          isInviting: false,
          isSubmittingInvite: false
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  cancelEditing() {
    this.setState({ edit: false })
  }

  cancelInvitation() {
    this.setState({ isInviting: false })
  }

  render() {
    const {
      detail,
      loading,
      isCalling,
      isEstablishingCall,
      callOrganization,
      hangUp
    } = this.props

    return (
      <div className="organization__detail">

        {detail.phoneE164 && !this.state.edit && !this.state.isInviting &&
          <div className="organization__call">
            {isCalling
              ? <div><div className="organization__call-status"><span>Calling</span></div><button onClick={hangUp} type="button" className="btn btn--delete">Hangup</button></div>
              : <button onClick={() => { callOrganization(detail.phoneE164) }} type="button" className="btn btn--beta form__submit">{(isEstablishingCall) ? <Loader type={'button'} /> : 'Call'}</button>
            }
          </div>
        }

        {this.state.isInviting
          ? <InviteOrganization
              onSubmit={this.handleInvite}
              isSubmittingInvite={this.state.isSubmittingInvite}
              cancelInvitation={this.cancelInvitation} />
          : <button type="button" className="btn btn--alpha form__submit" style={{ width: '100%' }} onClick={() => { this.setState({ isInviting: true }) }}>Invite organization</button>
        }

        {!this.state.edit && !this.state.isInviting &&
          <OrganizationItem 
            detail={detail}
            toggleEdit={() => { this.setState({ 'edit': true }) }} />
        }

        {this.state.edit && 
          <OrganizationEdit 
            onSubmit={(model) => this.handleSubmit(model)} 
            detail={detail}
            cancelEditing={this.cancelEditing}
            initialValues={detail.contactInfo} />
        }

        <Loader visible={loading} centered={true} overlay={true} />
      </div>
    )
  }
}
