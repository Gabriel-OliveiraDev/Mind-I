import React, { useEffect, useState } from 'react'
import { Container, Screen, Text } from '../../components'
import { useAuth, useGoTo, useLanguage, useNotification } from '../../hooks'
import Banner from './components/Banner'
import ListButton from './components/ListButton/ListButton'
import { useAppContext } from '../../context'
import { User } from '../../utils/types'


export default function HomeScreen() {
  const { user, setUser } = useAppContext()
  const { fetchUser } = useAuth()
  const language = useLanguage(user!)
  const Txt = language?.Home
  const { goToMeditation, goToFocus, goToBubble, goToMedication, goToInfo } = useGoTo()
  const [statusNotification, setStatusNotification] = useState(true)
  const { getPermission } = useNotification()

  useEffect(() => {
    if (!user?.uid) return

    const unsubscribe = fetchUser(user.uid, (userData) => {
      if (userData) {
        const updatedUser: User = {
          ...user,
          name: userData.name,
          theme: 'light',
        }
        setUser(updatedUser)
      }
    })

    // Cancela a observação quando o componente for desmontado ou o UID mudar
    return () => {
      unsubscribe()
    }
  }, [user?.uid])

  useEffect(() => {
    getPermission(setStatusNotification)
  }, [])

  return (
    <Screen>

      <Banner
        onPress={goToInfo}
        hello={Txt?.welcome!}
        name={user?.name || ''}
      />

      <Text.Title title>
        {Txt?.function}
      </Text.Title>

      <Container list>
        <ListButton text={Txt?.emotionBubble!} onPress={goToBubble} />
        <ListButton text={Txt?.meditation!} onPress={goToMeditation} />
        <ListButton text={Txt?.focus!} onPress={goToFocus} />
        <ListButton text={Txt?.medication!} onPress={goToMedication} />
      </Container>

    </Screen>
  )
}
