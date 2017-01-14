import React, { PropTypes } from 'react'

const WeatherIcon = (props) => (
	<i className={'wi wi-wu-' + props.icon} />
)
WeatherIcon.propTypes =  {
	icon: PropTypes.string
}

export default WeatherIcon
