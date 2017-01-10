import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'

const Footer = (props) => (
  <Grid className='footer' fluid>
    <Row>
      <Col xs={12} className='text-center'>
        <Button bsStyle='danger' bsSize='large' href='mailto:email@nategay.me'>Email Me</Button>
      </Col>
    </Row>
  </Grid>
)

export default Footer
