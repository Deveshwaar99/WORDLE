'use server'

export async function fetchWord() {
  let response = await fetch(
    `${process.env.WORD_GET_ENDPOINT}`,
    { cache: 'no-store' } //No caching
  )

  if (response.ok) {
    let { word } = await response.json()

    return { word } as { word: string }
  } else {
    throw new Error('Failed to fetch data')
  }
}
