const SHOW_FORM = 'forms/SHOW_FORM'
const HIDE_FORM = 'forms/HIDE_FORM'

const PUT_FORM_DATA = 'forms/PUT_FORM_DATA'

const CLEAR_FORM = 'forms/CLEAR_FORM'

const ADD_TO_SELECTED = 'forms/ADD_TO_SELECTED'
const ADD_ALL_TO_SELECTED = 'forms/ADD_ALL_TO_SELECTED'
const REMOVE_FROM_SELECTED = 'forms/REMOVE_FROM_SELECTED'
const CLEAR_SELECTED = 'forms/CLEAR_SELECTED'

const SUBMIT = 'forms/SUBMIT'
const SUBMIT_SUCCESS = 'forms/SUBMIT_SUCCESS'
const SUBMIT_ERROR = 'forms/SUBMIT_ERROR'

const SUBMIT_DELETE = 'forms/SUBMIT_DELETE'
const SUBMIT_DELETE_SUCCESS = 'forms/SUBMIT_DELETE_SUCCESS'

const SHOW_CONFIRM_MODAL = 'forms/SHOW_CONFIRM_MODAL'
const HIDE_CONFIRM_MODAL = 'forms/HIDE_CONFIRM_MODAL'

const SET_ERROR = 'forms/SET_ERROR'
const CLEAR_ERROR = 'forms/CLEAR_ERROR'

const SET_STEP = 'forms/SET_STEP'

const forms = [
	'assignEmployee',
	'offerProduct',
	'products',
	'departments',
	'createChannel',
	'addPeopleToChannel',
	'paymentMethod',
	'login',
	'signup',
	'reset',
	'resetPassword',
	'changePassword',
	'organizationMembers',
	'profile',
	'updateUser',
	'changeUserPassword',
	'deleteChannel',
	'attachment'
]

let initState = {}

for (let key in forms) {
	initState[forms[key]] = {
		isVisible: false,
		data: null,
		selected: [],
		isSubmitting: false,
		isDeleting: false,
		isEditing: false,
		step: 'default',
		message: null,
		confirmModalVisible: false,
		errorMessage: null
	}
}

export default function matches(state = initState, action = {}) {
	switch (action.type) {
		case SHOW_FORM:
			var newState = { ...state }

			newState[action.form].isVisible = true

			return newState

		case HIDE_FORM:
			var newState = { ...state }

			newState[action.form].isVisible = false

			return newState

		case PUT_FORM_DATA:
			var newState = { ...state }

			newState[action.form].data = action.data
			newState[action.form].isEditing = true

			return newState

		case CLEAR_FORM:
			var newState = { ...state }

			newState[action.form].data = null
			newState[action.form].isEditing = false
			newState[action.form].step = 'default'
			newState[action.form].message = null

			return newState

		case ADD_TO_SELECTED:
			var newState = { ...state }
			
			newState[action.form].selected = [
				...newState[action.form].selected,
				action.selected
			]

			return Object.assign({}, state, { newState })

		case ADD_ALL_TO_SELECTED:
			var newState = { ...state }

			newState[action.form].selected = action.selected

			return Object.assign({}, state, { newState })

		case REMOVE_FROM_SELECTED:
			var newState = { ...state }

			var index = _.indexOf(state[action.form].selected, action.selected)

			newState[action.form].selected = [
				...state[action.form].selected.slice(0, index),
				...state[action.form].selected.slice(index + 1)
			]

			return newState

		case CLEAR_SELECTED:
			var newState = { ...state }

			newState[action.form].selected = []

			return newState

		case SUBMIT:
			var newState = { ...state }

			newState[action.form].isSubmitting = true
			newState[action.form].step = 'default'

			return newState

		case SUBMIT_SUCCESS:
			var newState = { ...state }

			newState[action.form].isSubmitting = false
			newState[action.form].step = action.step
			newState[action.form].message = action.message

			return newState

		case SUBMIT_ERROR:
			var newState = { ...state }

			newState[action.form].isSubmitting = false
			newState[action.form].step = action.step
			newState[action.form].message = action.message

			return newState

		case SUBMIT_DELETE:
			var newState = { ...state }

			newState[action.form].isDeleting = true

			return newState

		case SUBMIT_DELETE_SUCCESS:
			var newState = { ...state }

			newState[action.form].isDeleting = false

			return newState

		case SHOW_CONFIRM_MODAL:
			var newState = { ...state }

			newState[action.form].confirmModalVisible = true

			return newState

		case HIDE_CONFIRM_MODAL:
			var newState = { ...state }

			newState[action.form].confirmModalVisible = false

			return newState

		case SET_ERROR:
			var newState = { ...state }

			newState[action.form].errorMessage = action.errorMessage

			return newState

		case CLEAR_ERROR:
			var newState = { ...state }

			newState[action.form].errorMessage = null

			return newState

		case SET_STEP:
			var newState = { ...state }

			newState[action.form].step = action.step

			return newState

		default:
			return state
	}
}

export function showForm(form) {
	return { type: SHOW_FORM, form }
}

export function hideForm(form) {
	return { type: HIDE_FORM, form }
}

export function putFormData(form, data) {
	return { type: PUT_FORM_DATA, form, data }
}

export function clearForm(form) {
	return { type: CLEAR_FORM, form }
}

export function addToSelected(form, selected) {
	return { type: ADD_TO_SELECTED, form, selected }
}

export function addAllToSelected(form, selected) {
	return { type: ADD_ALL_TO_SELECTED, form, selected }
}

export function removeFromSelected(form, selected) {
	return { type: REMOVE_FROM_SELECTED, form, selected }
}

export function clearSelected(form) {
	return { type: CLEAR_SELECTED, form }
}

export function submit(form) {
	return { type: SUBMIT, form }
}

export function submitSuccess(form, message = null, step = 'success') {
	return { type: SUBMIT_SUCCESS, form, message, step }
}

export function submitError(form, message = null, step = 'error') {
	return { type: SUBMIT_SUCCESS, form, message, step }
}

export function submitDelete(form) {
	return { type: SUBMIT_DELETE, form }
}

export function submitDeleteSuccess(form) {
	return { type: SUBMIT_DELETE_SUCCESS, form }
}

export function showConfirmModal(form) {
	return { type: SHOW_CONFIRM_MODAL, form }
}

export function hideConfirmModal(form) {
	return { type: HIDE_CONFIRM_MODAL, form }
}

export function setError(form, errorMessage) {
	return { type: SET_ERROR, form, errorMessage }
}

export function clearError(form) {
	return { type: CLEAR_ERROR, form }
}

export function setStep(form, step) {
	return { type: SET_STEP, form, step }
}