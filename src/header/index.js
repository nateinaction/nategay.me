import React from 'react'
import { Grid, Row, Col, Image, ButtonToolbar, Button } from 'react-bootstrap'
import './index.css'
import profileImage from '../assets/images/avatar.png'

const Header = (props) => (
  <Grid className='section dark-section header' fluid>
    <Row>
    <Col xs={12} className='text-center'>
      <Image src={profileImage} className='profile-image' circle />
    </Col>
    </Row>
    <Row>
    <Col xs={12}>
      <h1>Nate Gay</h1>
    </Col>
    </Row>
    <Row>
    <Col xs={10} xsOffset={1} md={12} mdOffset={0}>
      <h4>{'🚀 Think and do.'}</h4>
    </Col>
    </Row>
    <Row>
    <Col xs={12} className='header-buttons text-center'>
      <ButtonToolbar>
        <Button bsStyle='primary' bsSize='large' href='https://github.com/nateinaction/'>Github</Button>
        <Button bsStyle='primary' bsSize='large' href='https://www.linkedin.com/in/nate-gay'>LinkedIn</Button>
        <Button bsStyle='primary' bsSize='large' href='mailto:email@nategay.me'>Email</Button>
      </ButtonToolbar>
    </Col>
    </Row>
  </Grid>
)

export default Header
