import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// projects
import projects from '../projects/reducers'

// languages and interests
import languages from '../languages/reducers'

// calculator
import calculator from '../calculator/reducers/index'

// simon
import simon from '../simon/reducers/index'

// awards
import awards from '../awards/reducers'

// education
import education from '../education/reducers'

// career
import career from '../career/reducers'

// intercultural
import intercultural from '../intercultural/reducers'

/*
 * Redux Combine Reducers
 */

const portfolioApp = combineReducers({
  projects,
  languages,
  calculator,
  simon,
  awards,
  education,
  career,
  intercultural
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
/*
console.log('initial state')
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
*/
