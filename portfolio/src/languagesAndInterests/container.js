import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'
import Languages from './languages/languages'
import Interests from './interests/interests'

const LanguagesAndInterests = (props) => (
  <Grid className='languages-and-interests' fluid>
    <Row>
      <Languages
        languages={props.languages} />
      <Interests
        interests={props.interests} />
    </Row>
  </Grid>
)
LanguagesAndInterests.propTypes = {
  languages: PropTypes.array.isRequired,
  interests: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
	languages: state.languages,
  interests: state.interests
})

const LanguagesAndInterestsContainer = connect(
	mapStateToProps
)(LanguagesAndInterests)

export default LanguagesAndInterestsContainer
