import React, { useEffect, useState } from 'react'
import { Container, Screen, Text } from '../../components'
import { useGoTo } from '../../hooks'
import Banner from './components/Banner'
import ListButton from './components/ListButton/ListButton'
import { NotificationService } from '../../services'


export default function HomeScreen() {
  const { goToMeditation, goToFocus, goToBubble, goToMedication, goToInfo } = useGoTo()
  const [statusNotification, setStatusNotification] = useState(true)
  const { getPermission } = NotificationService()

  useEffect(() => { getPermission(setStatusNotification) }, [])

  return (
    <Screen>

      <Banner
        onPress={goToInfo}
        hello='Seja bem-vindo!'
        name='Gabriel'
      />

      <Text.Title title>
        Funções
      </Text.Title>

      <Container list>
        <ListButton text='Bolha de Emoção' onPress={goToBubble} />
        <ListButton text='Meditação' onPress={goToMeditation} />
        <ListButton text='Foco' onPress={goToFocus} />
        <ListButton text='Medicação' onPress={goToMedication} />
      </Container>

    </Screen>
  )
}
