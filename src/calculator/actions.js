/*
 * Redux Action Creators
 */

// clear
const allClear = () => ({
	type: 'ALL_CLEAR'
})

const clearEntry = () => ({
	type: 'CLEAR_ENTRY'
})

// set
const setEntry = (entry) => ({
	type: 'SET_ENTRY',
	entry
})

const setOperation = (operation) => ({
	type: 'SET_OPERATION',
	operation
})

const setTotal = (total, operation) => {
	operation = operation ? operation : null;
	return ({
		type: 'SET_TOTAL',
		total,
		operation
	})
}

// operations
const addToTotal = (entry, operation) => ({
	type: 'ADD_TO_TOTAL',
	entry,
	operation
})

const subtractFromTotal = (entry, operation) => ({
	type: 'SUBTRACT_FROM_TOTAL',
	entry,
	operation
})

const multiplyWithTotal = (entry, operation) => ({
	type: 'MULTIPLY_WITH_TOTAL',
	entry,
	operation
})

const divideFromTotal = (entry, operation) => ({
	type: 'DIVIDE_FROM_TOTAL',
	entry,
	operation
})

// async with thunk
const appendToEntry = (input) => {
	return (dispatch, getState) => {
    const { calculator } = getState()
    let entry = calculator.entry
    entry += input.toString()
		entry = parseInt(entry, 10)

		return dispatch(setEntry(entry))
	}
}

const performOperation = (operation) => {
	return (dispatch, getState) => {
    const { calculator } = getState()
    const { entry, total } = calculator
    const previousOperation = calculator.operation

    if (entry === 0) {
			return dispatch(setOperation(operation))
		}
		if (total === 0) {
			return dispatch(setTotal(entry, operation))
		}
		switch (previousOperation) {
			case '+': return dispatch(addToTotal(entry, operation))
			case '–': return dispatch(subtractFromTotal(entry, operation))
			case 'x': return dispatch(multiplyWithTotal(entry, operation))
			case '÷': return dispatch(divideFromTotal(entry, operation))
			default: return calculator;
		}
	}
}

const showTotal = () => {
	return (dispatch, getState) => {
		const { calculator } = getState()
		dispatch(performOperation(calculator.operation))
  }
}

const actions = {
  allClear,
  clearEntry,
  setEntry,
  setOperation,
  setTotal,
  addToTotal,
  subtractFromTotal,
  multiplyWithTotal,
  divideFromTotal,
  appendToEntry,
  performOperation,
  showTotal
}

export default actions
