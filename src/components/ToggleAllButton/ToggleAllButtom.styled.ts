import styled from "styled-components";

interface StyledButtonProps {
  active: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  position: absolute;

  height: 100%;
  width: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  color: ${props => props.active ? '#737373' : '#e6e6e6'};

  border: 0;
  background-color: transparent;
  cursor: pointer;

  &:before {
    content: "❯";
    transform: translateY(2px) rotate(90deg);
    line-height: 0;
  }
`
