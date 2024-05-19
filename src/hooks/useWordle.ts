import { useCallback, useState, useRef } from 'react'
import { FormattedGuess } from '@/types/types'
import addColorstoKeyboard from '@/utils/addColors'
import { validateWord } from '@/utils/validateWord'

export default function useWordle(word: string) {
  // const currentTurnRef = useRef(0)
  const [currentTurn, setCurrentTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [formattedGuessesList, setFormattedGuessesList] = useState([...Array(6)])
  const [isSuccess, setIsSuccess] = useState(false)

  const wordHistoryRef = useRef<never | string[]>([])
  const usedKeysRef = useRef({})

  function formatGuess() {
    const formattedGuess: FormattedGuess = []
    let wordCopy = word.split('')

    //set grey to all chars
    currentGuess.split('').forEach((letter, index) => {
      formattedGuess[index] = { char: letter, color: 'grey' }
    })

    //Match correct position chars & set green  & remove the char to avoid further matches
    formattedGuess.forEach((item, index) => {
      if (item.char === wordCopy[index]) {
        item.color = 'green'
        wordCopy[index] = '!'
      }
    })

    // Match the chars in the word to assign yellow
    formattedGuess.forEach((item, index) => {
      if (item.color === 'green') return
      const matchingIndex = wordCopy.indexOf(item.char)
      if (matchingIndex !== -1) {
        item.color = 'yellow'
        wordCopy[matchingIndex] = '!'
      }
    })

    return formattedGuess
  }

  function addGuess(formattedGuess: FormattedGuess) {
    if (word === currentGuess) setIsSuccess(true)
    setFormattedGuessesList(prev => {
      prev[currentTurn] = formattedGuess
      return prev
    })
    wordHistoryRef.current.push(currentGuess)
    setCurrentTurn(prev => prev + 1)
    usedKeysRef.current = addColorstoKeyboard(formattedGuess, usedKeysRef.current)
    setCurrentGuess('')
  }

  async function handleEnterKey() {
    if (
      currentGuess.length !== 5 ||
      currentTurn > 5 ||
      wordHistoryRef.current.includes(currentGuess)
    ) {
      return
    }
    //Check whether its a  valid english word
    const isValidWord = await validateWord(currentGuess)
    if (!isValidWord) {
      return
    }
    //Its a valid input - can submit the guess
    const validatedGuess = formatGuess()
    addGuess(validatedGuess)
  }

  async function handleKeyUp(e: KeyboardEvent) {
    //validate enter key
    if (e.key === 'Enter') {
      await handleEnterKey()
    }

    //validate letter keys
    if (/^[a-z]$/i.test(e.key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => prev + e.key)
      }
    }

    //validate backspace
    if (e.key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1))
    }
  }

  // const currentTurn = currentTurn
  const keyPadColors = usedKeysRef.current
  return {
    handleKeyUp,
    currentTurn,
    formattedGuessesList,
    isSuccess,
    currentGuess,
    setCurrentGuess,
    keyPadColors,
  }
}
