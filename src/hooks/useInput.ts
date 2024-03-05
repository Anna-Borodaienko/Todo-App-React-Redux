import { useState } from 'react'

function useInput(initialValue: string): {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  clearInput: () => void
} {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setValue(event.target.value)
  }

  const clearInput = (): void => {
    setValue('')
  }

  return {
    value,
    onChange,
    clearInput,
  }
}

export { useInput }
