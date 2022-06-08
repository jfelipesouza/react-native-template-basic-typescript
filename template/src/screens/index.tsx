import React, { useContext, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import { light, dark } from '../theme'
import { Context } from '../services/context'

const Main: React.FC = () => {
  const [theme, setTheme] = useState(light)
  const { isDark } = useContext(Context)

  useEffect(() => {
    if (isDark === true) {
      setTheme(dark)
    }
    if (isDark === false) {
      setTheme(light)
    }
  }, [isDark])

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.primary}
      />
      <Routes />
    </ThemeProvider>
  )
}

export default Main
