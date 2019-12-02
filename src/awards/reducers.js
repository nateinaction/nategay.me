/*
 * Redux Default State
 */

const defAwards = [
  {
    name: 'Hackathon - Best in Show',
    organization: 'WP Engine',
    date: '2019',
    location: 'Austin, TX',
    description: 'For producing a browser based shell environment that allowed effortless SSH access to administer customer websites.'
  },
  {
    name: 'Hackathon - Game Changer',
    organization: 'WP Engine',
    date: '2018',
    location: 'Austin, TX',
    description: 'For creating a web traffic queueing proxy in Golang which spread traffic equally among customers sharing the same environment.'
  },
  {
    name: 'Raspberry Pi Competition',
    organization: 'WP Engine',
    date: '2017',
    location: 'Austin, TX',
    description: 'For contributed hardware and software to create a monitoring system for a self-sustaining aquarium.'
  },
  {
    name: 'Outstanding Service to the Spanish Program',
    organization: 'Department of Foreign Languages, NC State',
    date: '2015, 2016',
    location: 'Raleigh, NC',
    description: 'For maintaining relationships with Mexican Consulate General and Spanish language tax services.'
  },
  {
    name: 'Valued Service to the Mexican Consulate',
    organization: 'Consulado General de México en Raleigh',
    date: '2015, 2016',
    location: 'Raleigh, NC',
    description: 'For training and managing student volunteers for the Mexican Consulate.'
  },
  {
    name: 'L.I. Felner Scholarship',
    organization: 'Department of Foreign Languages, NC State',
    date: '2015',
    location: 'Raleigh, NC',
    description: 'To fuel continued dedication to the Spanish language volunteer community.'
  },
  {
    name: 'Excellence in Community Service',
    organization: 'Voluntarios Ahora en Raleigh (VOLAR), NC State',
    date: '2015',
    location: 'Raleigh, NC',
    description: 'For collaborating with advisors, students, and community partners to create Spanish language volunteer opportunities.'
  },
  {
    name: 'Research Award',
    organization: 'Office of Undergraduate Research, NC State',
    date: '2013',
    location: 'Raleigh, NC',
    description: 'Secured a grant for cube-sat prototyping and in-orbit communications research.'
  },
]

/*
 * Redux Reducer
 */

const awards = (state = defAwards, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default awards
