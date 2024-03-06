import React from 'react'
import { StyledButton } from './ToggleAllButton.styled'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAllTodos } from '../../store/todoSlice'
import { AppDispatch, AppState } from '../../store'
import { Todo } from '../../types/Todo'

const ToggleAllButton: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch()
  const { todos } = useSelector(
    (state: AppState): { todos: Todo[] } => ({
      todos: state.todos.todos,
    })
  )

  return (
    <StyledButton
      active={todos.some((todo: Todo) => todo.completed === false)}
      data-cy='ToggleAllButton'
      type='button'
      aria-label='Toggle Button'
      onClick={(): void => {dispatch(toggleAllTodos())}}
    >
      ❯
    </StyledButton>
  )
}

export default ToggleAllButton
