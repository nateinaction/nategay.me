import { combineReducers } from 'redux'

import message from './message'
import display from './display'
import fetching from './fetching'
import conditions from './conditions'

/*
weather: {
	message: 'Could not access your location.'
	display: {scale: 'F'},
	fetching: {coords: false, weather: false},
	weather: {
		location: 'Austin, TX',
		temp: {F: 45, C: 7},
		condition: 'cloudy',
		icon: 'cloudy'
	}
}
*/

const weather = combineReducers({
	message,
	display,
	fetching,
	conditions
})

export default weather
