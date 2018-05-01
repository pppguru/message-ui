import React, { Component } from 'react'
import moment from 'moment'
import PersonPhoto from 'components/dashboard/common/PersonPhoto'

export default class ImageMessage extends Component {
  render() {
    const {
      message: {
        key,
        value: {
          sender,
          data: {
            imageUrl
          },
          createdAt
        }
      },
      conversation,
      users,
      user,
      scrollToBottom,
      read,
      lastUserMessageKey,
      customerId
    } = this.props

    let direction
    let picture

    if (sender.id == user.id) {
      direction = 'messages-detail__message--to'

      if (user.profileImageUrl) {
        picture = <PersonPhoto photoUrl={user.profileImageUrl} isUser={true} />
      } else {
        picture = <img src={require('../../../../../assets/img/placeholder-user.png')} alt=""/>
      }
    } 

    else {
      direction = 'messages-detail__message--from'

      if (users[sender.id] && users[sender.id].profileImageUrl) {
        picture = <img src={users[sender.id].profileImageUrl} />
      } else {
        picture = <img src={require('../../../../../assets/img/placeholder-user.png')} alt=""/>
      }
    }

    const hasRead = (read && read[customerId] && lastUserMessageKey == key) ? true : false

    const elapsedTime = Date.now() - createdAt * 1000
    const secondsDay = 24 * 60 * 60 * 1000
    const momentFormat = (elapsedTime < secondsDay) ? 'LT' : 'l LT' 

    return (
      <div className={'messages-detail__message ' + direction}>
        <div className="messages-detail__sender">
          {picture}
        </div>
        <div className="messages-detail__bubble messages-detail__bubble--image">
          <img src={imageUrl} onLoad={scrollToBottom} />
        </div>
        <div className="messages-detail__footer">
          {hasRead && <div className="messages-detail__seen"><i className="mu mu-check-tick"></i> <p>Seen</p></div>}
          <span className="messages-detail__time">{moment(createdAt * 1000).format(momentFormat)}</span>
        </div>
      </div>
    )
  }
}
