import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  ClearButton,
  FooterWrapper,
  StyledLink,
  StyledNav,
} from './Footer.styled'
import { changeFilter, removeCompletedTodos } from '../../store/todoSlice'
import { AppDispatch, AppState } from '../../store'
import { Todo } from '../../types/Todo'

const Footer: React.FC = (): JSX.Element => {
  const { todos, fieldForFilter } = useSelector(
    (state: AppState): { todos: Todo[], fieldForFilter: string } => ({
      todos: state.todos.todos,
      fieldForFilter: state.todos.fieldForFilter,
    })
  )
  const dispatch: AppDispatch = useDispatch()

  const activeTodosNumber = useMemo(() => {
    const completedTodos = todos.filter((todo: Todo) => todo.completed)

    return todos.length - completedTodos.length
  }, [todos])

  return (
    <FooterWrapper data-cy='Footer'>
      <span data-cy='todosCounter'>{`${activeTodosNumber} items left`}</span>

      <StyledNav data-cy='Filter'>
        <StyledLink
          data-cy='FilterLinkAll'
          href='#/'
          selected={fieldForFilter === 'All'}
          onClick={(): void => {dispatch(changeFilter({ fieldForFilter: 'All' }))}}
        >
          All
        </StyledLink>

        <StyledLink
          data-cy='FilterLinkActive'
          href='#/active'
          selected={fieldForFilter === 'Active'}
          onClick={(): void => {dispatch(changeFilter({ fieldForFilter: 'Active' }))}}
        >
          Active
        </StyledLink>

        <StyledLink
          data-cy='FilterLinkCompleted'
          href='#/completed'
          selected={fieldForFilter === 'Completed'}
          onClick={(): void =>
          {dispatch(changeFilter({ fieldForFilter: 'Completed' }))}
          }
        >
          Completed
        </StyledLink>
      </StyledNav>

      {todos.length > 0 && 
        <ClearButton
          data-cy='ClearCompletedButton'
          type='button'
          className='todoapp__clear-completed'
          onClick={(): void => {dispatch(removeCompletedTodos())}}
        >
          Clear completed
        </ClearButton>
      }
    </FooterWrapper>
  )
}

export default Footer
