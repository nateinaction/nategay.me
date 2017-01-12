const operation = (state = null, action) => {
	switch (action.type) {
		case 'ALL_CLEAR':
			return null
		case 'ADD_TO_TOTAL':
		case 'SUBTRACT_FROM_TOTAL':
		case 'MULTIPLY_WITH_TOTAL':
		case 'DIVIDE_FROM_TOTAL':
		case 'SET_TOTAL':
		case 'SET_OPERATION':
			return action.operation
		default:
			return state
	}
}

export default operation
