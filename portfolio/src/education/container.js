import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import Degree from './components/Degree'
import EducationImage from './components/EducationImage'

const Education = (props) => (
  <Grid className='section light-section education' fluid>
    <Row>
      <Col xs={12} md={10} mdOffset={1}>
      <h2>Education</h2>
      <EducationImage />
  	  {props.education.map((degree, index) => (
  	    <Degree
  	      key={index}
  	      name={degree.name}
          description={degree.description} />
    	  ))}
      </Col>
    </Row>
  </Grid>
)
Education.propTypes =  {
	education: PropTypes.array.isRequired
}

/*
 * React-Redux Container Components
 */

const mapStateToProps = (state) => ({
	education: state.education
})

const EducationContainer = connect(
	mapStateToProps
)(Education)

export default EducationContainer
