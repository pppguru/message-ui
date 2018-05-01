import React, { Component } from 'react'
import moment from 'moment'
import Loader from '../../../common/Loader'
import PersonPhoto from 'components/dashboard/common/PersonPhoto'

export default class OfferMessage extends Component {
  render() {
    const {
      message,
      offers,
      user,
      read,
      lastUserMessageKey,
      customerId
    } = this.props

    const picture = user.profileImageUrl ? <PersonPhoto photoUrl={user.profileImageUrl} isUser={true} /> : <img src={require('../../../../../assets/img/placeholder-user.png')} alt=""/>

    const hasRead = (read && read[customerId] && lastUserMessageKey == message.key) ? true : false

    const offer = offers[message.value.data.offerId]

    let offerData

    if (offer && offer.expired) {
      offerData = 
        <div className="offer offer--expired">
          <h3 className="offer__heading">(Offer expired)</h3>
        </div>
    }

    else if (offer) {
      offerData = 
        <div className="offer">
          <h3 className="offer__heading">Items</h3>
          <ul className="offer__list">
            {offer && offer.products && offer.products.map((product, index) => {
              let image = null

              if (product.images[0] && product.images[0].small) {
                image = <div className="product-image-loader"><img src={product.images[0].small} alt=""/></div>
              } else {
                image = <div className="product-image-placeholder"><i className="mu mu-cart"></i></div>
              }

              return (
                <li className="offer__item" key={index}>
                  <div className="offer__picture">
                    {image}
                  </div>
                  <div className="offer__description">
                    <h4 className="offer__title">{product.quantity} x {product.name}</h4>
                    <div className="offer__price">&#36;{(product.price / 100)}</div>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="offer__total">
            <div className="offer__total-price">Total: <span>&#36;{offer && offer.price / 100}</span></div>
          </div>
        </div>
    } 

    else {
      offerData = <div className="offer"><Loader visible="true" margin="true" /></div>
    }

    const elapsedTime = Date.now() - message.value.createdAt * 1000
    const secondsDay = 24 * 60 * 60 * 1000
    const momentFormat = elapsedTime < secondsDay ? 'LT': 'l LT'
    const createdAt = moment(message.value.createdAt * 1000).format(momentFormat)

    return (
      <div className="messages-detail__message messages-detail__message--to">
        <div className="messages-detail__sender">
          {picture}
        </div>
        <div className="messages-detail__bubble">
          {(message.value.data.text)
            ? <div className="messages-detail__content">{message.value.data.text}</div>
            : null
          }
          <div className="messages-detail__offer">
            {offerData}
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
