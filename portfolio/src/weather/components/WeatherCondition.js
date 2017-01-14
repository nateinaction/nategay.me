import React, { PropTypes } from 'react'

const WeatherCondition = (props) => (
	<span>{props.condition}</span>
)
WeatherCondition.propTypes =  {
	condition: PropTypes.string
}

export default WeatherCondition
