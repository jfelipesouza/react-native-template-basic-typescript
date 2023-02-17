import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { light } from './themes'
import { Routes } from './views/routes'

export const MainAplication: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <Routes />
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
    </ThemeProvider>
  )
}
