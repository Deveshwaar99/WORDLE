//components
import GamePage from '@/app/GamePage'
//utils
import { fetchWord } from './fetchword'
//theme

export default async function Home() {
  const { word } = await fetchWord()
  return (
    <>
      <GamePage word={word} />
    </>
  )
}
