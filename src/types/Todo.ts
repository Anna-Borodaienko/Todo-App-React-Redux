export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type FieldForFilter = 'All' | 'Active' | 'Completed'
