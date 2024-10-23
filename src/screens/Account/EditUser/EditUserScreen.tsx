import React, { useState } from 'react'
import { Button, Container, Input, Screen, Text, Wave } from '../../../components'
import { useAppContext } from '../../../context'
import { ScrollView, View, StyleSheet } from 'react-native'
import { useGoTo } from '../../../hooks'

export default function EditUserScreen() {
  const { goToEditAccount } = useGoTo()
  const { user } = useAppContext()

  const [editMode, setEditMode] = useState(false)

  const handleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <Screen>
      <Wave />
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        {editMode ? (
          <EditUserForm />
        ) : (
          <UserDetails />
        )}
        <Container>
          <Text.Body style={styles.subtitle}>Criado em: 23/10/2024</Text.Body>
          <Text.Body style={styles.subtitle}>Atualizado em: 23/10/2024</Text.Body>
        </Container>

        <Button
          text={editMode ? 'Cancelar' : 'Editar'}
          onPress={handleEditMode}
          style={styles.button}
        />

        {editMode && <Button text="Sair" onPress={goToEditAccount} style={styles.button} />}
      </View>
    </Screen>
  )
}

function UserDetails() {
  const { user } = useAppContext()
  const date = user?.birthdate?.toLocaleString()

  return (
    <View style={styles.detailsContainer}>
      <Text.Body title style={styles.detailItem}>{`Email: ${user?.email || 'Não informado'}`}</Text.Body>
      <Text.Body title style={styles.detailItem}>{`Telefone: ${user?.phone || 'Não informado'}`}</Text.Body>
      <Text.Body title style={styles.detailItem}>{`Data de nascimento: ${date || 'Não informado'}`}</Text.Body>
    </View>
  )
}

function EditUserForm() {
  return (
    <View style={styles.formContainer}>
      <Input placeholder="Email: " style={styles.input} />
      <Input placeholder="Telefone: " style={styles.input} />
      <Input
        placeholder="Nascimento: (DD/MM/AAAA)"
        keyboardType="number-pad"
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  detailsContainer: {
    gap: 10,
  },
  detailItem: {
    fontSize: 18,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  formContainer: {
    gap: 10,
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 40,
    paddingHorizontal: 30,
    width: '85%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
  },
})
