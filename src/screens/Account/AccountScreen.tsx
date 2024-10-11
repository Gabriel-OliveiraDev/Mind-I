import React from 'react'
import { Container, Screen, Text, Wave, ListItem } from '../../components'
import { Colors } from '../../utils/constants/colors'
import Profile from './components/Profile'
import { View, StyleSheet } from 'react-native'
import useGoTo from '../../hooks/useGoTo'

export default function AccountScreen() {

  const { goToHome } = useGoTo()

  return (
    <Screen color={Colors.Blue.Deep}>
      <Wave color={Colors.White} />
      <Container>
        <Profile />

        <View style={styles.profileText}>
          <Text.Title color={Colors.Blue.Light}>Nome</Text.Title>
          <Text.Sub color={Colors.Blue.Light}>Email</Text.Sub>
        </View>

        <Container list>
          <ListItem title='HOME' onPress={goToHome} />
          <ListItem title='toma' onPress={() => { }} />
          <ListItem title='toma' onPress={() => { }} />
          <ListItem title='toma' onPress={() => { }} />
          <ListItem title='toma' onPress={() => { }} />
        </Container>

      </Container>
    </Screen>
  )
}

const styles = StyleSheet.create({
  profileText: {
    marginVertical: 15,
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  }
})