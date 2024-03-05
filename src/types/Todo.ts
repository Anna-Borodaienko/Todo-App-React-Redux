export interface Todo {
  id: string
  title: string
  completed: boolean
}

export enum FieldForSorting {
  All,
  Active,
  Completed,
}
