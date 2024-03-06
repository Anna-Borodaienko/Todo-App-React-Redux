import React from 'react'
import { FormWrapper, InputWrapper } from './InputForm.styled'
import { TODOMAXLENGTH } from '../../constants/Todo'

interface InputFormProps {
  placeholder: string
  value: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputForm = React.forwardRef<HTMLInputElement, InputFormProps>(
  function InputForm(
    { placeholder, value, handleSubmit, handleChange }: InputFormProps,
    ref
  ): JSX.Element {
    return (
      <FormWrapper
        onSubmit={handleSubmit}
        onBlur={handleSubmit}
        $valueLength={value.length}
        $maxTodoLength={TODOMAXLENGTH}
      >
        <InputWrapper
          data-cy='NewTodoField'
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          ref={ref}
        />
      </FormWrapper>
    )
  }
)

export default InputForm
