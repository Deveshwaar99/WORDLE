'use client'
import { useEffect, useState, memo } from 'react'

import useWordle from '../hooks/useWordle'
import Grid from '@/components/Grid'
import Keypad from '@/components/KeyPad'
import Modal from '@/components/Modal'

//styles
import './styles.css'

type wordlePageProps = {
  word: string
}

let ismodalAlreadyShown = false
function WordlePage({ word }: wordlePageProps) {
  const {
    handleKeyUp,
    currentTurn,
    isSuccess,
    formattedGuessesList,
    currentGuess,
    setCurrentGuess,
    keyPadColors,
  } = useWordle(word)

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    if (isSuccess && !ismodalAlreadyShown) {
      ismodalAlreadyShown = true
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyUp)
    }
    if (currentTurn > 5 && !ismodalAlreadyShown) {
      ismodalAlreadyShown = true
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyUp)
    }
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp, currentTurn, isSuccess])

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
      />
      <Modal word={word} showModal={showModal} isSuccess={isSuccess} setShowModal={setShowModal} />
    </>
  )
}

export default memo(WordlePage)
