import { decryptSymmetric } from './encryption'

export async function getDataFromLocalStorage() {
  const encryptedPayload = localStorage.getItem('encryptedPayload')
  const initializationVector = localStorage.getItem('initializationVector')
  const stringTagValue = localStorage.getItem('stringTagValue')

  if (!encryptedPayload || !initializationVector || !stringTagValue) return null
  const storageObject = await decryptSymmetric(
    encryptedPayload,
    initializationVector,
    stringTagValue
  )

  const { word, date, isSuccess, streak } = JSON.parse(storageObject)

  return { word, date, isSuccess, streak } as {
    word: string
    date: string
    isSuccess: boolean
    streak: number
  }
}
