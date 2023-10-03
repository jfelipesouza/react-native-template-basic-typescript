import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../../Home'

const { Navigator, Screen } = createStackNavigator()

export const MainStackFlow: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen component={HomeScreen} name="home" />
    </Navigator>
  )
}
