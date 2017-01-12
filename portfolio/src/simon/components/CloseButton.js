import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

const CloseButton = (props) => (
	<Button
  	bsStyle="primary"
  	block={true}
  	onClick={() => {
  		return props.onHideModal()
  	}}>
    Close
  </Button>
)
CloseButton.propTypes = {
	onHideModal: PropTypes.func.isRequired
}

export default CloseButton
