import styled from 'styled-components'

interface StyledLinkProps {
  $selected: boolean
}

export const StyledLink = styled.a<StyledLinkProps>`
  margin: 3px;
  padding: 3px 7px;

  color: inherit;
  text-decoration: none;

  border: 1px solid;
  border-color: ${(props): string =>
    props.$selected ? 'rgba(175, 47, 47, 0.2)' : 'transparent'};
  border-radius: 3px;

  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }
`
