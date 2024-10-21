import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Button, Container, Modal, Screen, Wave } from '../../../components'
import { Colors } from '../../../utils/constants/colors'
import Emotion from './components/Emotion'
import { LinearGradient } from 'react-native-linear-gradient'
import { useTheme, useHeaderConfig } from '../../../hooks'

export default function BubbleScreen() {
  const Theme = useTheme()

  useHeaderConfig({
    onPress() { handleInfoModal() },
    color: Theme.text
  })

  const [selected, setSelected] = useState<number | null>(null)
  const [modalVisible, setModalVisible] = useState(false)

  const handleInfoModal = () => { setModalVisible(!modalVisible) }

  const handleSelected = (n: number) => { setSelected(n) }

  return (

    <Screen>
      <Container color={Theme.banner}>
        <LinearGradient colors={['#FFAEC6', '#30819A']} style={styles.bubble} />
      </Container>
      <Wave color={Theme.banner} />

      <ScrollView
        horizontal
        contentContainerStyle={styles.contentList}
        style={{ paddingTop: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        {/* Lista de emoções */}
        <Emotion
          color={Colors.Emotion.red}
          title="Raiva"
          onPress={() => handleSelected(1)}
          choiced={selected === 1}
        />
        <Emotion
          color={Colors.Emotion.blue}
          title="Tristeza"
          onPress={() => handleSelected(2)}
          choiced={selected === 2}
        />
        <Emotion
          color={Colors.Emotion.yellow}
          title="Alegria"
          onPress={() => handleSelected(3)}
          choiced={selected === 3}
        />
        <Emotion
          color={Colors.Emotion.green}
          title="Nojo"
          onPress={() => handleSelected(4)}
          choiced={selected === 4}
        />
        <Emotion
          color={Colors.Emotion.purple}
          title="Medo"
          onPress={() => handleSelected(5)}
          choiced={selected === 5}
        />
        <Emotion
          color={Colors.Emotion.orange}
          title="Orgulho"
          onPress={() => handleSelected(6)}
          choiced={selected === 6}
        />
        <Emotion
          color="pink"
          title="Insegurança"
          onPress={() => handleSelected(7)}
          choiced={selected === 7}
        />
        <Emotion
          color={Colors.Emotion.blue2}
          title="Culpa"
          onPress={() => handleSelected(8)}
          choiced={selected === 8}
        />
      </ScrollView>

      <Container>
        <Button
          text="Confirmar"
          color={Colors.Blue.Min}
          style={{ width: '90%' }}
          onPress={() => { }}
        />
      </Container>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={handleInfoModal}
        text='Esta funcionalidade de bolha permite que usuários registrem e acompanhem suas emoções ao longo do tempo. Eles podem selecionar emoções, como "feliz" ou "triste", e armazená-las quantas vezes quiserem em um dia, presenta uma visualização gráfica para ajudar a identificar padrões emocionais e tendências.'
        title='Bolha de emoções'
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  contentList: {
    gap: 20,
    padding: 20,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubble: {
    height: 300,
    width: 300,
    borderRadius: 150,
    opacity: 0.8
  }
})
