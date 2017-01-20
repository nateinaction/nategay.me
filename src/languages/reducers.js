/*
 * Redux Default State
 */

const defState = [
  {lang: 'JavaScript', hover: false},
  {lang: 'React', hover: false},
  {lang: 'Redux', hover: false},
  {lang: 'Node.js', hover: false},
  {lang: 'PHP', hover: false},
  {lang: 'WordPress API', hover: false},
  {lang: 'Chrome API', hover: false},
  {lang: 'Firebase', hover: false},
  {lang: 'Webpack', hover: false},
  {lang: 'Yarn', hover: false},
  {lang: 'Babel', hover: false},
  {lang: 'Git', hover: false}
]

/*
 * Redux Reducer
 */

const languages = (state = defState, action) => {
  switch(action.type) {
    case 'HOVER':
      return state.map((obj) => {
        if (obj.lang === action.lang) {
          return Object.assign({}, obj, { hover: !obj.hover })
        }
        return obj
      })
    default:
      return state
  }
}

export default languages
