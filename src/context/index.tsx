import React, { createContext, useContext, ReactNode, useState } from "react"
import { Theme } from "../utils/types"

type UserNotification = {
  id: string,
  title: string,
  body: string,
  date: Date
}

// Definindo o tipo do contexto
interface AppContextProps {
  isLogged: boolean
  theme: Theme
  login: () => void
  logout: () => void
  changeTheme: () => void
  userNotifications: UserNotification[]
  addNotification: (notification: UserNotification) => void
  removeNotification: (id: string) => void
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
  const [isLogged, setisLogged] = useState(false)
  const [theme, setTheme] = useState<Theme>('light')
  const [notifications, setNotifications] = useState<UserNotification[]>([])

  function addNotification(notification: UserNotification) {
    setNotifications((prevNotifications) => [...prevNotifications, notification])
  }

  function removeNotification(id: string) {
    setNotifications((prevNotifications) => prevNotifications.filter((notif) => notif.id !== id))
  }

  const value: AppContextProps = {
    isLogged,
    theme,
    login: () => setisLogged(true),
    logout: () => setisLogged(false),
    changeTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
    userNotifications: notifications,
    addNotification,
    removeNotification
  }

  return (
    <appContext.Provider value={value}>
      {children}
    </appContext.Provider>
  )
}
