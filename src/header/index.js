import React from 'react'
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap'
import './index.css'
import profileImage from '../assets/images/avatar.png'
import profileImageWebp from '../assets/images/avatar.webp'

const Header = (props) => (
  <Grid className='section dark-section header' fluid>
    <Row>
    <Col xs={12} className='text-center'>
      <picture>
        <source srcSet={profileImageWebp} type="image/webp"/>
        <source srcSet={profileImage} type="image/jpeg"/> 
        <img src={profileImage} className='profile-image' alt="Nate Gay's avatar"></img>
      </picture>
    </Col>
    </Row>
    <Row>
    <Col xs={12}>
      <h1>Nate Gay</h1>
    </Col>
    </Row>
    <Row>
    <Col xs={10} xsOffset={1} md={12} mdOffset={0}>
      <h4 className={'motto'}>{'🚀 Think and do.'}</h4>
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
