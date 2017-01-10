import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import projects from '../projects/reducers'
import certificates from '../certificates/reducers'
import languages from '../languagesAndInterests/languages/reducers'
import interests from '../languagesAndInterests/interests/reducers'
//import { entry, operation, total, displayTotal } from './calculatorReducers'

/*
 * Redux Combine Reducers
 */

const portfolioApp = combineReducers({
  certificates,
  projects,
  languages,
  interests
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
