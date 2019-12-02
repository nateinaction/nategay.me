/*
 * Redux Default State
 */

const defCareer = [
  {
    name: 'Software Engineer, WP Engine',
    description: 'Build reliable and performant web hosting at scale - supporting 120k customers and 5% of daily internet traffic.',
    dates: '2018-Present'
  },
  {
    name: 'Enterprise WordPress Support Technician, WP Engine',
    description: 'Delivered world class customer service and triage technical problems across hundreds of thousands of websites.',
    dates: '2017-2018'
  },
  {
    name: 'Front End Developer, worldpeace.io',
    description: 'Designed and built professional websites and plugins for social minded clients using WordPress.',
    dates: '2016-2017'
  },
  {
    name: 'Resident Advisor, University Housing',
    description: 'Coached 80 residents in student success skills and organized events in a community of 1200.',
    dates: '2014-2016'
  },
  {
    name: 'Tutor, University Tutorial Center',
    description: 'Motivated first and second year college students to become self-learners in calculus and chemistry.',
    dates: '2013-2014'
  },
  {
    name: 'Genius, Apple',
    description: 'Nurtured lasting relationships between customers and Apple through one-on-one hardware and software support.',
    dates: '2010-2011'
  },
  {
    name: 'Community Relations Manager, Vivox',
    description: 'Evangelized a software platform for voice communications in the critically fast-paced environment of a startup.',
    dates: '2007-2008'
  }
]

/*
 * Redux Reducer
 */

const career = (state = defCareer, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default career
