const activeDefault = {id: null, timestamp: null}
const active = (state = activeDefault, action) => {
	switch (action.type) {
		case 'CLEAR_ALL':
		case 'CLEAR_PLAYER':
		case 'TOGGLE_TURN':
		case 'DEACTIVATE_BUTTON':
			return activeDefault
		case 'ACTIVATE_BUTTON':
			return Object.assign({}, state, {
				id: action.id,
				timestamp: action.time
			})
		default:
			return state
	}
}

export default active
