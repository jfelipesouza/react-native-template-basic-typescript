import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import { light } from '../theme'

const Main: React.FC = () => {
  const [theme, setTheme] = useState(light)

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
