import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './stack'

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}
