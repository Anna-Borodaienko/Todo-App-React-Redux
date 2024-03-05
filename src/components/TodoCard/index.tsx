import React, { useEffect, useRef, useState } from "react"
import { Todo } from "../../types/Todo"
import {
  StyledStatus,
  StyledLabel,
  Wrapper,
  StyledInput,
  StyledTitle,
  StyledButton,
} from "./TodoCard.styled"
import { useInput } from "../hooks/useInput"

interface TodoCardProps {
  todo: Todo
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }: TodoCardProps) => {
  const editTodoField = useRef<HTMLInputElement>(null)
  const [isEditing, setIsEditing] = useState(false)

  const { value, onChange } = useInput(todo.title)

  const { title, completed } = todo

  useEffect(() => {
    // focus the element with `ref={newTodoField}`
    if (editTodoField.current) {
      editTodoField.current.focus()
    }
  }, [isEditing])

  const handleEditing = (input: boolean): void => {
    setIsEditing(input)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    handleEditing(true)
    if (value !== title) {
      handleEditing(false)
    } else {
      handleEditing(false)
    }
  }

  return (
    <Wrapper data-cy="Todo">
      <StyledLabel completed={completed}>
        <StyledStatus data-cy="TodoStatus" type="checkbox" />
      </StyledLabel>

      {isEditing ? 
        <form onSubmit={handleSubmit} onBlur={handleSubmit}>
          <StyledInput
            data-cy="NewTodoField"
            ref={editTodoField}
            type="text"
            placeholder={value || "Empty todo will be deleted"}
            value={value}
            onChange={onChange}
            onKeyDown={(event): void => {
              if (event.key === "Escape") {
                setIsEditing(false)
              }
            }}
          />
        </form>
        : 
        <>
          <StyledTitle
            data-cy="TodoTitle"
            onDoubleClick={(): void => setIsEditing(true)}
          >
            {title}
          </StyledTitle>
          <StyledButton type="button" data-cy="TodoDeleteButton">
              ×
          </StyledButton>
        </>
      }
    </Wrapper>
  )
}

export default TodoCard
