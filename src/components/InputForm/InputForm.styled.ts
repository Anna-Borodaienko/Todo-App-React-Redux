import styled from 'styled-components'

export const FormWrapper = styled.form`
  flex: 1;
`

export const InputWrapper = styled.input`
  width: 100%;
  padding: 16px 16px 16px 16px;

  font-size: 24px;
  line-height: 1.4em;
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
