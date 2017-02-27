/*
 * Redux Default State
 */

const defAwards = [
  {
    name: 'Valued Service to the Mexican Consulate',
    description: 'In December 2015 and again in May 2016 I was recognized for volunteer service at the Mexican Consulate General in Raleigh, NC. The photo is Deputy Consul, Cynthia Prida Bravo.'
  },
  {
    name: 'L.I. Felner Scholarship',
    description: 'In 2015 I won the L.I. Felner Scholarship which paid $1,000 toward the expenses of a Study Abroad trip in Peru. During the 6 week trip I had the opportunity to explore 6 ancient Inca sites, visit Cusco and Nasca, and learn about Peruvian politics, culture, and cuisine in Lima.'
  },
  {
    name: 'Outstanding Service to the Spanish Program',
    description: 'In Summer 2016 I was recognized for my work leading the first student-led governing council of a Spanish language volunteer organization called VOLAR (Voluntarios Ahora en Raleigh).'
  },
  {
    name: 'CubeSat Research Grant',
    description: 'In 2013, as Co-President of the Commercial Space Club, I applied for and received a $1000 grant to develop a CubeSat prototype.'
  }
]

/*
 * Redux Reducer
 */

const awards = (state = defAwards, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default awards
