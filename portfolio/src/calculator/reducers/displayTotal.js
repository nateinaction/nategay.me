const displayTotal = (state = true, action) => {
	switch (action.type) {
		case 'ALL_CLEAR':
		case 'ADD_TO_TOTAL':
		case 'SUBTRACT_FROM_TOTAL':
		case 'MULTIPLY_WITH_TOTAL':
		case 'DIVIDE_FROM_TOTAL':
		case 'SET_TOTAL':
		case 'SHOW_TOTAL':
			return true
		case 'CLEAR_ENTRY':
		case 'SET_ENTRY':
		case 'SHOW_ENTRY':
			return false
		default:
			return state
	}
}

export default displayTotal
