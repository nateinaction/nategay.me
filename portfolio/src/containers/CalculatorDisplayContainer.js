import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Col, Well } from 'react-bootstrap'

const CalculatorDisplay = (props) => (
	<Col className='calculator-column' xs={12} md={6} mdOffset={3}>
		<Well className='lead text-right'>
			{(props.displayTotal) ? props.total : props.entry}
		</Well>
	</Col>
)
CalculatorDisplay.propTypes = {
	entry: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
	entry: state.entry,
	total: state.total,
	displayTotal: state.displayTotal
})

const CalculatorDisplayContainer = connect(
	mapStateToProps
)(CalculatorDisplay)

export default CalculatorDisplayContainer
