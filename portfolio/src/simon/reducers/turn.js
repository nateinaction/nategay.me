const turn = (state = null, action) => {
	switch (action.type) {
		case 'CLEAR_ALL':
 			return null
		case 'SET_TURN':
 			return action.turn
		case 'NEXT_LEVEL':
 			return 'computer'
		default:
			return state
	}
}

export default turn
