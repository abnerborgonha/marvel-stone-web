import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  > input {
    width: 100%;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.secondary};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    padding: 10px;

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

export const Error = styled.b`
  color: #cd1d26 !important;
  font-size: 0.8rem;
  max-width: 50%;
  word-break: break-all;
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
`
