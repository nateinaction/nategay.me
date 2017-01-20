/*
 * Redux Default State
 */

const defIntercultural = [
  {
    stats: {
      prefix: null,
      number: 23,
      postfix: null,
      description: 'Countries visited'
    }
  },
  {
    stats: {
      prefix: null,
      number: 3,
      postfix: null,
      description: 'Countries lived in'
    }
  },
]

/*
 * Redux Reducer
 */

const intercultural = (state = defIntercultural, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default intercultural
