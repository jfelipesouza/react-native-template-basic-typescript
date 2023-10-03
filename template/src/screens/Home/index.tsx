import React from 'react'
import { Linking } from 'react-native'

import { Bold, Button, Container, Paragraph, Title } from './styled'
import { Card } from '../../components/Cards'

const HomeScreen: React.FC = () => {
  const handleGreeting = (): string => {
    const currentTime = new Date().getHours()
    if (currentTime >= 0 && currentTime < 12) {
      return 'Bom dia'
    } else if (currentTime >= 12 && currentTime < 19) {
      return 'Boa tarde'
    } else {
      return 'Boa noite'
    }
  }

  const openLink = () => {
    Linking.openURL('https://patreon.com/Prestos')
  }

  return (
    <Container>
      <Title>Ola! {handleGreeting()}</Title>
      <Paragraph weight={600}>Bem vindo ao meu template</Paragraph>

      <Card title={'Inicio'}>
        <Paragraph size={'sm'} weight={500}>
          Comece a desenvolver alterando o arquivo <Bold> index.tsx</Bold> em
          <Bold> src/screens/home.</Bold>
        </Paragraph>
      </Card>

      <Card title={'Apoie'}>
        <Paragraph size={'sm'} weight={500}>
          Ajude a manter o projeto sempre atualizado com qualquer valor.
        </Paragraph>
        <Button onPress={openLink}>
          <Paragraph size={'sm'} weight={700} color="white">
            Contribua agora
          </Paragraph>
        </Button>
      </Card>
    </Container>
  )
}

export { HomeScreen }
