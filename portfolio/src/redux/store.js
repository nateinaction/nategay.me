import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// projects
import projects from '../projects/reducers'

// certificates
import certificates from '../certificates/reducers'

// languages and interests
import languages from '../languages/reducers'

// calculator
import calculator from '../calculator/reducers/index'

// simon
import simon from '../simon/reducers/index'

// weather
import weather from '../weather/reducers/index'

// awards
import awards from '../awards/reducers'

/*
 * Redux Combine Reducers
 */

const portfolioApp = combineReducers({
  certificates,
  projects,
  languages,
  calculator,
  simon,
  weather,
  awards
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
