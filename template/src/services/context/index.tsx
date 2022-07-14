import React, { createContext, useState, PropsWithChildren } from 'react'

type IContext = {
  isDark: boolean
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext<IContext>({} as IContext)

export const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false)

  return (
    <Context.Provider value={{ isDark, setIsDark }}>
      {children}
    </Context.Provider>
  )
}
