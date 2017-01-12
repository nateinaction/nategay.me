const total = (state = 0, action) => {
	switch (action.type) {
		case 'ALL_CLEAR':
			return 0
		case 'ADD_TO_TOTAL':
			return state + action.entry
		case 'SUBTRACT_FROM_TOTAL':
			return state - action.entry
		case 'MULTIPLY_WITH_TOTAL':
			return state * action.entry
		case 'DIVIDE_FROM_TOTAL':
			return state / action.entry
		case 'SET_TOTAL':
			return action.total
		default:
			return state
	}
}

export default total
