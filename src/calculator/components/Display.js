import React from 'react'
import PropTypes from 'prop-types';
import { Col, Well } from 'react-bootstrap'

const CalculatorDisplay = (props) => (
  <Col className='calculator-display' xs={12}>
		<Well className='lead text-right'>
			{(props.displayTotal) ? props.total : props.entry}
		</Well>
	</Col>
)
CalculatorDisplay.propTypes = {
  entry: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	displayTotal: PropTypes.bool.isRequired
}

export default CalculatorDisplay
