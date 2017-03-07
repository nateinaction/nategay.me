const defConditions = {
	location: null,
	temp: {fahrenheit: null, celsius: null},
	weather: null,
	icon: null
}
const conditions = (state = defConditions, action) => {
	switch (action.type) {
		case 'SET_WEATHER':
			return Object.assign({}, state, action.obj)
		default:
			return state
	}
}

export default conditions
