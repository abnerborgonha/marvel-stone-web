import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  width: 100vw;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    color: ${({ theme }) => theme.colors.black};
    margin: 0 50px;

    cursor: pointer;

    :hover {
      font-weight: bold;
    }
  }
`
