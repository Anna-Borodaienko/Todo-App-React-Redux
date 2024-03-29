import { styled } from 'styled-components'

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: content-box;
  height: 20px;
  padding: 10px 15px;

  font-size: 14px;

  color: #777;
  text-align: center;
  border-top: 1px solid #e6e6e6;

  box-shadow:
    0 1px 1px rgba(0, 0, 0, 0.2),
    0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2),
    0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
`

export const StyledNav = styled.nav`
  display: flex;
`

export const ClearButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;

  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  text-decoration: none;

  cursor: pointer;
  background: none;

  appearance: none;

  &:hover {
    text-decoration: underline;
  }
`
