import React, { createContext, useState } from 'react'

type ContextProps = {
  isDark: boolean
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export const Context = createContext<ContextProps>({} as ContextProps)

export const ContextProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false)

  return (
    <Context.Provider value={{ isDark, setIsDark }}>
      {children}
    </Context.Provider>
  )
}
