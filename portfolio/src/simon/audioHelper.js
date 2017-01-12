import { Howl } from 'howler'

import blueSound from '../../public/sounds/simonSound1.mp3'
import yellowSound from '../../public/sounds/simonSound2.mp3'
import redSound from '../../public/sounds/simonSound3.mp3'
import greenSound from '../../public/sounds/simonSound4.mp3'
import wrongSound from '../../public/sounds/wrongSound.mp3'
const sounds = [blueSound, yellowSound, redSound, greenSound, wrongSound]

const loadAudioHelper = () => {
  let audio = {}
	sounds.forEach((url, index) => {
		audio[index] = new Howl({
		  src: [url]
		})
	})
  return audio;
}

export default loadAudioHelper
