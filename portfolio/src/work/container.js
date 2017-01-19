import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import Item from './components/Item'
import Image from './components/Image'

const Work = (props) => (
  <Grid className='section light-section awards' fluid>
    <Row>
      <Col xs={12} md={10} mdOffset={1}>
      <h2>Work</h2>
      <Image />
  	  {props.work.map((experience, index) => (
  	    <Item
  	      key={index}
  	      name={experience.name}
          description={experience.description} />
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
