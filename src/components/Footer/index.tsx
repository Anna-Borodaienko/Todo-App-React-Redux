import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ClearButton, FooterWrapper, StyledNav } from './Footer.styled'
import { removeCompletedTodos } from '../../store/todoSlice'
import { AppDispatch } from '../../store'
import { Todo } from '../../types/Todo'
import { selectActiveFilter, selectAllTodos } from '../../store/selectors'
import FilterLink from '../FilterLink'

const Footer: React.FC = (): JSX.Element => {
  const todos = useSelector(selectAllTodos)
  const fieldForFilter = useSelector(selectActiveFilter)
  const dispatch: AppDispatch = useDispatch()

  const activeTodosNumber = useMemo(() => {
    const completedTodos = todos.filter((todo: Todo) => todo.completed)

    return todos.length - completedTodos.length
  }, [todos])

  return (
    <FooterWrapper data-cy='Footer'>
      <span data-cy='todosCounter'>{`${activeTodosNumber} items left`}</span>

      <StyledNav data-cy='Filter'>
        <FilterLink
          href={'#/'}
          selected={fieldForFilter === 'All'}
          fieldForFilter={'All'}
        >
          All
        </FilterLink>

        <FilterLink
          href={'#/active'}
          selected={fieldForFilter === 'Active'}
          fieldForFilter={'Active'}
        >
          Active
        </FilterLink>

        <FilterLink
          href={'#/completed'}
          selected={fieldForFilter === 'Completed'}
          fieldForFilter={'Completed'}
        >
          Completed
        </FilterLink>
      </StyledNav>

      {todos.length > 0 && 
        <ClearButton
          data-cy='ClearCompletedButton'
          type='button'
          className='todoapp__clear-completed'
          onClick={(): void => {
            dispatch(removeCompletedTodos())
          }}
        >
          Clear completed
        </ClearButton>
      }
    </FooterWrapper>
  )
}

export default Footer
