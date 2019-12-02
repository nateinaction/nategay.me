import React from 'react'
import PropTypes from 'prop-types';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import VerifyButton from '../../shared/VerifyButton'

const Item = (props) => (
  <Col xs={12} md={6}>
    <ListGroup>
      <ListGroupItem className='text-center'>
        <h3>{props.title}</h3>
        <VerifyButton href={props.href} />
      </ListGroupItem>
    </ListGroup>
  </Col>
)
Item.propTypes = {
	title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default Item
