import React from 'react'
import { Container, Screen, Text, Wave, ListItem } from '../../components'
import { Colors } from '../../utils/constants/colors'
import Profile from './components/Profile'
import useGoTo from '../../hooks/useGoTo'
import { StyleSheet } from "react-native";
import { useAppContext } from '../../context'

export default function AccountScreen() {
  const { user } = useAppContext()
  const { goToUserData, goToEditAccount } = useGoTo()

  return (
    <Screen>
      <Wave />
      <Text.Title title>Meu Perfil</Text.Title>
      <Container style={{ gap: 12 }}>
        <Profile />

        <Container>
          <Text.Title color={Colors.Blue.Min}>
            {user?.name || 'name'}
          </Text.Title>
          <Text.Sub color={Colors.Blue.Min}>
            {user?.email}
          </Text.Sub>
        </Container>

        <Container list>
          <ListItem
            title='Dados Pessoais'
            onPress={goToUserData}
            icon='person'
            type='MaterialIcons'
          />

          <ListItem
            title='Editar Perfil'
            onPress={goToEditAccount}
            icon='edit'
            type='MaterialIcons'
          />

          <ListItem
            title='Atividade'
            onPress={() => { }}
            icon='account-reactivate'
            type='MaterialCommunityIcons'
          />

        </Container>

      </Container>
    </Screen>
  )
}

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderColor: '#fff',
    borderBottomWidth: 1,
    borderRadius: 60,
    marginBottom: 20
  }
})
