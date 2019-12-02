import baPoliticalScience from '../assets/docs/ba-political-science.pdf'
import baSpanishLiterature from '../assets/docs/ba-spanish-literature.pdf'

/*
 * Redux Default State
 */

const defEducation = [
  {
    name: 'Bachelor of Arts in Spanish Literature',
    university: 'NC State University',
    date: 'December 2016',
    honors: 'Cum Laude - 3.5 GPA',
    href: baSpanishLiterature
  },
  {
    name: 'Bachelor of Arts in Political Science',
    university: 'NC State University',
    date: 'December 2016',
    honors: 'Cum Laude - 3.6 GPA',
    href: baPoliticalScience
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
