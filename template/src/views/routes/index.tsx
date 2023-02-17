import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { DrawerNavigation } from './drawer'

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  )
}
