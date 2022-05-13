import React from 'react'
import { ContextProvider } from './context'
import Main from './screens'

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  )
}

export default App
