import { Dispatch, SetStateAction } from 'react'

//types
import { UsedKeys } from '@/utils/addColors'
const letters = [
  { key: 'Q' },
  { key: 'W' },
  { key: 'E' },
  { key: 'R' },
  { key: 'T' },
  { key: 'Y' },
  { key: 'U' },
  { key: 'I' },
  { key: 'O' },
  { key: 'P' },
  { key: 'A' },
  { key: 'S' },
  { key: 'D' },
  { key: 'F' },
  { key: 'G' },
  { key: 'H' },
  { key: 'J' },
  { key: 'K' },
  { key: 'L' },
  { key: 'Z' },
  { key: 'X' },
  { key: 'C' },
  { key: 'V' },
  { key: 'B' },
  { key: 'N' },
  { key: 'M' },
]
type keypadProps = {
  currentTurn?: number
  currentGuess: string
  setCurrentGuess: Dispatch<SetStateAction<string>>
  keypadColors: UsedKeys
}
export default function Keypad({ currentGuess, setCurrentGuess, keypadColors }: keypadProps) {
  function handleClick(letter: string) {
    if (currentGuess.length < 5) {
      setCurrentGuess(prev => prev + letter)
    }
  }
  console.log(keypadColors)

  return (
    <div className="keypad">
      {letters.map(l => {
        const color = keypadColors[l.key.toLowerCase()]
        return (
          <div key={l.key} className={color} onClick={() => handleClick(l.key)}>
            {l.key}
          </div>
        )
      })}
    </div>
  )
}
