export function checkWin (correctLetter, wrongLetters, selectedWord) {
  let status = 'win'

  //for win

  selectedWord.split('').forEach(letter => {
    if(!correctLetter.includes(letter)) {
      status = ''
    }
  })

  //for lose

  if(wrongLetters.length === 6) status = 'lose'
  return status
}