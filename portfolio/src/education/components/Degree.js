import React, { PropTypes } from 'react'
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import VerifyButton from '../../shared/VerifyButton'

const Honors = (props) => {
  if (props.honors) {
    return (
      <p><strong>{'Honors: '}</strong>{props.honors}</p>
    )
  }
  return null
}

const Degree = (props) => (
  <Col xs={12} md={6} className={'degree'}>
    <ListGroup>
      <ListGroupItem className={'text-center'}>
        <h3>{props.name}</h3>
        <p><strong>{props.university + ', '}</strong>{props.date}</p>
        <Honors honors={props.honors} />
        <VerifyButton href={props.href} />
      </ListGroupItem>
    </ListGroup>
	</Col>
)
Degree.propTypes = {
  name: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  honors: PropTypes.string,
  href: PropTypes.string
}

export default Degree
