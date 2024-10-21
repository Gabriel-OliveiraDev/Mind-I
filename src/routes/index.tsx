import React from "react";
import { NavigationContainer } from '@react-navigation/native'

import { useAppContext } from "../context";
import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";
import { StatusBar } from "react-native";

export default function Routes() {
  const logged = useAppContext().isLogged
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        {logged ? (
          <MainRoutes />
        ) : (
          <AuthRoutes />
        )
        }
      </NavigationContainer>
    </>
  )
}