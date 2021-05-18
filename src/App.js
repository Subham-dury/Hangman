import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './Components/Header'
import Figure from './Components/Figure'
import WrongLetters from './Components/WrongLetters'
import Word from './Components/Word'
import Popup from './Components/Popup'
import Notification from './Components/Notification'
import {showNotification as show} from './Helpers/CheckNotification'

const words = ['application', 'programming', 'interface', 'wizard', 'developer', 'tutorial', 'debugging', 'syntax', 'console', 'community', 'freelancing', 'compatible', 'responsive']

let selectedWord = words[Math.floor(Math.random() * words.length)]



function App() {
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const handleKeyDown = e => {
      const { key, keyCode} = e
      
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter])
    
              
            } else {
              show(setShowNotification)
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter])
    
              
            } else {
              show(setShowNotification)
            }
          }
        
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [correctLetters, wrongLetters, playable])
  
  function playAgain() {
    setPlayable(true)
    setWrongLetters([])
    setCorrectLetters([])

    selectedWord = words[Math.floor(Math.random() * words.length)]
  }


  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;
