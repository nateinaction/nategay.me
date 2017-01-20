import wpMorphextImage from '../../public/images/wp-morphext.svg'
import superCAImage from '../../public/images/super-ca-mobile.jpg'

/*
 * Redux Default State
 */

const defProjects = [
  {
    name: 'WP-Morphext',
    description: 'Launched an open source text animation shortcode plugin for WordPress.',
    image: wpMorphextImage,
    tags: ['PHP', 'WordPress API'],
    github: 'https://github.com/nateinaction/wp-morphext',
    demo: 'https://worldpeace.io/project/wp-morphext/'
  },
  {
    name: 'Super CA',
    description: 'Streamlined package delivery at NC State’s University Housing with a mobile first package tracking system.',
    image: superCAImage,
    tags: ['Chrome API', 'Firebase', 'jQuery'],
    github: 'https://github.com/nateinaction/Super-CA',
    demo: 'https://super-ca.firebaseapp.com/'
  }
]

/*
 * Redux Reducer
 */

const projects = (state = defProjects, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default projects
