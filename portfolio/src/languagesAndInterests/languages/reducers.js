/*
 * Redux Default State
 */

const allLangsAndLibs = [
  {
    title: 'Proficient',
    contents: ['JavaScript', 'React', 'Redux', 'Firebase', 'jQuery'],
    style: 'info'
  },
  {
    title: 'Learning',
    contents: ['D3', 'Relay/GraphQL', 'Node.js'],
    style: 'success'
  },
  {
    title: 'Previous Experience',
    contents: ['PHP', 'WordPress API', 'Chrome API'],
    style: 'warning'
  }
]

/*
 * Redux Reducer
 */

const languages = (state = allLangsAndLibs, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default languages
