import React from 'react'
import { Container, ListItem, Screen, Text, Wave } from '../../components'
import { useAppContext } from '../../context'
import { Alert } from 'react-native'
import useGoTo from '../../hooks/useGoTo'
import useTheme from '../../hooks/useTheme'

export default function SettingsScreen() {

  const { goToTerms, goToAbout } = useGoTo()

  const { logout, changeTheme } = useAppContext()

  const Theme = useTheme()

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
    <Screen>
      <Wave />
      <Text.Title color={Theme.textTitle} title>
        Ajustes
      </Text.Title>
      <Container list style={{ paddingTop: 30, gap: 12 }}>

        <ListItem
          title='Termos e condições'
          onPress={goToTerms}
          icon='file-document-multiple'
          type='MaterialCommunityIcons'
        />
        {/* TODO: alteração de escuro para claro */}
        <ListItem
          onPress={changeTheme}
          title='Trocar de tema'
          icon='adjust'
          type='Entypo'
        />

        <ListItem
          title='Idioma'
          icon='language'
          type='Entypo'
        />

        <ListItem
          onPress={goToAbout}
          title='Sobre'
          icon='more-horizontal'
          type='Feather'
        />

        <ListItem title='Sair' onPress={handleExit} icon='logout' type='MaterialIcons' />

      </Container>
    </Screen>
  )
}