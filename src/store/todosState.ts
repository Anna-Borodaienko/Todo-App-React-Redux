import { FieldForFilter, Todo } from "../types/Todo"

export interface TodoState {
  todos: Todo[],
  fieldForFilter: FieldForFilter
}
