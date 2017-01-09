import React from 'react'
import { Grid, Row, Col, Image, ButtonToolbar, Button } from 'react-bootstrap'
import profileImage from '../../public/images/profile-photo-512.png'

const Header = (props) => (
  <Grid className='header' fluid>
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
      <h4>{'Hi! I\'m Nate, a front-end developer and dog lover.'}</h4>
    </Col>
    </Row>
    <Row>
    <Col xs={12} className='header-buttons text-center'>
      <ButtonToolbar>
        <Button bsStyle='primary' bsSize='large' href='https://github.com/nateinaction/'>Github</Button>
        <Button bsStyle='success' bsSize='large'>Resume</Button>
      </ButtonToolbar>
    </Col>
    </Row>
  </Grid>
)

export default Header
