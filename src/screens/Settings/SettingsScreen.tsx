import React from 'react'
import { Container, ListItem, Screen, Text, Wave } from '../../components'
import { useAppContext } from '../../context'
import { Alert } from 'react-native'
import useGoTo from '../../hooks/useGoTo'
import useTheme from '../../hooks/useTheme'

export default function SettingsScreen() {

  const { goToTerms, goToAbout } = useGoTo()

  const { logout, changeTheme, user, setUser } = useAppContext()

  const Theme = useTheme()

  const handleTheme = () => {
    changeTheme()
    if (user) {
      user?.theme! === 'light' ? user.theme = 'dark' : user.theme = 'light'
    }
  }

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

  const handleLanguage = () => {
    if (user) {
      (user?.language as string) === 'en-US' ?
        setUser({ ...user, language: 'pt-BR' })
        :
        setUser({ ...user, language: 'en-US' })
    }
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

        <ListItem
          onPress={handleTheme}
          title='Trocar de tema'
          icon='adjust'
          type='Entypo'
        />

        <ListItem
          title='Idioma'
          icon='language'
          type='Entypo'
          onPress={handleLanguage}
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