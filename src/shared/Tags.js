import React, { PropTypes } from 'react'
import { Label } from 'react-bootstrap'
import './tags.css'

const tagColor = {
  'React': 'label-react',
  'Redux': 'label-redux',
  'Bootstrap': 'label-bootstrap',
  'Wunderground API': 'label-primary',
  'Node.js': 'label-nodejs',
  'Express': 'label-express',
  'PHP': 'label-php',
  'WordPress API': 'label-wordpress',
  'Chrome API': 'label-success',
  'Firebase': 'label-firebase',
  'jQuery': 'label-jquery',
  'GraphQL': 'label-graphql',
  'Docker': 'label-docker',
  'Kubernetes': 'label-kubernetes'
}

const Tags = (props) => (
  <span className='tags'>
  {props.tags.map((tag, index) => (
    <Label key={index} className={tagColor[tag]} bsSize='large'>{tag}</Label>
  ))}
  </span>
)
Tags.propTypes = {
  tags: PropTypes.array.isRequired
}

export default Tags
