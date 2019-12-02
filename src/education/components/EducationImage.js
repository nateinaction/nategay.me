import React from 'react'
import { Col ,Thumbnail } from 'react-bootstrap'
import educationImage from '../../assets/images/nate-grad-800px.jpg'

const EducationImage = (props) => (
  <Col xs={12} md={6}>
    <Thumbnail
      src={educationImage}
      alt='University Graduation Summer 2016' />
  </Col>
)

export default EducationImage
