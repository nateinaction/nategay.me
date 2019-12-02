import { Howl } from 'howler'

import blueSound from '../assets/sounds/simonSound1.mp3'
import yellowSound from '../assets/sounds/simonSound2.mp3'
import redSound from '../assets/sounds/simonSound3.mp3'
import greenSound from '../assets/sounds/simonSound4.mp3'
import wrongSound from '../assets/sounds/wrongSound.mp3'
const sounds = [blueSound, yellowSound, redSound, greenSound, wrongSound]

/*
 * Example Object
 */
/*
{
	turn: 'computer', // 'player', 'playing'
	level: 1,
	sequence: [0,0,3,1,2],
	player: [0,0...],
	strict: true,
	active: {id: 4, timestamp: 100000},
	timestamp: 100001
}
*/

/*
 * Helper Fns
 */

const loadAudioHelper = () => {
	let sound = {}
	sounds.forEach((url, index) => {
		sound[index] = new Howl({
		  src: [url]
		})
	})
	return sound;
}
let audio = null

const newSequenceHelper = () => {
	return Array(20).fill(null).map(() => (
		Math.floor(Math.random() * 4)
	))
}

const arrIsSameHelper = (arrA, arrB) => {
	let truthyArray = arrA.map((item, index) => {
		return (arrB[index] === item)
	})
	return (truthyArray.indexOf(false) === -1) ? true : false
}

const chooseIntervalHelper = (level) => {
	if (level > 12) {
		return 400
	}
	if (level > 8) {
		return 550
	}
	if (level > 4) {
		return 750
	}
	return 900
}

/*
 * Redux Action Creators
 */

const clearAll = () => ({
	type: 'CLEAR_ALL',
	sequence: newSequenceHelper()
})

const addToPlayer = (item) => ({
	type: 'ADD_TO_PLAYER',
	item
})

const setTurn = (turn) => ({
	type: 'SET_TURN',
	turn
})

const setSequence = () => ({
	type: 'SET_SEQUENCE',
	sequence: newSequenceHelper()
})

const nextLevel = () => ({
	type: 'NEXT_LEVEL'
})

const activateButton = (id, interval) => ({
	type: 'ACTIVATE_BUTTON',
	time: Date.now() + interval,
	id
})

const deactivateButton = () => ({
	type: 'DEACTIVATE_BUTTON'
})

const deactivateButtonControl = () => (
	(dispatch, getState) => {
		setTimeout(() => {
			let { simon } = getState()
			if (simon.active.timestamp <= Date.now()) {
				return dispatch(deactivateButton())
			}
		}, 300)
	}
)

const activeButtonControl = (id) => (
	dispatch => {
		let interval = 300
		audio[id].play()
		dispatch(activateButton(id, interval))
		return dispatch(deactivateButtonControl())
	}
)

const playSequence = (count = 0) => (
	(dispatch, getState) => {
		let { simon } = getState()
		let { turn, sequence, level } = simon
		if (turn === 'computer') {
			let interval = chooseIntervalHelper(level)
			setTimeout(() => {
				if (count < level) {
					let id = sequence[count]
					let nextCount = count + 1
					if (nextCount >= level) {
						dispatch(activeButtonControl(id))
						return dispatch(setTurn('player'))
					} else {
						dispatch(playSequence(nextCount))
						return dispatch(activeButtonControl(id))
					}
				}
			}, interval)
		}
	}
)

const setTurnToComputer = () => (
	(dispatch, getState) => {
		if (audio === null) {
			audio = loadAudioHelper()
		}
		let { simon } = getState()
		if (simon.sequence.length === 0) {
			dispatch(setSequence())
		}
		dispatch(setTurn('computer'))
		return dispatch(playSequence())
	}
)

const setUserLoss = (strict) => (
	dispatch => {
		if (strict) {
			return dispatch(setTurn('loss'))
		} else {
			dispatch(setTurn('try again'))
			setTimeout(() => {
				audio[4].play()
			}, 300)
			setTimeout(() => {
				return dispatch(setTurnToComputer())
			}, 1200)
		}
	}
)

const setWinOrNextLevel = (sequence, level) => (
	dispatch => {
		let maxLevel = (level >= 20)
		if (!maxLevel) {
			dispatch(nextLevel())
			return dispatch(playSequence())
		} else {
			return dispatch(setTurn('win'))
		}
	}
)

const validateInput = (id, sequence, level, player, strict) => (
	dispatch => {
		let test = [...player, id]
		let match = arrIsSameHelper(test, sequence)
		if (!match) {
			return dispatch(setUserLoss(strict))
		} else if (test.length === level) {
			return dispatch(setWinOrNextLevel(sequence, level))
		}
		return dispatch(addToPlayer(id))
	}
)

const buttonClick = (id) => (
	(dispatch, getState) => {
    let { simon } = getState()
		let { turn, sequence, level, player, strict } = simon
		if (turn === 'player') {
			dispatch((activeButtonControl(id)))
			return dispatch((validateInput(id, sequence, level, player, strict)))
		} else if (turn === null) {
			return dispatch((activeButtonControl(id)))
		}
	}
)

const actions = {
	clearAll,
	buttonClick,
	setTurnToComputer
}

export default actions
