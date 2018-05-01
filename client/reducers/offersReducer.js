const PUT_OFFER = 'offers/PUT_OFFER'

const initialState = {
  offers: {}
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PUT_OFFER:
      var offers = { ...state.offers }

      offers[action.offer.id] = action.offer.value

      return Object.assign({}, state, { offers })

    default:
      return state
  }
}


export function putOffer(offer) {
  return { type: PUT_OFFER, offer }
}