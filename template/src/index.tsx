import React, { useState } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import Routes from "./screens/routes";
import { light } from "./theme";

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={theme.colors.primary}
      />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
