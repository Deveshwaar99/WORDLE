'use client'

import WordlePage from '@/app/WordlePage'
import Modal from '@/components/Modal'
import { getDataFromLocalStorage } from '@/utils/getDataFromLocalStorage'
import { useEffect, useMemo, useRef, useState } from 'react'
type GamePageProps = {
  word: string
}
let count = 0
export default function GamePage({ word }: GamePageProps) {
  const currentStreakRef = useRef(0)
  const successStateRef = useRef(false)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getLocalStorageValues() {
      const storageValues = await getDataFromLocalStorage()
      if (!storageValues) return
      const today = new Date().toLocaleDateString()

      if (storageValues.date === today && storageValues.word === word) {
        currentStreakRef.current = storageValues.streak
        successStateRef.current = storageValues.isSuccess
        setShowModal(true)
      }
    }
    getLocalStorageValues()
  }, [word])

  if (showModal) {
    return (
      <Modal
        word={word}
        isSuccess={successStateRef.current}
        showModal
        currentStreak={currentStreakRef.current}
      />
    )
  }

  return <WordlePage word={word} currentStreak={currentStreakRef.current} />
}
