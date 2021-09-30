import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  > input {
    width: 100%;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.secondary};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    padding: 15px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.border};
      font-size: 0.9rem;
    }
  }
  > section {
    position: relative;
    width: 100%;
    > b {
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.9rem;
    }
  }
  & + section {
    margin-top: 20px;
  }
`