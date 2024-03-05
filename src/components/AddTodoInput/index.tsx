import React, { useState } from 'react'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todoSlice'
import { InputWrapper, StyledError, FormWrapper } from './AddTodoInput.styled'
import { todoMaxLength } from '../../constants/Todo'

export const AddTodoInput: React.FC = (): JSX.Element => {
  const { value, onChange, clearInput } = useInput('')
  const [isError, setIsError] = useState(false)

  const dispatch = useDispatch()

  const submitAddingTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (value.trim().length <= todoMaxLength) {
      setIsError(false)
      dispatch(addTodo({ title: value }))
      clearInput()
    } else {
      setIsError(true)
    }
  }

  return (
    <FormWrapper onSubmit={submitAddingTodo}>
      <InputWrapper
        data-cy='NewTodoField'
        type='text'
        placeholder='What needs to be done?'
        value={value}
        onChange={onChange}
      />
      {isError && <StyledError>Your Todo is too long</StyledError>}
    </FormWrapper>
  )
}
