import WordlePage from './WordlePage'
import fetchWord from './fetchword'

export default async function Home() {
  // const { word } = await fetchWord()
  return (
    <>
      <div>
        <h1>MyWordle</h1>
      </div>
      <WordlePage word="shine" />
    </>
  )
}
