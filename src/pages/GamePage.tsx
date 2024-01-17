'use client'
import WordlePage from '@/app/WordlePage'
import Modal from '@/components/Modal'
import { getDataFromLocalStorage } from '@/utils/getDataFromLocalStorage'

type GamePageProps = {
  word: string
}
export default function GamePage({ word }: GamePageProps) {
  const data = getDataFromLocalStorage('wordStatus')
  const today = new Date().toLocaleDateString()

  if (data && data.date === today) {
    return <Modal word={word} isSuccess={data.isSuccess} showModal setShowModal={() => {}} />
  }
  return <WordlePage word={word} />
}
