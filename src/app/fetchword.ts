export default async function fetchWord() {
  'use server'
  console.log('Fetch is getting called')
  let response = await fetch(process.env.API_URL || '', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_URL_KEY || '',
      'X-RapidAPI-Host': process.env.API_URL_HOST || '',
    },
    next: { revalidate: 3600 * 24 },
  })
  if (response.ok) {
    let { word } = await response.json()
    return { status: 'success', word }
  } else {
    throw new Error('Failed to fetch data')
  }
}
