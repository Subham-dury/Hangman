import React, { useEffect } from 'react'
import {checkWin} from '../Helpers/CheckWin'

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let finalMessage = ''
  let finalMessageRevealWorld = ''
  let playable = true

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won! 😃'
    playable = false
  } else if ( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Unfortunately you lost. 😕'
    finalMessageRevealWorld = `...the word was: ${selectedWord}`
    playable = false
  }

  useEffect(() => setPlayable(playable))

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {display: 'none'}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWorld}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
