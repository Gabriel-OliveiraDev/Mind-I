import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, RegisterScreen } from '../screens'
import { StatusBar } from 'react-native'
import { Colors } from '../utils/constants/colors'


const Stack = createNativeStackNavigator()


export default function AuthRoutes() {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.Blue.Deep} />
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="Register" component={RegisterScreen} />

      </Stack.Navigator>
    </>
  )
}