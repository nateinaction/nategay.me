const sequence = (state = [], action) => {
	switch (action.type) {
		case 'SET_SEQUENCE':
		case 'CLEAR_ALL':
			return action.sequence
		default:
			return state
	}
}

export default sequence
