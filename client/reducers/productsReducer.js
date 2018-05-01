const PUT_PRODUCT = 'products/PUT_PRODUCT'
const PUT_PRODUCTS = 'products/PUT_PRODUCTS'
const CLEAR_PRODUCTS = 'products/CLEAR_PRODUCTS'

const INCREMENT_LIMIT = 'products/INCREMENT_LIMIT'

const SHOW_LOADER = 'products/SHOW_LOADER'
const HIDE_LOADER = 'products/HIDE_LOADER'

const SHOW_CONFIRM_MODAL = 'products/SHOW_CONFIRM_MODAL'
const HIDE_CONFIRM_MODAL = 'products/HIDE_CONFIRM_MODAL'

const initState = {
	loading: false,
	products: [],
	visibleLimit: 50,
	confirmModalVisible: false
}

export default function matches(state = initState, action = {}) {
	switch (action.type) {
		case PUT_PRODUCT:
			return Object.assign({}, state, {
				products: [
					...state.products,
					action.product
				]
			})

		case PUT_PRODUCTS:
			return Object.assign({}, state, { 
				products: action.products 
			})

		case CLEAR_PRODUCTS:
			return Object.assign({}, state, {
				products: []
			})

		case INCREMENT_LIMIT:
			return Object.assign({}, state, {
				visibleLimit: state.visibleLimit + action.offset
			})
		
		case SHOW_LOADER:
			return Object.assign({}, state, {
				loading: true
			})
		
		case HIDE_LOADER:
			return Object.assign({}, state, {
				loading: false
			})

		case SHOW_CONFIRM_MODAL:
			return Object.assign({}, state, {
				confirmModalVisible: true
			})
		
		case HIDE_CONFIRM_MODAL:
			return Object.assign({}, state, {
				confirmModalVisible: false
			})
			
		default:
			return state
	}
}

export function putProduct(product) {
	return { type: PUT_PRODUCT, product }
}

export function putProducts(products) {
	return { type: PUT_PRODUCTS, products }
}

export function clearProducts() {
	return { type: CLEAR_PRODUCTS }
}

export function incrementLimit(offset) {
	return { type: INCREMENT_LIMIT, offset }
}

export function showLoader() {
	return { type: SHOW_LOADER }
}

export function hideLoader() {
	return { type: HIDE_LOADER }
}

export function showConfirmModal() {
	return { type: SHOW_CONFIRM_MODAL }
}

export function hideConfirmModal() {
	return { type: HIDE_CONFIRM_MODAL }
}