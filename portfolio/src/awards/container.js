import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import Award from './components/Award'
import AwardImage from './components/AwardImage'

const Awards = (props) => (
  <Grid className='section lignt-section awards' fluid>
    <Row>
      <Col xs={12} md={10} mdOffset={1}>
      <h2>Awards</h2>
      <AwardImage />
  	  {props.awards.map((award, index) => (
  	    <Award
  	      key={index}
  	      name={award.name}
          description={award.description} />
    	  ))}
      </Col>
    </Row>
  </Grid>
)
Awards.propTypes =  {
	awards: PropTypes.array.isRequired
}

/*
 * React-Redux Container Components
 */

const mapStateToProps = (state) => ({
	awards: state.awards
})

const AwardsContainer = connect(
	mapStateToProps
)(Awards)

export default AwardsContainer
