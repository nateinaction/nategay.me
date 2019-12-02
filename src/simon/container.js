import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'
import './container.css'

import SimonInfo from './components/Info'
import SimonApp from './components/App'
import StatusModal from './components/StatusModal'
import actions from './actions'

/*
 * React-Redux Container Components
 */

const Simon = (props) => (
	<Grid className='section light-section simon' fluid>
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
		<StatusModal
			turn={props.turn}
			handleHideModal={props.handleResetClick} />
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
