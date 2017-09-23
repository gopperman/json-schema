import {
	LOAD_GROUP,
	SHOW_FIELD
} from '../actions/actionTypes.js'

const groupReducer = (state={
	fieldGroups: [],
	activeField: null,
	activeGroup: null
}, action) => {
	switch (action.type) {
		case LOAD_GROUP:
			return {
				...state,
				activeGroup: action.activeGroup
			}
		case SHOW_FIELD:
			return {
				...state,
				activeField: +action.activeField
			}
		default:
			return state
	}
}

export default groupReducer