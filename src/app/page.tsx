//components
import AppHeader from '@/components/AppHeader/AppHeader'
import GamePage from '@/app/GamePage'
//utils
import fetchWord from './fetchword'
//theme
import { ThemeProvider } from '@/components/ThemeProvider'

export default async function Home() {
  const { word } = await fetchWord()
  return (
    <>
      <ThemeProvider>
        <AppHeader />
        <GamePage word={word} />
      </ThemeProvider>
    </>
  )
}
