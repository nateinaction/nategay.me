const strict = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_STRICT':
			return !state
		default:
			return state
	}
}

export default strict
