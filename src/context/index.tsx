import React, { createContext, useContext, ReactNode, useState } from "react"
import { Theme } from "../utils/types"


// Definindo o tipo do contexto
interface AppContextProps {
  isLogged: boolean
  theme: Theme
  login: () => void
  logout: () => void
  changeTheme: () => void
}

// Criando contexto
const appContext = createContext<AppContextProps | undefined>(undefined)


// Hook para acessar contexto
export function useAppContext() {
  const context = useContext(appContext)
  if (!context) throw new Error('para utilizar useAppContext o mesmo deve estar dentro de AppProvider')
  return context
}


export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [theme, setTheme] = useState<Theme>('light')

  const value = {
    isLogged: isLoggedIn,
    theme: theme,
    login: () => setIsLoggedIn(true),
    logout: () => setIsLoggedIn(false),
    changeTheme: () => { setTheme(theme === 'light' ? 'dark' : 'light') },
  }

  return (
    <appContext.Provider value={value}>
      {children}
    </appContext.Provider>
  )
}