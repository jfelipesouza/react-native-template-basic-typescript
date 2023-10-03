import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { MainNavigation } from './screens/routes'
import { DARK_THEME, LIGHT_THEME } from './theme'

const MainApplication: React.FC = () => {
  const theme = useColorScheme()
  return (
    <ThemeProvider theme={theme === 'dark' ? DARK_THEME : LIGHT_THEME}>
      <MainNavigation />
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={
          theme === 'dark'
            ? DARK_THEME.colors.background
            : LIGHT_THEME.colors.background
        }
      />
    </ThemeProvider>
  )
}

const App: React.FC = () => {
  return <MainApplication />
}
export { MainApplication, App }
