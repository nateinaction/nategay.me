import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'

const Footer = (props) => (
  <Grid className='footer' fluid>
    <Row>
      <Col xs={12} className='text-center'>
        {'Updated in January 2017 by Nate Gay'}
      </Col>
    </Row>
  </Grid>
)

export default Footer
