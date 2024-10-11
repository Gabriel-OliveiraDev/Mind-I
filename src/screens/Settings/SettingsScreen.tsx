import React from 'react'
import { Container, ListItem, Screen, Text, Wave } from '../../components'
import { Colors } from '../../utils/constants/colors'
import { useAppContext } from '../../context'
import { Alert } from 'react-native'

export default function SettingsScreen() {

  const { logout } = useAppContext()

  const handleExit = () => {
    Alert.alert(
      'Deseja retirar sua conta ?',
      "Ao realizar esta ação sua conta será desconectada e você precisará inserir suas credenciais novamente.",
      [
        {
          text: "Cancelar",
          onPress: () => { },
          style: 'cancel'
        },
        {
          text: "Sair",
          onPress: logout,
          style: 'destructive'
        },
      ],
      { cancelable: true }
    )
  }

  return (
    <Screen color={Colors.Blue.Deep}>
      <Wave color={Colors.White} />
      <Text.Title style={{
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderColor: '#fff',
        borderBottomWidth: 1,
        borderRadius: 60
      }}>Ajustes</Text.Title>
      <Container list style={{ paddingTop: 30 }}>
        <ListItem title='Texto' />
        <ListItem title='Sair' onPress={handleExit} />

      </Container>
    </Screen>
  )
}