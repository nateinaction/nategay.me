/*
 * Redux Default State
 */

const defLeadership = [
  {
    name: 'Volunteer Coordinator, Mexican Consulate General',
    description: 'Served as the Volunteer Coordinator for the Mexican Consulate General in Raleigh, NC. I managed and trained 40 student volunteers in greeting and directing consulate visitors.',
    dates: '2015-2016'
  },
  {
    name: 'President, VOLAR',
    description: 'Collaborated with advisors, students, and community partners to create Spanish language volunteer opportunities in Raleigh, NC. I also led event planning and budgeting for the organization.',
    dates: '2015-2016'
  },
  {
    name: 'President, Alexander Hall',
    description: 'Managed community development of a residence hall housing 150 students from 28 countries. I pursued establishing an official Alexander Hall soccer team which, in its first year, won first place in a campus wide tournament.',
    dates: '2014'
  },
  {
    name: 'Co-President, Commercial Space Club',
    description: 'Oversaw development of upper atmosphere weather balloon communication system with the Commercial Space Club. I also secured a $1000 grant for cube-sat prototyping and research. In addition, I organized the certification of 15 NC State engineers in radio and satellite communication.',
    dates: '2012-2013'
  }
]

/*
 * Redux Reducer
 */

const leadership = (state = defLeadership, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default leadership
