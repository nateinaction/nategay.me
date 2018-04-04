/*
 * Redux Default State
 */

const defWork = [
  {
    name: 'Enterprise WordPress Support Technician, WP Engine',
    description: 'Deliver world class customer service and triage technical problems across thousands of websites.',
    dates: '2017-present'
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

const work = (state = defWork, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default work
