import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import Item from './components/Item'

const Career = (props) => (
  <Grid className='section career neutral-section' fluid>
    <Row>
      <Col xs={12} md={10} mdOffset={1}>
      <h2>Career</h2>
  	  {props.career.map((experience, index) => (
  	    <Item
  	      key={index}
  	      name={experience.name}
          description={experience.description}
          dates={experience.dates} />
    	  ))}
      </Col>
    </Row>
  </Grid>
)
Career.propTypes =  {
	career: PropTypes.array.isRequired
}

/*
 * React-Redux Container Components
 */

const mapStateToProps = (state) => ({
	career: state.career
})

const CareerContainer = connect(
	mapStateToProps
)(Career)

export default CareerContainer
