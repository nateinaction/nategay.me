import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'

const VerifyButton = (props) => {
  if (props.href) {
    return (
      <Button
        href={props.href}
        bsStyle='default'
        bsSize='large'>
        Click to Verify
      </Button>
    )
  }
  return null
}
VerifyButton.propTypes = {
  href: PropTypes.string
}

export default VerifyButton
