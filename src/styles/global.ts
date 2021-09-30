import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::-webkit-scrollbar {
      width: 10px !important;
    }
    &::-webkit-scrollbar-thumb {
      -webkit-border-radius: 8px;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.primary}
    }
    &::-webkit-scrollbar-track {
      -webkit-border-radius: 8px;
      border-radius: 8px;
    }
    overflow-x: hidden;
  }
`
