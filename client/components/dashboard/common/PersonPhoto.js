import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(
  state => ({
    userId: state.auth.profile.id,
    lastUpdatedProfileImage: state.auth.lastUpdatedProfileImage
  })
)

export default class PersonPhoto extends Component {
  render() {
    const {
      className,
      photoUrl,
      userId,
      isUser,
      lastUpdatedProfileImage
    } = this.props

    return (
      <div className={'person-photo ' + className}>
        { photoUrl
          ? <img src={isUser ? photoUrl + '?' + lastUpdatedProfileImage : photoUrl} key={isUser && lastUpdatedProfileImage} />
          : <img src={require('../../../assets/img/placeholder-user.png')} />
        }
      </div>
    )
  }
}