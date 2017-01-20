import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'
import './container.css'

import WeatherInfo from './components/Info'
import WeatherApp from './components/App'
import actions from './actions'

class Weather extends Component {
	componentDidMount() {
		this.props.handleFetchWeather()
	}
	render() {
		return (
			<Grid className="section light-section weather" fluid>
				<Row>
					<WeatherInfo />
					<WeatherApp
						weather={this.props.weather}
						scale={this.props.scale}
						fetching={this.props.fetching}
						message={this.props.message}
						handleScaleClick={this.props.handleScaleClick}
						handleFetchCoords={this.props.handleFetchCoords} />
				</Row>
		 	</Grid>
		)
	}
}
Weather.propTypes = {
	weather: PropTypes.object.isRequired,
	scale: PropTypes.string.isRequired,
	fetching: PropTypes.bool.isRequired,
	message: PropTypes.string,
	handleScaleClick: PropTypes.func.isRequired,
	handleFetchWeather: PropTypes.func.isRequired,
	handleFetchCoords: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	weather: state.weather.conditions,
	scale: state.weather.display.scale,
	fetching: state.weather.fetching,
	message: state.weather.message
})

const mapDispatchToProps = (dispatch) => ({
	handleFetchWeather: (lat, lon) => dispatch(actions.fetchWeather(lat, lon)),
	handleFetchCoords: () => dispatch(actions.fetchCoords()),
	handleScaleClick: () => dispatch(actions.scaleClick())
})

const WeatherContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Weather)

export default WeatherContainer
