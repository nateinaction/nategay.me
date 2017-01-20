import simonImage from '../../public/images/simon-game.png'
import calculatorImage from '../../public/images/calculator.png'
import pomodoroImage from '../../public/images/pomodoro-clock.png'
import weatherImage from '../../public/images/local-weather.png'
import twitchImage from '../../public/images/twitchtv-status.png'
import ticTacToeImage from '../../public/images/tic-tac-toe.png'

/*
 * Redux Action Creators
 */

// nothing here yet

/*
 * Redux Default State
 */

const allProjects = [
  {
    name: 'Calculator',
    description: 'You should probably be doing these calculations in your head...',
    image: calculatorImage,
    tags: ['react', 'redux', 'bootstrap'],
    github: 'https://github.com/nateinaction/Calculator',
    demo: 'https://codepen.io/nateinaction/full/vyQoVP/'
  },
  {
    name: 'TwitchTV Status',
    description: 'Check the status of your favorite streamers on Twitch.',
    image: twitchImage,
    tags: ['react', 'redux', 'bootstrap', 'api'],
    github: 'https://github.com/nateinaction/TwitchTV-Status',
    demo: 'https://codepen.io/nateinaction/full/egNvJN/'
  }
]

/*
 * Redux Reducer
 */

const projects = (state = allProjects, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default projects
