import React from 'react'
import { AppWrapper, Title, ListContainer } from './App.styled'
import TodoList from './components/TodoList'

const App: React.FC = (): JSX.Element => {
  return (
    <AppWrapper>
      <Title>todos</Title>
      <ListContainer>
        <TodoList />
      </ListContainer>
    </AppWrapper>
  )
}

export default App
