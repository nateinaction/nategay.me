const level = (state = 1, action) => {
 	switch (action.type) {
 		case 'CLEAR_ALL':
		case 'CLEAR_PLAYER':
 			return 1
 		case 'NEXT_LEVEL':
 			return state + 1
 		default:
 			return state
 	}
}

export default level
