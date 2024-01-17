import AppHeader from '@/components/AppHeader/AppHeader'
import WordlePage from './WordlePage'
import fetchWord from './fetchword'
import { ThemeProvider } from '@/components/ThemeProvider'

export default async function Home() {
  // const { word } = await fetchWord()
  return (
    <>
      <ThemeProvider>
        <AppHeader />
        <WordlePage word="shine" />
      </ThemeProvider>
    </>
  )
}
