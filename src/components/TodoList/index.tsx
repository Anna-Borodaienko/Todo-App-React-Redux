import { Wrapper } from './TodoList.styled'
import React, { useMemo } from 'react'
import TodoCard from '../TodoCard'
import { useSelector } from 'react-redux'
import { Todo } from '../../types/Todo'
import { selectActiveFilter, selectAllTodos } from '../../store/selectors'

const TodoList: React.FC = (): JSX.Element => {
  const todos = useSelector(selectAllTodos)
  const fieldForFilter = useSelector(selectActiveFilter)

  const filteredTodos = useMemo(() => {
    return todos.filter((todo: Todo) => {
      switch (fieldForFilter) {
        case 'Active':
          return !todo.completed

        case 'Completed':
          return todo.completed

        case 'All':
        default:
          return true
      }
    })
  }, [todos, fieldForFilter])

  return (
    <Wrapper>
      {filteredTodos.map((todo: Todo) => 
        <TodoCard key={todo.id} todo={todo} />
      )}
    </Wrapper>
  )
}

export default TodoList
