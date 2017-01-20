import { combineReducers } from 'redux'

// calculator
import entry from './entry'
import operation from './operation'
import total from './total'
import displayTotal from './displayTotal'

/*
 * Redux Combine Reducers
 */

const calculator = combineReducers({
  entry,
  operation,
  total,
  displayTotal
})

export default calculator
