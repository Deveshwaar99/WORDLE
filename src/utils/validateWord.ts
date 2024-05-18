'use server'

import axios from 'redaxios'

export async function validateWord(word: string): Promise<boolean> {
  try {
    if (word.length !== 5) {
      return false
    }

    const { data } = await axios.get(`${process.env.WORD_VALIDATE_ENDPOINT}${word}`)
    if (!data) {
      throw new Error('No data available in endpoint')
    }
    return true
  } catch (error) {
    return false
  }
}
