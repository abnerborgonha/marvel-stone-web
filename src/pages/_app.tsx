import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import AuthProvider from '../contexts/AuthContext'
import ModalProvider from '../contexts/ModalContext'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ModalProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </ModalProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
