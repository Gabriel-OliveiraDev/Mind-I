import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, RegisterScreen } from '../screens'
import { useAppContext } from '../context'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../services/firebase/FireBaseConnection'
import { User } from '../utils/types'


const Stack = createNativeStackNavigator()


export default function AuthRoutes() {
  return (
    <>
      <AuthObserver />
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

function AuthObserver() {
  const { login } = useAppContext()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (hasUser) => {
      if (hasUser) {
        const user: User = {
          email: hasUser.email!,
          uid: hasUser.uid,
          language: 'pt-BR',
        }
        login(user)
      }
    })

    // Cleanup para remover o listener quando o componente desmontar
    return () => unsubscribe()
  }, [login])

  return null
}