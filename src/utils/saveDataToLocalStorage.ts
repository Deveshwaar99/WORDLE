export function saveDataToLocalStorage(isSuccess: boolean, word: string) {
  const today = new Date()
  const date = today.toLocaleDateString()
  const data = {
    date,
    isSuccess,
  }
  const jsonData = JSON.stringify(data)
  localStorage.setItem('wordStatus', jsonData)
}
