import {createSlice} from '@reduxjs/toolkit'
import { TodoState } from './todosState'

const initialState: TodoState = {
  todos: [{
    id: '123',
    title: '456',
    completed: false
  },
  {
    id: '1232',
    title: '4562',
    completed: true
  }
  ]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action){
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        completed: false
      })
    },
    removeTodo(state, action){
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    toggleTodo(state, action){
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
      if (toggledTodo) toggledTodo.completed = !toggledTodo.completed
    },
    editTodo(state, action){
      const editedTodo = state.todos.find(todo => todo.id === action.payload.id)
      if (editedTodo) editedTodo.title = action.payload.title
    }
  }
})

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
