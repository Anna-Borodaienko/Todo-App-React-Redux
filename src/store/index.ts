import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export type AppState = ReturnType<typeof todoReducer>

export type AppDispatch = typeof configuredStore.dispatch

export const configuredStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
})
