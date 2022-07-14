import React from 'react'
import { Container, Description, Title } from './styled'

export const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to my template!</Title>
      <Description>
        Start development by changing the src/screens/home/index.tsx file.
      </Description>
    </Container>
  )
}
