//components
import GamePage from '@/app/GamePage'
//utils
import AppHeader from '@/components/AppHeader/AppHeader'
import { fetchWord } from './fetchword'
//theme

export default async function Home() {
  const { word } = await fetchWord()
  return (
    <div className="m-auto">
      <div className="flex flex-col items-center justify-center gap-y-5">
        <AppHeader />
        <GamePage word={word} />
      </div>
    </div>
  )
}
