import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'
import CalculatorDisplay from './Display'
import CalculatorButton from './Button'

const buttonGroups = [
  ['AC', 7, 4, 1, 0],
  ['CE', 8, 5, 2],
  ['=', 9, 6, 3],
  ['+', '–', 'x', '÷']
]

const CalculatorApp = (props) => (
  <Col className='calculator-app' xs={12} md={5}>
  	<CalculatorDisplay
      entry={props.entry}
      total={props.total}
      displayTotal={props.displayTotal} />
    <Col id='calculator-buttons' xs={12}>
      {buttonGroups.map((group, indexOne) => (
        <Col key={indexOne} className='calculator-column' xs={3}>
          {group.map((buttonText, indexTwo) => (
            <CalculatorButton
              key={indexTwo}
              buttonText={buttonText}
              onAllClearClick={props.handleAllClearClick}
              onClearEntryClick={props.handleClearEntryClick}
              onShowTotal={props.handleShowTotal}
              onAppendToEntry={props.handleAppendToEntry}
              onPerformOperation={props.handlePerformOperation}
              operationState={props.operationState} />
          ))}
        </Col>
      ))}
    </Col>
  </Col>
)
CalculatorApp.propTypes = {
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

export default CalculatorApp
