import React, { PropTypes } from 'react'

import WeatherTemp from './WeatherTemp'
import WeatherCondition from './WeatherCondition'

const WeatherTempAndCondition = (props) => (
	<h3>
		{'It is '}
		<WeatherTemp
			temp={props.weather.temp}
			scale={props.scale}
			onScaleClick={props.handleScaleClick} />
		{' and '}
		<WeatherCondition
			condition={props.weather.condition} />
		{' in'}
	</h3>
)
WeatherTempAndCondition.propTypes =  {
	weather: PropTypes.object.isRequired,
	scale: PropTypes.string.isRequired,
	handleScaleClick: PropTypes.func.isRequired
}

export default WeatherTempAndCondition
