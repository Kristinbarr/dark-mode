import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  // creates localStorage state, gets localStorage and sees if anything exists
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  // function that sets localStorage
  const setValue = (value) => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}

export default useLocalStorage
