import React from 'react'
import { Button, Container, Screen, Text, Wave } from '../../../components'
import { Colors } from '../../../utils/constants/colors'
import { View, StyleSheet } from 'react-native'

export default function MeditationScreen() {
  return (
    <Screen color={Colors.Blue.Deep}>
      <Wave color={Colors.White} />
      <Container>
        <View style={styles.temp}>
          {/* TODO : Anotar Respire, Inspire a cada 5 segundos */}
          <Text.Title>Respire</Text.Title>
        </View>
        <Container>
          <Button text='Meditação Rápida' color={Colors.Blue.Main} />
          <Button text='Meditação Média' color={Colors.Blue.Main} />
          <Button text='Meditação Longa' color={Colors.Blue.Main} />
        </Container>
      </Container>
    </Screen>
  )
}

const styles = StyleSheet.create({
  temp: {
    height: 300,
    width: 300,
    backgroundColor: 'transparent',
    borderRadius: 150,
    borderColor: Colors.White,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
})