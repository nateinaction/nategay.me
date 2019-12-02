import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './index.css'

const Footer = (props) => (
  <Grid className='section dark-section footer' fluid>
    <Row>
      <Col xs={12} className='text-center'>
        <h4>{'Thanks for visiting!'}</h4>
      </Col>
      <Col xs={12} className='text-center footer-info'>
        <p>
          {'View this site\'s source code on '}
          <a href='https://github.com/nateinaction/nategay.me' alt='Link to source on Github'>
            Github
          </a>
          {'.'}
        </p>
      </Col>
    </Row>
  </Grid>
)

export default Footer
