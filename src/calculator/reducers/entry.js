const entry = (state = 0, action) => {
	switch (action.type) {
		case 'ALL_CLEAR':
		case 'CLEAR_ENTRY':
		case 'ADD_TO_TOTAL':
		case 'SUBTRACT_FROM_TOTAL':
		case 'MULTIPLY_WITH_TOTAL':
		case 'DIVIDE_FROM_TOTAL':
		case 'SET_TOTAL':
			return 0
		case 'SET_ENTRY':
			return action.entry
		default:
			return state
	}
}

export default entry
