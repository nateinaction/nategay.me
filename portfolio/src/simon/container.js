import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'

import SimonInfo from './components/Info'
import SimonApp from './components/App'
import actions from './actions'

/*
 * React-Redux Container Components
 */

const Simon = (props) => (
	<Grid className='section simon' fluid>
		<Row>
		<SimonInfo />
		<SimonApp
			active={props.active}
			handleButtonClick={props.handleButtonClick}
			turn={props.turn}
			level={props.level}
			strict={props.strict}
			handlePlayClick={props.handlePlayClick}
			handleStrictClick={props.handleStrictClick}
			handleResetClick={props.handleResetClick} />
		</Row>
	</Grid>
)
Simon.propTypes =  {
	turn: PropTypes.string,
	level: PropTypes.number.isRequired,
	strict: PropTypes.bool.isRequired,
  active: PropTypes.object.isRequired,
	handleButtonClick: PropTypes.func.isRequired,
	handlePlayClick: PropTypes.func.isRequired,
	handleStrictClick: PropTypes.func.isRequired,
	handleResetClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	active: state.simon.active,
	turn: state.simon.turn,
	level: state.simon.level,
	strict: state.simon.strict
})

const mapDispatchToProps = (dispatch) => ({
	handleButtonClick: (id) => {
		dispatch(actions.buttonClick(id))
	},
	handlePlayClick: () => {
		dispatch(actions.setTurnToComputer())
	},
	handleStrictClick: () => {
		dispatch(actions.toggleStrict())
	},
	handleResetClick: () => {
		dispatch(actions.clearAll())
	}
})

const SimonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Simon)

export default SimonContainer
