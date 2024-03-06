import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export const rootReducer = combineReducers({
  todos: todoReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof configuredStore.dispatch

export const configuredStore = configureStore({
  reducer: rootReducer,
})
