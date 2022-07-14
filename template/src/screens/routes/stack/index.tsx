import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../../home'

const { Navigator, Screen } = createStackNavigator()

export const StackRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={HomeScreen} />
    </Navigator>
  )
}
