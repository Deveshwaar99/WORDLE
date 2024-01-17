import { FormattedGuess } from '@/types/types'
import { useTheme } from './ThemeProvider'

type RowProps = {
  formattedGuess?: FormattedGuess
  currentGuess?: String
}

export default function Row({ formattedGuess, currentGuess }: RowProps) {
  const { theme } = useTheme()
  const textClassName = theme === 'light' ? 'text-black' : 'text-white'
  if (formattedGuess) {
    return (
      <div className={`${textClassName} row past `}>
        {formattedGuess.map((l, i) => (
          <div key={i} className={l.color}>
            {l.char}
          </div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className={`row current ${textClassName}`}>
        {letters.map((letter, i) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    )
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
