import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { MoonStar, Sun } from "lucide-react-native";

import { Bold, Button, Container, Header, Paragraph, Title } from "./styled";
import { Card } from "../../components/Cards";
import { useThemeContext } from "../../services/ThemeContext";
import { useTheme } from "styled-components";

const HomeScreen: React.FC = () => {
  const { theme, changeTheme } = useThemeContext();
  const { colors, fontsize } = useTheme();

  const handleGreeting = (): string => {
    const currentTime = new Date().getHours();
    if (currentTime >= 0 && currentTime < 12) {
      return "Bom dia";
    } else if (currentTime >= 12 && currentTime < 19) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };

  const openLink = () => {
    Linking.openURL(
      "https://github.com/jfelipesouza/react-native-template-basic-typescript"
    );
  };

  const handleChangeTheme = () => {
    changeTheme(!theme);
  };

  return (
    <Container>
      <Header>
        <Title>Ola! {handleGreeting()}</Title>
        <TouchableOpacity onPressOut={handleChangeTheme}>
          {theme ? (
            <MoonStar fontSize={fontsize.sm} color={colors.text} />
          ) : (
            <Sun fontSize={fontsize.sm} color={colors.text} />
          )}
        </TouchableOpacity>
      </Header>
      <Paragraph weight={600}>Bem vindo ao meu template</Paragraph>

      <Card title={"Inicio"}>
        <Paragraph size={"sm"} weight={500}>
          Comece a desenvolver alterando o arquivo <Bold> index.tsx</Bold> em
          <Bold> src/screens/home.</Bold>
        </Paragraph>
      </Card>
      <Card title={"Apoie"}>
        <Paragraph size={"sm"} weight={500}>
          Ajude a manter o projeto sempre atualizado com qualquer ajuda.
        </Paragraph>
        <Button onPress={openLink}>
          <Paragraph size={"sm"} weight={700} color={colors.buttonText}>
            Contribua agora
          </Paragraph>
        </Button>
      </Card>
    </Container>
  );
};

export { HomeScreen };
