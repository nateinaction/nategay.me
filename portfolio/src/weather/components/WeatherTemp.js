import React, { PropTypes } from 'react'

const WeatherTemp = (props) => (
	<span className='temp' onClick={() => props.onScaleClick()}>{props.temp[props.scale]}°{props.scale}</span>
)
WeatherTemp.propTypes =  {
	temp: PropTypes.object,
	scale: PropTypes.string.isRequired,
	onScaleClick: PropTypes.func.isRequired
}

export default WeatherTemp
