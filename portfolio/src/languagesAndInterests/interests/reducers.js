import puppyImage from '../../../public/images/puppy.svg'
import sailingImage from '../../../public/images/sailing.svg'
import rocketImage from '../../../public/images/rocket.svg'
import travelImage from '../../../public/images/travel.svg'
import starTrekImage from '../../../public/images/star-trek.svg'
import uxDesignImage from '../../../public/images/ux-design.svg'

/*
 * Redux Default State
 */

const allInterests = [
  {
    image: puppyImage,
    description: 'Playing with my pup!'
  },
  {
    image: sailingImage,
    description: 'Playing with my pup!'
  },
  {
    image: rocketImage,
    description: 'Playing with my pup!'
  },
  {
    image: travelImage,
    description: 'Playing with my pup!'
  },
  {
    image: starTrekImage,
    description: 'Nerding out on Star Trek'
  },
  {
    image: uxDesignImage,
    description: 'Mocking up something new in my UX notebook!'
  },

]

/*
 * Redux Reducer
 */

const interests = (state = allInterests, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default interests
