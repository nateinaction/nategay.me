import React from 'react'
import PropTypes from 'prop-types';
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
		message = 'Wow, you have completed level 20! Who knew you had such a great memory?'
		showModal = true
	}
	return (
	  <Modal show={showModal} onHide={props.handleHideModal}>
	    <Modal.Header closeButton>
	      <Modal.Title>{title}</Modal.Title>
	    </Modal.Header>
	    <Modal.Body>
	      <p>{message}</p>
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
