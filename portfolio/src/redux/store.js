import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import projects from './projectsReducer'
import { entry, operation, total, displayTotal } from './calculatorReducers'

/*
 * Redux Combine Reducers
 */

const portfolioApp = combineReducers({
  projects,
  entry,
  operation,
  total,
  displayTotal
})

/*
 * Redux Store
 */

let store = createStore(portfolioApp, applyMiddleware(
	thunk
))

export default store

/*
 * Redux state to console log
 */

console.log('initial state')
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
