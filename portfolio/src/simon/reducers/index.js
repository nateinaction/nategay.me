import { combineReducers } from 'redux'

import turn from './turn'
import level from './level'
import sequence from './sequence'
import player from './player'
import strict from './strict'
import active from './active'

/*
 * Example Object
 */
/*
simon: {
	turn: 'computer', // 'player'
	level: 1,
	sequence: [0,0,3,1,2],
	player: [0,0...],
	strict: true,
	active: {id: 4, timestamp: 100000},
	timestamp: 100001
}
*/

const simon = combineReducers({
	turn,
	level,
	sequence,
	player,
	strict,
	active
})

export default simon
