import { encryptSymmetric } from './encryption'

type saveDataToLocalStorageParams = {
  isSuccess: boolean
  word: string
  streak: number
}
export async function saveDataToLocalStorage({
  word,
  isSuccess,
  streak,
}: saveDataToLocalStorageParams) {
  const today = new Date().toLocaleDateString()

  const storageObject = {
    date: today,
    word,
    isSuccess,
    streak,
  }
  const { ciphertext, iv, stringTag } = await encryptSymmetric(JSON.stringify(storageObject))

  localStorage.setItem('encryptedPayload', ciphertext)
  localStorage.setItem('initializationVector', iv)
  localStorage.setItem('stringTagValue', stringTag)
}
