import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  > input {
    width: 100%;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    background: transparent;
    font-size: 2rem;
    outline: none;
    color: ${({ theme }) => theme.colors.text};
    

    ::placeholder {
      color: ${({ theme }) => theme.colors.border};
      font-size: 0.9rem;
    }

    
  }
  > h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};

    padding: 15px 0 ;
  }
`