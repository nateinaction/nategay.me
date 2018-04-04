/*
 * Redux Default State
 */

const defState = [
  {lang: 'JavaScript', hover: false},
  {lang: 'Yarn', hover: false},
  {lang: 'React', hover: false},
  {lang: 'Redux', hover: false},
  {lang: 'PHP', hover: false},
  {lang: 'Composer', hover: false},
  {lang: 'WordPress API', hover: false},
  {lang: 'PHP Unit', hover: false},
  {lang: 'Docker', hover: false},
  {lang: 'WP CLI', hover: false},
  {lang: 'GraphQL', hover: false},
  {lang: 'Git', hover: false}
];

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
      });
    default:
      return state
  }
};

export default languages
