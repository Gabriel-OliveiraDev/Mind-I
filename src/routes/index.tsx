import React from "react";
import { NavigationContainer } from '@react-navigation/native'

import { useAppContext } from "../context";
import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";

export default function Routes() {
  const logged = useAppContext().isLogged
  return (
    <NavigationContainer>
      {logged ? (
        <MainRoutes />
      ) : (
        <AuthRoutes />
      )
      }
    </NavigationContainer>
  )
}