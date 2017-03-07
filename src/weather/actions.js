import { Lokka } from 'lokka'
import { Transport } from 'lokka-transport-http'

const client = new Lokka({
  transport: new Transport('https://api.nategay.me/')
})

const fetchQuery = (lat = `30.223221`, lon = `-97.740359`) => (
  client.query(`
    {
      now(lat:"${lat}", lon:"${lon}") {
				location
		    weather
		    icon
		    temp {
		      fahrenheit
		      celsius
		    }
			}
    }
  `)
)

const setMessage = (message) => ({
	type: 'SET_MESSAGE',
	message
})

const setFetching = () => ({
	type: 'FETCHING'
})

const setWeather = (obj) => ({
	type: 'SET_WEATHER',
	obj
})

const toggleScale = (obj) => ({
	type: 'TOGGLE_SCALE',
	obj
})

const scaleClick = () => (
	(dispatch, getState) => {
		let { weather } = getState()
		let obj = (weather.display.scale === 'fahrenheit') ? {scale: 'celsius'} : {scale: 'fahrenheit'}
		return dispatch(toggleScale(obj))
	}
)

const fetchWeather = (lat, lon) => (
  (dispatch) => {
    dispatch(setFetching())
    return fetchQuery(lat, lon)
			.then(res => (
				dispatch(setWeather(res.now))
			))
		  .catch(err => {
				if (err) console.log(err)
		  	return dispatch(setMessage('Unable to connect to Weather Underground. Please check your internet connection.'))
		  });
  }
)

const fetchCoords = () => (
  (dispatch) => {
		dispatch(setFetching())
    navigator.geolocation.getCurrentPosition((pos) => {
			return dispatch(fetchWeather(pos.coords.latitude, pos.coords.longitude))
		}, (err) => {
			if (err) {
        console.log(err.stack);
    	}
			return dispatch(setMessage('Unable to access your location. Please check your privacy settings.'))
		})
  }
)


const actions = {
  scaleClick,
  fetchWeather,
	fetchCoords
}

export default actions
