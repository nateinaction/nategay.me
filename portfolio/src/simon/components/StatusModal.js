import React, { PropTypes } from 'react'
import { Modal } from 'react-bootstrap'
import CloseButton from './CloseButton'

const StatusModal = (props) => {
	let showModal = false
	let title = 'Ooops!'
	let message = 'Looks like you missed one. Want to try again?'
	if (props.turn === 'loss') {
		showModal = true
	}
	if (props.turn === 'win') {
		title = 'Congratulations!'
		message = 'Wow! Who knew you had such a great memory? Want to try again?'
		showModal = true
	}
	return (
	  <Modal show={showModal} onHide={props.handleHideModal}>
	    <Modal.Header closeButton>
	      <Modal.Title>{title}</Modal.Title>
	    </Modal.Header>
	    <Modal.Body>
	      {message}
	    </Modal.Body>
			<Modal.Footer>
				<CloseButton onHideModal={props.handleHideModal} />
			</Modal.Footer>
	  </Modal>
	)
}
StatusModal.propTypes = {
	turn: PropTypes.string,
	handleHideModal: PropTypes.func.isRequired
}

export default StatusModal
