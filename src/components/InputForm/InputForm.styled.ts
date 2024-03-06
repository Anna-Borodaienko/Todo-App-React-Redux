import styled from 'styled-components'

interface FormWrapperProps {
  $valueLength: number
  $maxTodoLength: number
}

export const FormWrapper = styled.form<FormWrapperProps>`
  flex: 1;

  position: relative;

  &::after {
    content: ${(props): string => props.$valueLength !== 0 ? `"${props.$valueLength} / ${props.$maxTodoLength}"` : ''};
    color: ${(props): string => props.$valueLength > props.$maxTodoLength ? '#ff0000' : 'inherit'};
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 16px;
    font-weight: 600;
  }
`

export const InputWrapper = styled.input`
  width: 100%;
  padding: 16px 16px 16px 16px;

  font-size: 24px;
  line-height: 2em;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;

  border: none;
  background: inherit;
  box-shadow: inherit;

  &::placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
`
