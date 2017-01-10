/*
 * Redux Reducers
 */

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

const calculatorReducers = {entry, operation, total, displayTotal}
export default calculatorReducers
