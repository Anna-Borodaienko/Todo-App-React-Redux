import { AppState } from '.'
import { FieldForFilter, Todo } from '../types/Todo'

export const selectAllTodos = (state: AppState): Todo[] => state.todos.todos
export const selectActiveFilter = (state: AppState): FieldForFilter =>
  state.todos.fieldForFilter
