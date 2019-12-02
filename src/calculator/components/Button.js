import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'

const isOneOfThese = (item, arr) => (
  (arr.indexOf(item) !== -1)
)

const buttonProps = (props) => {
  let defaultObj = {
    bsStyle: 'default',
    active: false,
    onClick: props.onAppendToEntry
  }
  let newObj = {}
  if (isOneOfThese(props.buttonText, ['+', '–', 'x', '÷'])) {
    newObj = {
      bsStyle: 'info',
      active: (props.buttonText === props.operationState),
      onClick: props.onPerformOperation
    }
  } else if (props.buttonText === '=') {
    newObj = {
      bsStyle: 'success',
      onClick: props.onShowTotal
    }
  } else if (props.buttonText === 'CE') {
    newObj = {
      bsStyle: 'warning',
      onClick: props.onClearEntryClick
    }
  } else if (props.buttonText === 'AC') {
    newObj = {
      bsStyle: 'danger',
      onClick: props.onAllClearClick
    }
  }
  return Object.assign({}, defaultObj, newObj)
}

const CalculatorButton = (props) => {
  let newProps = buttonProps(props)
  return (
    <Button
  		bsStyle={newProps.bsStyle}
      onClick={() => newProps.onClick(props.buttonText)}
      active={newProps.active}
  		block >
  		{props.buttonText}
  	</Button>
  )
}
CalculatorButton.propTypes = {
	operationState: PropTypes.string,
	onAllClearClick: PropTypes.func.isRequired,
	onClearEntryClick: PropTypes.func.isRequired,
	onAppendToEntry: PropTypes.func.isRequired,
	onPerformOperation: PropTypes.func.isRequired,
	onShowTotal: PropTypes.func.isRequired
}

export default CalculatorButton
