import styled from 'styled-components'
import { Form as UnformFormComponent } from '@unform/web'

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  overflow: auto;

  @media (min-width: 700px) {
    place-content: center;
    height: 100vh;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 700px) {
    margin-top: 20px;
  }
`

export const Title = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 10px 0;
`

export const Form = styled(UnformFormComponent)`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 30vw;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    section:first-child {
      width: 60%;
    }
    section:last-child {
      width: 35%;
    }
    > section {
      margin: 0;
    }
  }
  > button {
    margin-top: 20px;
  }

  @media (max-width: 1200px) {
    width: 90vw;
  }
`

export const Line = styled.hr`
  width: 100%;
  color: ${({ theme }) => theme.colors.border};

  margin: 2rem 0;
`

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.border};
  margin: 10px 0;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 15px 0;
  width: 100%;
`
