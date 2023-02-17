import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components'
import { Container, Description, Title } from './styled'

export const HomeScreen: React.FC = () => {
  const {
    fontSize: size,
    colors,
    space,
    dimensions: { width }
  } = useTheme()
  return (
    <Container>
      <Ionicons
        name={'logo-react'}
        color={colors.primary}
        size={width * 0.5}
        style={{ marginLeft: space.sm }}
      />
      <Title>Welcome to my template!</Title>

      <Description>
        Start development by changing the src/screens/home/index.tsx file.
      </Description>
    </Container>
  )
}
