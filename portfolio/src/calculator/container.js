import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'

import CalculatorInfo from './components/Info'
import CalculatorApp from './components/App'
import actions from './actions'

const Calculator = (props) => (
	<Grid className='section calculator' fluid>
		<Row>
			<CalculatorInfo />
			<CalculatorApp
				entry={props.entry}
				total={props.total}
				displayTotal={props.displayTotal}
				handleAllClearClick={props.handleAllClearClick}
				handleClearEntryClick={props.handleClearEntryClick}
				handleShowTotal={props.handleShowTotal}
				handleAppendToEntry={props.handleAppendToEntry}
				handlePerformOperation={props.handlePerformOperation}
				operationState={props.operation}/>
		</Row>
	</Grid>
)
Calculator.propTypes = {
	operation: PropTypes.string,
	entry: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	displayTotal: PropTypes.bool.isRequired,
	handleAllClearClick: PropTypes.func.isRequired,
	handleClearEntryClick: PropTypes.func.isRequired,
	handleAppendToEntry: PropTypes.func.isRequired,
	handlePerformOperation: PropTypes.func.isRequired,
	handleShowTotal: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	operation: state.calculator.operation,
	entry: state.calculator.entry,
	total: state.calculator.total,
	displayTotal: state.calculator.displayTotal
})

const mapDispatchToProps = (dispatch) => ({
	handleAllClearClick: () => {
		dispatch(actions.allClear())
	},
	handleClearEntryClick: () => {
		dispatch(actions.clearEntry())
	},
	handleAppendToEntry: (input) => {
		dispatch(actions.appendToEntry(input))
	},
	handlePerformOperation: (operation) => {
		dispatch(actions.performOperation(operation))
	},
	handleShowTotal: () => {
		dispatch(actions.showTotal())
	}
})

const CalculatorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Calculator)

export default CalculatorContainer
