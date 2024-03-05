import React from 'react'
import { AppWrapper, Title, ListContainer } from './App.styled'
import TodoList from './components/TodoList'
import { AddTodoInput } from './components/AddTodoInput'

const App: React.FC = (): JSX.Element => {
  return (
    <AppWrapper>
      <Title>todos</Title>
      <AddTodoInput />
      <ListContainer>
        <TodoList />
      </ListContainer>
    </AppWrapper>
  )
}

export default App
