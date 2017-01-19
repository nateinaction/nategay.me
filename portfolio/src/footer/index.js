import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const Footer = (props) => (
  <Grid className='section dark-section footer' fluid>
    <Row>
      <Col xs={12} className='text-center'>
        <h4>{'Thanks for visiting!'}</h4>
      </Col>
    </Row>
  </Grid>
)

export default Footer
