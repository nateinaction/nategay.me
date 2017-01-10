import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'
import Project from './project'

const Projects = (props) => (
  <Grid className='projects' fluid>
    <Row>
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
