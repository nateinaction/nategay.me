/*
 * Redux Default State
 */

const defEducation = [
  {
    name: 'Bachelor of Arts in Spanish Literature',
    description: 'NC State University, December 2016 - 3.5 GPA'
  },
  {
    name: 'Bachelor of Arts in Political Science',
    description: 'NC State University, May 2016 - 3.6 GPA'
  },
  {
    name: 'Associate of Arts in General Studies',
    description: 'Northern Virginia Community College, 2010'
  }
]

/*
 * Redux Reducer
 */

const education = (state = defEducation, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default education
