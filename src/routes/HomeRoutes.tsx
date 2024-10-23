import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import {
  FocusScreen,
  MeditationScreen,
  HomeScreen,
  MedicationScreen,
  InfoScreen,
  BubbleScreen,
} from "../screens"

import useTheme from "../hooks/useTheme"

const Stack = createNativeStackNavigator()

export default function HomeRoutes() {
  const Theme = useTheme()
  return (
    <>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Meditation'
          component={MeditationScreen}
          options={{
            title: 'Meditação',
            headerShadowVisible: false,
            headerStyle: { backgroundColor: Theme.wave },
            headerTintColor: Theme.header,
          }}
        />

        <Stack.Screen
          name='Focus'
          component={FocusScreen}
          options={{
            title: 'Foco',
            headerShadowVisible: false,
            headerStyle: { backgroundColor: Theme.wave },
            headerTintColor: Theme.header,
          }}
        />

        <Stack.Screen
          name="Bubble"
          component={BubbleScreen}
          options={{
            title: 'Bolha de Emoções',
            headerShadowVisible: false,
            headerStyle: { backgroundColor: Theme.banner },
            headerTintColor: Theme.text,
          }}
        />

        <Stack.Screen
          name="Medication"
          component={MedicationScreen}
          options={{
            title: 'Calendário de Medicação',
            headerShadowVisible: false,
            headerStyle: { backgroundColor: Theme.wave },
            headerTintColor: Theme.header,
          }}
        />

        <Stack.Screen
          name="Information"
          component={InfoScreen}
          options={{
            title: 'Transtornos Mentais',
            headerShadowVisible: false,
            headerStyle: { backgroundColor: Theme.wave },
            headerTintColor: Theme.header,
          }}
        />

      </Stack.Navigator >
    </>
  )
}