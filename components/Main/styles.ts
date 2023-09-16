import styled from 'styled-components'

export const Card = styled.a`
  border-radius: 10px;
  border: 1px solid #eaeaea;
  color: inherit;
  flex-basis: 45%;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  text-decoration: none;
  transition:
    color 0.15s ease,
    border-color 0.15s ease;
    &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`

export const Grid = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const Main = styled.div`
  align-items: center;
  border-top: 1px solid #eaeaea;
  color: inherit;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  padding: 5rem 0;
  text-decoration: none;
  width: 100%;
`

export const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`

