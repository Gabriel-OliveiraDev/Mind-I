import React, { createContext, useContext, ReactNode, useState } from "react";

// Definindo o tipo do contexto
interface AppContextProps {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}

// Criando contexto
const appContext = createContext<AppContextProps | undefined>(undefined);


// Hook para acessar contexto
export function useAppContext() {
  const context = useContext(appContext);
  if (!context) throw new Error('para utilizar useAppContext o mesmo deve estar dentro de AppProvider');
  return context;
}


export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const value = {
    isLogged: isLoggedIn,
    login: () => setIsLoggedIn(true),
    logout: () => setIsLoggedIn(false),
  }

  return (
    <appContext.Provider value={value}>
      {children}
    </appContext.Provider>
  )
}