import React from 'react'
import { View } from 'react-native'

import { Container } from './components/Container'
import { List } from './components/List'
import { Colors } from '../../utils/constants/colors'
import { Logo, Screen, Text } from '../../components'
import useGoTo from '../../hooks/useGoTo'
import styles from './styles'

export default function HomeScreen() {
  const { goToMeditation, goToFocus } = useGoTo()
  return (
    <Screen color={Colors.White}>

      <Container.Root>

        <Container.Left>
          <View style={styles.insideLeftContainer}>

          </View>

          <View style={styles.insideLeftContainer}>

          </View>
        </Container.Left>

        <Container.Right>
          <View style={styles.insideRightContainer}>
            <Logo width={'80%'} height={'70%'} />
          </View>
        </Container.Right>
      </Container.Root>

      <Text.Title color={Colors.Blue.Deep} style={styles.functionText}>
        Funções
      </Text.Title>

      <List.Root>
        <List.Button text='Foco' onPress={goToFocus} />
        <List.Button text='Meditação' onPress={goToMeditation} />
        <List.Button text='Bolha de Emoção' onPress={goToMeditation} />
      </List.Root>

    </Screen>
  )
}
