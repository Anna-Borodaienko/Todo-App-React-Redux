import React, { useMemo } from 'react'
import { AppWrapper, Title, Container, Header } from "./App.styled";
import TodoList from './components/TodoList'
import { AddTodoInput } from './components/AddTodoInput'
import ToggleAllButton from './components/ToggleAllButton';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';

const App: React.FC = (): JSX.Element => {
  const { todos, fieldForFilter } = useSelector((state: any) => state.todos)

  const filteredTodos = useMemo(() => {
    return todos.filter((todo: any) => {
      switch (fieldForFilter) {
        case "Active":
          return !todo.completed;

        case "Completed":
          return todo.completed;

        case "All":
        default:
          return true;
      }
    });
  }, [todos, fieldForFilter]);

  

  return (
    <AppWrapper>
      <Title>todos</Title>
      <Container>
        <Header>
          <ToggleAllButton />
          <AddTodoInput />
        </Header>
        <TodoList filteredTodos={filteredTodos} />
        <Footer />
      </Container>
    </AppWrapper>
  );
}

export default App
