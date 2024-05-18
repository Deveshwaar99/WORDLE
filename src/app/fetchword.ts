'use server'

export async function fetchWord() {
  let response = await fetch(`${process.env.WORD_GET_ENDPOINT}`, {
    next: { revalidate: 15 * 60 }, //revalidate every 15 mins
  })

  if (response.ok) {
    let { word } = await response.json()

    return { word } as { word: string }
  } else {
    throw new Error('Failed to fetch data')
  }
}
