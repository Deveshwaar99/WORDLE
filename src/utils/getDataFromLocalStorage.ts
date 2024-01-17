export function getDataFromLocalStorage(key: string) {
  const data = localStorage.getItem(key)
  if (!data) return null
  const { date, isSuccess } = JSON.parse(data)
  return { date, isSuccess }
}
