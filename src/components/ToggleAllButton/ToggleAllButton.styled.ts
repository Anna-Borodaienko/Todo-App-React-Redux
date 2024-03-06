import styled from 'styled-components'

interface StyledButtonProps {
  $active: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 100%;
  width: 45px;

  transform: rotate(90deg);

  font-size: 24px;
  ${(props): string => props.$active ? 'color: #737373;' : 'color: #e6e6e6;'}

  border: 0;
  background-color: transparent;
  cursor: pointer;
`
