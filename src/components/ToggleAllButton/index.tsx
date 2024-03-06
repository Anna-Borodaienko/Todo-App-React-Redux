import React from 'react'
import { StyledButton } from './ToggleAllButton.styled'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAllTodos } from '../../store/todoSlice'
import { AppDispatch } from '../../store'
import { Todo } from '../../types/Todo'
import { selectAllTodos } from '../../store/selectors'

const ToggleAllButton: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch()
  const todos = useSelector(selectAllTodos)

  return (
    <StyledButton
      $active={todos.some((todo: Todo) => !todo.completed)}
      data-cy='ToggleAllButton'
      type='button'
      aria-label='Toggle Button'
      onClick={(): void => {
        dispatch(toggleAllTodos())
      }}
    >
      ❯
    </StyledButton>
  )
}

export default ToggleAllButton
