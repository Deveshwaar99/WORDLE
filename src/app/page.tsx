//components
import AppHeader from '@/components/AppHeader/AppHeader'
import GamePage from '@/pages/GamePage'
//utils
import fetchWord from './fetchword'
//theme
import { ThemeProvider } from '@/components/ThemeProvider'

export default async function Home() {
  // const { word } = await fetchWord()
  return (
    <>
      <ThemeProvider>
        <AppHeader />
        <GamePage word="shine" />
      </ThemeProvider>
    </>
  )
}
