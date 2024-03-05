import { styled } from 'styled-components'

export const AppWrapper = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: #4d4d4d;
  margin: 40px 20px;
`

export const Container = styled.div`
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  line-height: 1.5;
  color: rgba(175, 47, 47, 0.15);
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.01);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
`
