const player = (state = [], action) => {
	switch (action.type) {
		case 'CLEAR_ALL':
		case 'CLEAR_PLAYER':
		case 'SET_TURN':
		case 'NEXT_LEVEL':
			return []
		case 'ADD_TO_PLAYER':
			return [...state, action.item]
		default:
			return state
	}
}

export default player
