import React, { createContext, useContext, ReactNode, useState } from "react"
import { Theme, User } from "../utils/types"
import { useAuth } from "../hooks"

type UserNotification = {
  id: string,
  title: string,
  body: string,
  date: Date
}

// Definindo o tipo do contexto
interface AppContextProps {
  login: (user: User) => void
  logout: () => void
  user: User | null
  setUser: (user: User | null) => void // Nova função para definir o usuário
  isLogged: boolean
  theme: Theme
  changeTheme: () => void
  userNotifications: UserNotification[]
  addNotification: (notification: UserNotification) => void
  removeNotification: (id: string) => void
}

// Criando contexto
const AppContext = createContext<AppContextProps | undefined>(undefined)

// Hook para acessar contexto
export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) throw new Error('Para utilizar useAppContext o mesmo deve estar dentro de AppProvider')
  return context
}

export function AppProvider({ children }: { children: ReactNode }) {
  const { signOut } = useAuth()
  const [isLogged, setIsLogged] = useState(false)
  const [theme, setTheme] = useState<Theme>('light')
  const [notifications, setNotifications] = useState<UserNotification[]>([])
  const [userData, setUserData] = useState<User | null>(null)


  function login(user: User) {
    setUserData(user)
    setIsLogged(true)
  }

  function logout() {
    setUserData(null)
    setIsLogged(false)
    signOut()
  }

  function setUser(user: User | null) {
    setUserData(user)
    setIsLogged(user !== null)
  }

  function addNotification(notification: UserNotification) {
    setNotifications((prevNotifications) => [...prevNotifications, notification])
  }

  function removeNotification(id: string) {
    setNotifications((prevNotifications) => prevNotifications.filter((notif) => notif.id !== id))
  }

  const value: AppContextProps = {
    isLogged,
    theme,
    user: userData || null,
    setUser,
    login: (userData: User) => login(userData),
    logout,
    changeTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
    userNotifications: notifications,
    addNotification,
    removeNotification
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
