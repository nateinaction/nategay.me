import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Col, Button } from 'react-bootstrap'
import calculatorAction from '../redux/calculatorActions'

const ButtonCommand = (props) => (
	<Button
		bsStyle={props.bsStyle}
		block
		onClick={() => props.onClick()} >
		{props.contents}
	</Button>
)
ButtonCommand.propTypes = {
	onClick: PropTypes.func.isRequired,
	bsStyle: PropTypes.string.isRequired,
	contents: PropTypes.string.isRequired
}

const ButtonOperation = (props) => (
	<Button
		block
		bsStyle={props.operation === props.operationState ? 'primary' : 'info'}
		onClick={() => props.onClick(props.operation)} >
		{props.visualSymbol}
	</Button>
)
ButtonOperation.propTypes = {
	operation: PropTypes.string.isRequired,
	operationState: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	visualSymbol: PropTypes.string.isRequired
}

const ButtonNumber = (props) => (
	<Button
		block
		onClick={() => props.onClick(props.number)} >
		{props.number}
	</Button>
)
ButtonNumber.propTypes = {
	number: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
}

const CalculatorButtons = (props) => (
	<Col id='calculator-buttons' xs={12} md={6} mdOffset={3}>
  	<Col className='calculator-column' xs={3}>
  		<ButtonCommand contents='AC' bsStyle='danger' onClick={props.handleAllClearClick} />
  		<ButtonNumber number={7} onClick={props.handleAppendToEntry} />
  		<ButtonNumber number={4} onClick={props.handleAppendToEntry} />
  		<ButtonNumber number={1} onClick={props.handleAppendToEntry} />
  		<ButtonNumber number={0} onClick={props.handleAppendToEntry} />
  	</Col>
  	<Col className='calculator-column' xs={3}>
  		<ButtonCommand contents='CE' bsStyle='warning' onClick={props.handleClearEntryClick} />
  		<ButtonNumber number={8} onClick={props.handleAppendToEntry} />
  		<ButtonNumber number={5} onClick={props.handleAppendToEntry} />
  		<ButtonNumber number={2} onClick={props.handleAppendToEntry} />
  	</Col>
  	<Col className='calculator-column' xs={3}>
  		<ButtonCommand contents='=' bsStyle='success' onClick={props.handleShowTotal} />
  		<ButtonNumber number={9} onClick={props.handleAppendToEntry} />
  		<ButtonNumber number={6} onClick={props.handleAppendToEntry} />
  		<ButtonNumber number={3} onClick={props.handleAppendToEntry} />
  	</Col>
  	<Col className='calculator-column' xs={3}>
  		<ButtonOperation visualSymbol='+' operation='add' operationState={props.operation} onClick={props.handlePerformOperation} />
 			<ButtonOperation visualSymbol='–' operation='subtract' operationState={props.operation} onClick={props.handlePerformOperation} />
			<ButtonOperation visualSymbol='x' operation='multiply' operationState={props.operation} onClick={props.handlePerformOperation} />
			<ButtonOperation visualSymbol='÷' operation='divide' operationState={props.operation} onClick={props.handlePerformOperation} />
  	</Col>
  </Col>
)
CalculatorButtons.propTypes = {
	operation: PropTypes.string,
	handleAllClearClick: PropTypes.func.isRequired,
	handleClearEntryClick: PropTypes.func.isRequired,
	handleAppendToEntry: PropTypes.func.isRequired,
	handlePerformOperation: PropTypes.func.isRequired,
	handleShowTotal: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	operation: state.operation
})

const mapDispatchToProps = (dispatch) => ({
	handleAllClearClick: () => {
		dispatch(calculatorAction.allClear())
	},
	handleClearEntryClick: () => {
		dispatch(calculatorAction.clearEntry())
	},
	handleAppendToEntry: (input) => {
		dispatch(calculatorAction.appendToEntry(input))
	},
	handlePerformOperation: (operation) => {
		dispatch(calculatorAction.performOperation(operation))
	},
	handleShowTotal: () => {
		dispatch(calculatorAction.showTotal())
	}
})

const CalculatorButtonsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CalculatorButtons)

export default CalculatorButtonsContainer
