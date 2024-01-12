'use client'
import { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from '@/components/Grid'
import Keypad from '@/components/KeyPad'
import Modal from '@/components/Modal'

type wordlePageProps = {
  word: string
}
export default function WordlePage({ word }: wordlePageProps) {
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
  // console.log({ handleKeyUp, currentTurn, isSuccess, formattedGuessesList, currentGuess })
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    if (isSuccess) {
      console.log('removed -------------------')
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyUp)
    }
    if (currentTurn > 5) {
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
      <Modal word={word} showModal={showModal} isSuccess={isSuccess} />
    </>
  )
}
