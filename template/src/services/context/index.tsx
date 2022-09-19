import React, {createContext, useState, PropsWithChildren} from 'react';

type IContext = {
  isDark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Context = createContext<IContext>({} as IContext);

export const ContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [isDark, setDark] = useState<boolean>(false);

  return (
    <Context.Provider value={{isDark, setDark}}>{children}</Context.Provider>
  );
};
