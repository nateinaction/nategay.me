import React, { PropTypes } from 'react'

const WeatherTemp = (props) => {
	let scale = (props.scale === 'fahrenheit') ? 'F' : 'C'
	return (
		<h3 className='temp' onClick={() => props.onScaleClick()}>
			{props.temp[props.scale]}°{scale}
		</h3>
	)
}
WeatherTemp.propTypes =  {
	temp: PropTypes.object,
	scale: PropTypes.string.isRequired,
	onScaleClick: PropTypes.func.isRequired
}

export default WeatherTemp
