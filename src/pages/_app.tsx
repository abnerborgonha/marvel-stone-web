import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import AuthProvider from '../contexts/AuthContext'
import ModalProvider from '../contexts/ModalContext'
import ToastNotificationProvider from '../contexts/ToastNotification'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ToastNotificationProvider>
          <ModalProvider>
            <Component {...pageProps} />
            <GlobalStyle />
          </ModalProvider>
        </ToastNotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
