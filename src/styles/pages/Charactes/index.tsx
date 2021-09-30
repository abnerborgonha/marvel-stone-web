import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 50vw;
  margin-top: 4rem;
`;

export const  Grid = styled.div`
  display: grid;
  grid-gap: 4rem 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  margin-top: 4rem;
`;