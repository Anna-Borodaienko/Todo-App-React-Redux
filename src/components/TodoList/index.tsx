import { Wrapper } from "./TodoList.styled"
import React from "react"
import { useSelector } from "react-redux"
import { Todo } from "../../types/Todo"
import TodoCard from "../TodoCard"

const TodoList: React.FC = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const todos: Todo[] = useSelector((state: any) => state.todos.todos)

  return <Wrapper>
    {todos.map(todo => <TodoCard key={todo.id} todo={todo} />)}
  </Wrapper>
}

export default TodoList
