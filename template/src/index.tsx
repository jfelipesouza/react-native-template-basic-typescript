import React, { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";

import { MainNavigation } from "./screens/routes";
import { DARK_THEME, LIGHT_THEME } from "./theme";
import {
  ThemeProvider as ContextTheme,
  useThemeContext,
} from "./services/ThemeContext";

const MainApplication: React.FC = () => {
  const deviceTheme = useColorScheme();
  const { changeTheme, theme } = useThemeContext();

  const checkTheme = () => {
    changeTheme(deviceTheme === "dark");
  };

  useEffect(() => {
    checkTheme();
  }, []);

  return (
    <ThemeProvider theme={theme ? DARK_THEME : LIGHT_THEME}>
      <MainNavigation />
      <StatusBar
        barStyle={theme ? "light-content" : "dark-content"}
        backgroundColor={
          theme ? DARK_THEME.colors.background : LIGHT_THEME.colors.background
        }
      />
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <ContextTheme>
      <MainApplication />
    </ContextTheme>
  );
};
export { MainApplication, App };
