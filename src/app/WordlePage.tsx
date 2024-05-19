'use client'
import { useEffect } from 'react'
//components
import Grid from '@/components/Grid'
import Keypad from '@/components/KeyPad'
import useWordle from '../hooks/useWordle'
//utils
import { saveDataToLocalStorage } from '@/utils/saveDataToLocalStorage'
//styles
import './styles.css'

type wordlePageProps = {
  word: string
  currentStreak: number
}

function WordlePage({ word, currentStreak }: wordlePageProps) {
  const {
    handleKeyUp,
    currentTurn,
    isSuccess,
    formattedGuessesList,
    currentGuess,
    setCurrentGuess,
    keyPadColors,
    handleEnterKey,
  } = useWordle(word)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    async function handleLocalStorage() {
      await saveDataToLocalStorage({ isSuccess, word, streak: isSuccess ? ++currentStreak : 0 })
    }

    if (isSuccess || currentTurn > 5) {
      handleLocalStorage()
      window.removeEventListener('keyup', handleKeyUp)
      setTimeout(() => window.location.reload(), 3000)
    }

    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp, currentTurn, isSuccess, word, currentStreak])

  return (
    <>
      <Grid
        formattedGuessList={formattedGuessesList}
        currentGuess={currentGuess}
        currentTurn={currentTurn}
      />
      <Keypad
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        keypadColors={keyPadColors}
        handleEnterKey={handleEnterKey}
      />
    </>
  )
}

// export default memo(WordlePage)
export default WordlePage
