import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import Item from './components/Item'

const Leadership = (props) => (
  <Grid className='section light-section awards' fluid>
    <Row>
      <Col xs={12} md={10} mdOffset={1}>
      <h2>Leadership</h2>
  	  {props.leadership.map((experience, index) => (
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
Leadership.propTypes =  {
	leadership: PropTypes.array.isRequired
}

/*
 * React-Redux Container Components
 */

const mapStateToProps = (state) => ({
	leadership: state.leadership
})

const LeadershipContainer = connect(
	mapStateToProps
)(Leadership)

export default LeadershipContainer
