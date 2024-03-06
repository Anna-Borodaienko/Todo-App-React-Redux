import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../../types/Todo'
import {
  StyledStatus,
  StyledLabel,
  Wrapper,
  StyledTitle,
  StyledButton,
  Container,
} from './TodoCard.styled'
import { useDispatch } from 'react-redux'
import { editTodo, removeTodo, toggleTodo } from '../../store/todoSlice'
import InputForm from '../InputForm'
import { TODOMAXLENGTH } from '../../constants/Todo'
import { AppDispatch } from '../../store'

interface TodoCardProps {
  todo: Todo
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }: TodoCardProps) => {
  const editTodoField = useRef<HTMLInputElement>(null)
  const [isEditing, setIsEditing] = useState(false)

  const { id, title, completed } = todo

  const [value, setValue] = useState(title)

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    // focus the element with `ref={newTodoField}`
    if (editTodoField.current) {
      editTodoField.current.focus()
    }
  }, [isEditing])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const newTitle = value.trim()
    
    if (!newTitle) {
      dispatch(removeTodo({ id }))
      setIsEditing(false)
      return
    }

    if (newTitle !== title && newTitle.length <= TODOMAXLENGTH) {
      dispatch(editTodo({ id, title: value }))
      setIsEditing(false)
      return
    }

    if (newTitle.length > TODOMAXLENGTH) {
      return
    }

    setValue(title)
    setIsEditing(false)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setValue(event.target.value)
  }

  return (
    <Wrapper data-cy='Todo'>
      <StyledLabel $completed={completed}>
        <StyledStatus
          data-cy='TodoStatus'
          type='checkbox'
          onClick={(): void => {dispatch(toggleTodo({ id }))}}
        />
      </StyledLabel>

      {isEditing ? 
        <InputForm
          placeholder={value || 'Empty todo will be deleted'}
          value={value}
          handleSubmit={handleSubmit}
          handleChange={onChange}
          ref={editTodoField}
        />
        : 
        <Container>
          <StyledTitle
            $completed={completed}
            data-cy='TodoTitle'
            onDoubleClick={(): void => setIsEditing(true)}
          >
            {title}
          </StyledTitle>
          <StyledButton
            type='button'
            data-cy='TodoDeleteButton'
            onClick={(): void => {dispatch(removeTodo({ id }))}}
          >
            ×
          </StyledButton>
        </Container>
      }
    </Wrapper>
  )
}

export default TodoCard
