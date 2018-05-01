import React, { Component } from 'react'
import moment from 'moment'
import PersonPhoto from 'components/dashboard/common/PersonPhoto'
import linkifyHtml from 'linkifyjs/html'

export default class TextMessage extends Component {
  render() {
    const {
      message: {
        key,
        value
      },
      users,
      user,
      read,
      lastUserMessageKey,
      customerId
    } = this.props

    let direction
    let picture
    
    if (value.sender.id == user.id) {
      direction = 'messages-detail__message--to'

      if (user.profileImageUrl) {
        picture = <PersonPhoto photoUrl={user.profileImageUrl} isUser={true} />
      } else {
        picture = <img src={require('../../../../../assets/img/placeholder-user.png')} alt=""/>
      }
    } 

    else if (value.sender.lastName == 'BOT') {
      direction = 'messages-detail__message--to'
      picture = <img src={require('../../../../../assets/img/bot-icon.png')} alt=""/>     
    }

    else {
      direction = 'messages-detail__message--from'

      if (users[value.sender.id] && users[value.sender.id].profileImageUrl) {
        picture = <img src={users[value.sender.id].profileImageUrl} />
      } else {
        picture = <img src={require('../../../../../assets/img/placeholder-user.png')} alt=""/>
      }
    }

    const hasRead = (read && read[customerId] && lastUserMessageKey == key) ? true : false

    let createdAt
    
    const elapsedTime = Date.now() - value.createdAt * 1000
    const secondsDay = 24 * 60 * 60 * 1000

    if (elapsedTime < secondsDay) {
      createdAt = moment(value.createdAt * 1000).format('LT')
    } else {
      createdAt = moment(value.createdAt * 1000).format('l LT')
    }

    return (
      <div className={'messages-detail__message ' + direction}>
        <div className="messages-detail__sender">
          {picture}
        </div>
        <div className="messages-detail__bubble">
          <div className="messages-detail__content">
            <div dangerouslySetInnerHTML={{ __html: linkifyHtml(value.data.text, {
                  defaultProtocol: 'http'
                }) }} className="messages-detail__text" />
          </div>
        </div>
        <div className="messages-detail__footer">
          {hasRead && <div className="messages-detail__seen"><i className="mu mu-check-tick"></i> <p>Seen</p></div>}
          <span className="messages-detail__time">{createdAt}</span>
        </div>
      </div>
    )
  }
}
