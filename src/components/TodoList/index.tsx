import { Wrapper } from './TodoList.styled'
import React from 'react'
import { Todo } from '../../types/Todo'
import TodoCard from '../TodoCard'

interface TodoListProps {
  filteredTodos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({
  filteredTodos,
}: TodoListProps): JSX.Element => {
  return (
    <Wrapper>
      {filteredTodos.map((todo) => 
        <TodoCard key={todo.id} todo={todo} />
      )}
    </Wrapper>
  )
}

export default TodoList
