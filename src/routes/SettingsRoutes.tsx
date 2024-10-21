import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AboutScreen, SettingsScreen, TermsScreen } from "../screens";
import { Colors } from "../utils/constants/colors";
import { useTheme } from "../hooks";

const Stack = createNativeStackNavigator()

export default function SettingsRoutes() {
  const Theme = useTheme()
  return (
    <>
      <Stack.Navigator initialRouteName="Settings">

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShadowVisible: false,
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Terms"
          component={TermsScreen}
          options={{
            title: 'Termos e condições',
            headerShadowVisible: false,
            headerStyle: { backgroundColor: Theme.wave },
            headerTintColor: Theme.header,
          }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: 'Sobre',
            headerShadowVisible: false,
            headerStyle: { backgroundColor: Theme.wave },
            headerTintColor: Theme.header,
          }}
        />

      </Stack.Navigator>
    </>
  )
}