/*
 * Redux Default State
 */

const defState = [
  {lang: 'Python', hover: false},
  {lang: 'Javascript', hover: false},
  {lang: 'PHP', hover: false},
  {lang: 'Docker', hover: false},
  {lang: 'React', hover: false},
  {lang: 'WordPress', hover: false},
  {lang: 'Terraform', hover: false},
  {lang: 'GCP', hover: false},
  {lang: 'AWS', hover: false},
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
