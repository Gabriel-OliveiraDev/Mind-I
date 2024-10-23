import React from 'react'
import { Button, Container, Screen, Text, Wave } from '../../../components'
import { useAppContext } from '../../../context'
import { View } from 'react-native'
import { useGoTo } from '../../../hooks'

export default function UserDataScreen() {
  const { goToEditAccount } = useGoTo()
  const { user } = useAppContext()
  return (
    <Screen>
      <Wave />
      <View style={{ gap: 50, paddingTop: 50 }}>
        <Text.Sub title>Nome: {user?.name}</Text.Sub>
        <Text.Sub title>Email: {user?.email}</Text.Sub>
        <Text.Sub title>Telefone: {user?.phone || 'Não informado'}</Text.Sub>
        <Text.Sub title>Data de nascimento: {user?.birthdate?.toDateString() || 'Não informado'}</Text.Sub>
        <Text.Sub title>Criado em: {'23/10/2024' || 'Não informado'}</Text.Sub>
        <Text.Sub title>Atualizado em: {'23/10/2024' || 'Não informado'}</Text.Sub>
        <Container>
          <Button text='Editar Perfil' onPress={goToEditAccount} />
        </Container>
      </View>
    </Screen>
  )
}