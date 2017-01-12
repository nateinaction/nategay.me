import React, { PropTypes } from 'react'
import { Col, Well } from 'react-bootstrap'

const CalculatorDisplay = (props) => (
  <Col className='calculator-column' xs={12}>
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
