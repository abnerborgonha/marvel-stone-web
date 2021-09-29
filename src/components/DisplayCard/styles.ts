import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30rem;
  height: 30rem;
  padding: 1rem;

  border-radius: 2.5rem;
  background: ${(({theme}) => theme.colors.primary)}
`