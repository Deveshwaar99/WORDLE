'use client'
import WordlePage from '@/app/WordlePage'
import Modal from '@/components/Modal'
import { getDataFromLocalStorage } from '@/utils/getDataFromLocalStorage'
import { useEffect, useState } from 'react'
type GamePageProps = {
  word: string
}
export default function GamePage({ word }: GamePageProps) {
  const [showModal, setShowModal] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  useEffect(() => {
    const data = getDataFromLocalStorage('wordStatus')
    const today = new Date().toLocaleDateString()
    if (data && data.date === today) {
      setShowModal(true)
      if (data.isSuccess) setIsSuccess(data.isSuccess)
    }
  }, [])

  return showModal ? (
    <Modal word={word} isSuccess={isSuccess} showModal setShowModal={() => {}} />
  ) : (
    <WordlePage word={word} />
  )
}
