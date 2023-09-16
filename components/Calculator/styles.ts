import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid gray;
  padding: 24px;
  display: flex;
  flex-direction: column
`

export const Cell = styled.div`
  border: 1px solid gray;
  padding: 8px;
  display: flex;
  flex-direction: row;
  width: 300px
`

export const Input = styled.input`
  border-radius: 3px;
  border-width: 0.5px;
`

export const Result = styled.div`
  border: 0.5px solid gray;
  border-radius: 3px;
  font-size: 12px;
  color: blue;
  margin-right: 8px;
  width: 200px;
`

export const Row = styled.div`
  display: flex;
  flex-direcion: row;
`

export const Text = styled.div`
  font-size: 12px;
  color: blue;
  margin-right: 8px;
  width: 200px;
`
