import styled from 'styled-components'

export const Background = styled.section`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 3;
`

export const Container = styled.main`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;
  position: relative;

  padding: 20px;

  max-width: 700px;
  

  & > svg {
    align-self: flex-end;
    font-weight: bold;
  }

  @media (min-width: 700px) {
    width: 60%;
    height: 90%;

    border-radius: 10px;
  }
`

export const Content = styled.section`
  
  margin-top: 10px;

  overflow-y: auto;

  margin-bottom: 4.2rem;


`
