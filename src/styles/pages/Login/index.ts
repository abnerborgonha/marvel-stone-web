import {Form as UnformFormComponent } from '@unform/web'
import styled from 'styled-components'
import theme from '../../theme';

export const Container = styled.section`
  display: flex;
  width: 100vw;
`

export const LeftSide = styled.div`
  height: 100vh;
  width: 100%;

  background: url('../img/marvel-background.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0 20px 20px 0;

  max-width: 800px;

  @media(max-width: 1200px) {
    display: none;
  }
`


export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 60vw;


  @media(max-width: 1200px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Form = styled(UnformFormComponent)`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 450px;
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
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  
  padding: 15px 0;
  width : 100%;
`

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${({theme}) => theme.colors.border};
  margin: 10px 0
`