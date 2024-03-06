import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todoSlice'
import { TODOMAXLENGTH } from '../../constants/Todo'
import InputForm from '../InputForm'
import { AppDispatch } from '../../store'

export const AddTodoInput: React.FC = (): JSX.Element => {
  const [value, setValue] = useState('')

  const dispatch: AppDispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (value.trim().length <= TODOMAXLENGTH && value.trim() !== '') {
      dispatch(addTodo({ title: value }))
      setValue('')
    } else {
      setValue(value.trim())
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setValue(event.target.value)
  }

  return (
    <InputForm
      placeholder='What needs to be done?'
      value={value}
      handleSubmit={handleSubmit}
      handleChange={onChange}
    />
  )
}
