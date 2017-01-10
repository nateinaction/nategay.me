import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'
import Interest from './interest'

const Interests = (props) => (
  <Col xs={12} md={5}>
    <Col xs={12}>
      <h2>{'Interests'}</h2>
    </Col>
    {props.interests.map((interest, index) => (
      <Interest
        key={index}
        image={interest.image}
        description={interest.description} />
    ))}
  </Col>
)
Interests.propTypes = {
  interests: PropTypes.array.isRequired
}

export default Interests
