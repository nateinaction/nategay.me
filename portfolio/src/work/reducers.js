/*
 * Redux Default State
 */

const defWork = [
  {
    name: 'Front End Developer, worldpeace.io',
    description: 'Designed and built professional websites and plugins for clients using WordPress.'
  },
  {
    name: 'Resident Advisor, University Housing',
    description: 'Coached 80 residents in student success skills and served a complex of 1200 students.'
  },
  {
    name: 'Tutor, University Tutorial Center',
    description: 'Motivated first and second year college students to become competitive self-learners. Taught calculus and chemistry using student-directed teaching.'
  },
  {
    name: 'Genius, Apple',
    description: 'Nurtured lasting relationships between consumers and the Apple brand during one-on-one hardware and software support. Trained customers on how to use Apple products and professional software. Provided certified hardware and software repair for Macs and iPhones.'
  },
  {
    name: 'Community Relations Manager, Vivox',
    description: 'Evangelized a news software platform for voice communications to new customers in the critically fast-paced environment of a software startup.'
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
