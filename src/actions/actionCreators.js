import {
	LOAD_GROUP,
	SHOW_FIELD,
} from './actionTypes.js'

const loadGroup = (activeGroup=null) => ({
	type: LOAD_GROUP,
	activeGroup
})

const showField = (activeField=null) => {
	return {
		type: SHOW_FIELD,
		activeField
	}
}

export {
	loadGroup,
	showField
}