const SHOW_LOADER = 'settingsDepartments/SHOW_LOADER'
const HIDE_LOADER = 'settingsDepartments/HIDE_LOADER'

const PUT_DEPARTMENTS = 'settingsDepartments/PUT_DEPARTMENTS'
const CLEAR_DEPARTMENTS = 'settingsDepartments/CLEAR_DEPARTMENTS'

const INCREMENT_LIMIT = 'settingsDepartments/INCREMENT_LIMIT'

const SHOW_CONFIRM_MODAL = 'settingsDepartments/SHOW_CONFIRM_MODAL'
const HIDE_CONFIRM_MODAL = 'settingsDepartments/HIDE_CONFIRM_MODAL'


const initialState = {
	loading: false,
	departments: [],
	visibleLimit: 50,
	confirmModalVisible: false
}

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case SHOW_LOADER:
			return Object.assign({}, state, {
				loading: true
			})

		case HIDE_LOADER:
			return Object.assign({}, state, {
				loading: false
			})

		case PUT_DEPARTMENTS:
			return Object.assign({}, state, {
				departments: action.departments
			})

		case CLEAR_DEPARTMENTS:
			return Object.assign({}, state, {
				departments: []
			})

		case INCREMENT_LIMIT:
			return Object.assign({}, state, {
				visibleLimit: state.visibleLimit + action.offset
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

export function showLoader() {
	return { type: SHOW_LOADER }
}

export function hideLoader() {
	return { type: HIDE_LOADER }
}

export function putDepartments(departments) {
	return { type: PUT_DEPARTMENTS, departments }
}

export function clearDepartments() {
	return { type: CLEAR_DEPARTMENTS }
}

export function incrementLimit(offset) {
	return { type: INCREMENT_LIMIT, offset }
}

export function showConfirmModal() {
	return { type: SHOW_CONFIRM_MODAL }
}

export function hideConfirmModal() {
	return { type: HIDE_CONFIRM_MODAL }
}
