import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useTheme } from 'styled-components'
import { StackRoutes } from '../stack'

const { Navigator, Screen } = createDrawerNavigator()

export const DrawerNavigation: React.FC = () => {
  const { colors, fonts, fontSize } = useTheme()

  const screenOptions = {
    drawerLabelStyle: {
      color: colors.secundary,
      fontFamily: fonts.inter.bold,
      fontSize: fontSize.text
    },
    headerShown: false,
    drawerStyle: {
      backgroundColor: colors.background
    },
    drawerActiveBackgroundColor: 'rgba(0,0,0,0.1)'
  }

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen component={StackRoutes} name={'main'} />
    </Navigator>
  )
}
