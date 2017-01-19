/*
 * Redux Default State
 */

const defLeadership = [
  {
    name: 'President of VOLAR',
    description: 'Collaborated with advisors, students, and community partners to create Spanish language volunteer opportunities. Planned and budgeted events, food, and equipment purchases.'
  },
  {
    name: 'President of Alexander Hall',
    description: 'Led community development of residence hall housing 150 students from 28 countries. Established sports position, Alexander Hall’s soccer team won first place out of 15 teams.'
  },
  {
    name: 'Co-President of the Commercial Space Club',
    description: 'Founded organization and secured grant for cube-sat prototyping and research. Oversaw development of upper atmosphere weather balloon communication technology. Organized certification of 15 NC State engineers in radio and satellite communication.'
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
