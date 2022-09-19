import React, {useContext, useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {light} from '../themes';
import {Context} from '../services/context';
import {Routes} from './routes';
import {StatusBar} from 'react-native';

export const MainAplication: React.FC = () => {
  const [theme, setTheme] = useState(light);
  const {isDark} = useContext(Context);

  useEffect(() => {
    if (isDark === true) {
      setTheme(light); // change to your dark theme
    } else {
      setTheme(light);
    }
  }, [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle={'light-content'}
      />
    </ThemeProvider>
  );
};
