//types
import { FormattedGuessList } from '@/types/types'
//components
import Row from './Row'

type GridProps = {
  formattedGuessList: FormattedGuessList
  currentGuess: string
  currentTurn: number
}

export default function Grid({ formattedGuessList, currentGuess, currentTurn }: GridProps) {
  return (
    <div>
      {formattedGuessList.map((item, index) => {
        if (currentTurn === index) {
          return <Row key={index} currentGuess={currentGuess} />
        }
        return <Row key={index} formattedGuess={item} />
      })}
    </div>
  )
}
