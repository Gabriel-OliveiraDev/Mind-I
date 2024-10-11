import React from 'react'
import Routes from './src/routes'
import { AppProvider } from './src/context'

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  )
}