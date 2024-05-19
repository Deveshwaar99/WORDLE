import { Dispatch, SetStateAction } from 'react'

//types
import { UsedKeys } from '@/utils/addColors'
import { Delete } from 'lucide-react'
import { cn } from '@/lib/utils'
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
  handleEnterKey: () => Promise<void>
}
export default function Keypad({
  currentGuess,
  setCurrentGuess,
  keypadColors,
  handleEnterKey,
}: keypadProps) {
  const handleClick = (letter: string) => {
    if (currentGuess.length < 5) {
      setCurrentGuess(prev => prev + letter.toLocaleLowerCase())
    }
  }

  const handleDelete = () => {
    if (currentGuess.length) {
      setCurrentGuess(prev => prev.slice(0, prev.length - 1))
    }
  }
  async function handleEnterClick() {
    await handleEnterKey()
  }
  return (
    <>
      <div className="mx-auto flex max-w-[500px] flex-wrap justify-center">
        {letters.map(l => {
          const color = keypadColors[l.key.toLowerCase()]
          return (
            <>
              <div
                key={l.key}
                onClick={() => handleClick(l.key)}
                className={cn(
                  '  cursor-pointer m-[3px] w-10 h-[50px] bg-[#818384] rounded-[6px] text-white leading-[50px] transition-all duration-300 ease-in',
                  color === 'green' && ' bg-[#538d4e] ',
                  color === 'yellow' && ' bg-[#b59f3b] ',
                  color === 'grey' && ' bg-[#3a3a3c] '
                )}
              >
                {l.key}
              </div>
            </>
          )
        })}
        <div
          onClick={handleDelete}
          className="m-[3px] flex h-[50px] w-16 cursor-pointer items-center justify-center rounded-[6px] bg-[#818384] leading-[50px] text-white transition-all duration-300 ease-in"
        >
          <Delete />
        </div>
      </div>
      <button
        onClick={handleEnterClick}
        className="w-full max-w-40 rounded-md bg-[#818384] p-2 text-base font-semibold tracking-wider"
      >
        Enter
      </button>
    </>
  )
}
