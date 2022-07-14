import React from 'react'
import { MainAplication } from './screens'
import { ContextProvider } from './services/context'

const App: React.FC = () => {
  return (
    <ContextProvider>
      <MainAplication />
    </ContextProvider>
  )
}
export default App
