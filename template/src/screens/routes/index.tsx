import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackFlow } from './stacks'

/*
 * Navigation container with application routes.
 * See the documentation https://reactnavigation.org/docs/hello-react-navigation for more customization information.
 */
export const MainNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStackFlow />
    </NavigationContainer>
  )
}
