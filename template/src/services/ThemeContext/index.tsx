import React, { createContext, useContext, useState } from "react";

type ThemeContextProps = {
  theme: boolean;
  changeTheme: (themeValue: boolean) => void;
};
type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const changeTheme = (themeValue: boolean) => {
    setTheme(themeValue);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Falha ao executar tema");
  }

  return context;
};

export { ThemeProvider, useThemeContext };
