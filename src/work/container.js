import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import Item from './components/Item'
//import Image from './components/Image'

const Work = (props) => (
  <Grid className='section awards' fluid>
    <Row>
      <Col xs={12} md={10} mdOffset={1}>
      <h2>Work</h2>
  	  {props.work.map((experience, index) => (
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
Work.propTypes =  {
	work: PropTypes.array.isRequired
}

/*
 * React-Redux Container Components
 */

const mapStateToProps = (state) => ({
	work: state.work
})

const WorkContainer = connect(
	mapStateToProps
)(Work)

export default WorkContainer
