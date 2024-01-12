import { FormattedGuess, FormattedGuessList } from '@/types/types'

export type UsedKeys = {
  [key: string]: 'green' | 'yellow' | 'grey'
}

export default function addColorstoKeyboard(formattedGuess: FormattedGuess, usedKeys: UsedKeys) {
  for (let letter of formattedGuess) {
    if (!usedKeys[letter.char]) {
      usedKeys[letter.char] = letter.color
      continue
    }
    if (usedKeys[letter.char] === 'green') continue
    if (usedKeys[letter.char] === 'yellow' && letter.color === 'green') {
      usedKeys[letter.char] = letter.color
      continue
    }
    if (usedKeys[letter.char] === 'yellow' && letter.color === 'grey') continue
    usedKeys[letter.char] = letter.color
  }
  return usedKeys
}
