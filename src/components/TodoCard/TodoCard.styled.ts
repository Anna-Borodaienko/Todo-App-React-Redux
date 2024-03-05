import styled from "styled-components"
import iconCompleted from '../../icons/completed.svg'
import iconUncompleted from '../../icons/uncompleted.svg'

interface StyledLabelProps {
  completed: boolean
}

export const Wrapper = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 45px 1fr;
  justify-items: stretch;

  font-size: 24px;
  line-height: 1.4em;
  border-bottom: 1px solid #ededed;
  
  &:last-child {
    border-bottom: 0;
  }
`

export const StyledLabel = styled.label<StyledLabelProps>`
  cursor: pointer;
  background-image: ${(props): string => 
    props.completed 
      ? `url(${iconCompleted})` 
      : `url(${iconUncompleted})`} ;
  background-repeat: no-repeat;
  background-position: center left;
`

export const StyledStatus = styled.input`
  opacity: 0;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 60px;

  font-size: 24px;
  line-height: 1.4em;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;

  border: none;
  background: rgba(0, 0, 0, 0.01);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);

  &::placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
  
  word-break: break-all;
  transition: color 0.4s;
`

export const StyledTitle = styled.span`
  padding: 12px 15px;
  
  word-break: break-all;
  transition: color 0.4s;
`

export const StyledButton = styled.button`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;

  font-size: 120%;
  line-height: 1;
  font-family: inherit;
  font-weight: inherit;
  color: #cc9a9a;

  float: right;
  border: 0;
  background: none;
  cursor: pointer;

  transform: translateY(-2px);
  opacity: 0;
  transition: color 0.2s ease-out;

  &:hover {
    color: #af5b5e;
    opacity: 1;
  }
`
