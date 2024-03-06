import React from 'react'
import { AppWrapper, Title, Container, Header } from './App.styled'
import TodoList from './components/TodoList'
import { AddTodoInput } from './components/AddTodoInput'
import ToggleAllButton from './components/ToggleAllButton'
import Footer from './components/Footer'

const App: React.FC = (): JSX.Element => {

  return (
    <AppWrapper>
      <Title>todos</Title>
      <Container>
        <Header>
          <ToggleAllButton />
          <AddTodoInput />
        </Header>
        <TodoList />
        <Footer />
      </Container>
    </AppWrapper>
  )
}

export default App
