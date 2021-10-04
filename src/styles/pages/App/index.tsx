import styled from 'styled-components'
import Button from '../../../components/Button'

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 50vw;

  padding: 1rem;

  @media (max-width: 1200px) {
    width: 100vw;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 4rem 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  margin-top: 4rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 400px) {
    justify-content: center;
    width: 100%;
  }
`

export const FavoriteOptions = styled.div`
  display: flex;

  width: 100%;
  margin-top: 20px;

  > Button {
    margin: 0;

    & + button {
      margin-left: 30px;
    }

    height: 50px;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    > Button {
      margin-top: 30px;
    }
  }
`

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50vh;
`;