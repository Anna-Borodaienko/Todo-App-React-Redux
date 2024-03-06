import { createSlice } from '@reduxjs/toolkit'
import { TodoState } from './todosState'

const initialState: TodoState = {
  todos: [],
  fieldForFilter: 'All',
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.title.trim(),
        completed: false,
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTodo(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      )
      if (toggledTodo) toggledTodo.completed = !toggledTodo.completed
    },
    toggleAllTodos(state) {
      const hasActiveTodo = state.todos.some((todo) => todo.completed === false)
      if (hasActiveTodo) {
        state.todos.forEach((todo) => todo.completed = true)
      } else {
        state.todos.forEach((todo) => todo.completed = false)
      }
    },
    editTodo(state, action) {
      const editedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      )
      if (editedTodo) editedTodo.title = action.payload.title.trim()
    },
    removeCompletedTodos(state) {
      state.todos = state.todos.filter((todo) => todo.completed !== true)
    },
    changeFilter(state, action) {
      state.fieldForFilter = action.payload.fieldForFilter
    },
  },
})

const { reducer } = todoSlice

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  toggleAllTodos,
  editTodo,
  removeCompletedTodos,
  changeFilter,
} = todoSlice.actions

export default reducer
