import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import Stats from './components/Stats'
import Image from './components/Image'

const Intercultural = (props) => (
  <Grid className='section intercultural' fluid>
    <Row>
      <Col xs={12} md={10} mdOffset={1}>
        <h2>Intercultural Experiences</h2>
        <Image />
        {props.intercultural.map((data, index) => (
          <Stats
            key={index}
            number={data.stats.number}
            description={data.stats.description}  />
        ))}
      </Col>
    </Row>
  </Grid>
)
Intercultural.propTypes =  {
	intercultural: PropTypes.array.isRequired
}

/*
 * React-Redux Container Components
 */

const mapStateToProps = (state) => ({
	intercultural: state.intercultural
})

const InterculturalContainer = connect(
	mapStateToProps
)(Intercultural)

export default InterculturalContainer
