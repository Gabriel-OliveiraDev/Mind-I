import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AccountScreen, EditUserScreen, UserDataScreen } from '../screens'
import { useTheme } from '../hooks'

const Stack = createNativeStackNavigator()

export default function AccountRoutes() {
  const Theme = useTheme()
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="UserData"
        component={UserDataScreen}
        options={{
          title: "Dados Pessoais",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.wave },
          headerTintColor: Theme.header,
        }}
      />

      <Stack.Screen
        name="EditAccount"
        component={EditUserScreen}
        options={{
          title: "Editar Perfil",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.wave },
          headerTintColor: Theme.header,
        }}
      />
    </Stack.Navigator>
  )
}