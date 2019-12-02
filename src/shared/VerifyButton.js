import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'
import './verifyButton.css'

const VerifyButton = (props) => {
  if (props.href) {
    return (
      <Button
        href={props.href}
        bsStyle='default'>
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
