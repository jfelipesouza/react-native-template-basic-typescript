import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'styled-components';
import {Container, Description, Inline, Title} from './styled';

export const HomeScreen: React.FC = () => {
  const {fontSize: size, colors, space} = useTheme();
  return (
    <Container>
      <Ionicons
        name={'logo-react'}
        color={colors.primary}
        size={size.icons}
        style={{marginLeft: space.sm}}
      />
      <Title>Welcome to my template!</Title>

      <Description>
        Start development by changing the src/screens/home/index.tsx file.
      </Description>
    </Container>
  );
};
