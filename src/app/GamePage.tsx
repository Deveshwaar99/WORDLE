'use client'

import WordlePage from '@/app/WordlePage'
import Modal from '@/components/Modal'
import { getDataFromLocalStorage } from '@/utils/getDataFromLocalStorage'
import { useEffect, useRef, useState } from 'react'

function getTimeDifferenceFromToday(lastplayedDate: Date) {
  const lastplayedDateTime = lastplayedDate.getTime()
  const today = new Date().getTime()

  const timeDiff = (today - lastplayedDateTime) / (1000 * 60 * 60)

  return timeDiff
}

type GamePageProps = {
  word: string
}

export default function GamePage({ word }: GamePageProps) {
  const [currentStreak, setCurrentStreak] = useState(0)
  const [successState, setSuccessState] = useState(false)

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function getLocalStorageValues() {
      const storageValues = await getDataFromLocalStorage()
      if (!storageValues) return
      setCurrentStreak(storageValues.streak)
      setSuccessState(storageValues.isSuccess)

      const lastPlayedDate = new Date(storageValues.date)
      const hoursSinceLastPlayed = getTimeDifferenceFromToday(lastPlayedDate)

      if (hoursSinceLastPlayed > 48) {
        setCurrentStreak(0)
      }

      if (storageValues.word === word) {
        setShowModal(true)
      }
    }
    getLocalStorageValues()
  }, [word])

  if (showModal) {
    return <Modal word={word} isSuccess={successState} showModal currentStreak={currentStreak} />
  }

  return <WordlePage word={word} currentStreak={currentStreak} />
}
