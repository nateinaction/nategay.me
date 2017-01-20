import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import Project from './components/Project'

const Projects = (props) => (
  <Grid className='section light-section projects' fluid>
    <Row>
      <Col xs={12} md={10} mdOffset={1}>
        <h2>Recent Projects</h2>
    	  {props.projects.map((project, index) => (
    	    <Project
    	      key={index}
    	      name={project.name}
            description={project.description}
            image={project.image}
            tags={project.tags}
            github={project.github}
            demo={project.demo} />
      	  ))}
      </Col>
    </Row>
  </Grid>
)
Projects.propTypes =  {
	projects: PropTypes.array.isRequired
}

/*
 * React-Redux Container Components
 */

const mapStateToProps = (state) => ({
	projects: state.projects
})

const ProjectsContainer = connect(
	mapStateToProps
)(Projects)

export default ProjectsContainer
