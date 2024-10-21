import React, { useState } from 'react'
import { Button, Container, Screen, Wave, Modal } from '../../../components'
import { Colors } from '../../../utils/constants/colors'
import { View, StyleSheet } from 'react-native'
import CircularProgress from './components/CircularProgress'
import useTheme from '../../../hooks/useTheme'
import useHeaderConfig from '../../../hooks/useHeaderConfig'
import KeepAwake from '@sayem314/react-native-keep-awake'

export default function MeditationScreen() {
  useHeaderConfig({
    onPress() { changeInfoModal() }
  })
  const Theme = useTheme()
  const [duration, setDuration] = useState(0)
  const [forceUpdateKey, setForceUpdateKey] = useState(0) // Estado para forçar atualização
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const changeInfoModal = () => {
    setModalVisible(!modalVisible)
  }

  // Gambiarra monstra mas funcionou
  const startTimer = (newDuration: number) => {
    setDuration(newDuration)
    setForceUpdateKey(prevKey => prevKey + 1)
  }

  return (
    <Screen>
      <Wave />
      <KeepAwake />
      <Container>
        {/* Progresso circular */}
        <View style={styles.circularContainer}>
          <CircularProgress
            key={forceUpdateKey} // key para forçar a atualizar o componente
            size={250}
            strokeWidth={5}
            duration={duration}
            color={Theme.meditationCircle}
            backgroundColor={Theme.meditationBackground}
          />
        </View>

        <Container>
          <Button
            text='5 Minutos'
            color={Colors.Blue.Main}
            style={{ width: '90%' }}
            onPress={() => startTimer(300)}
          />
          <Button
            text='15 Minutos'
            color={Colors.Blue.Main}
            style={{ width: '90%' }}
            onPress={() => startTimer(900)}
          />
          <Button
            text='30 Minutos'
            color={Colors.Blue.Main}
            style={{ width: '90%' }}
            onPress={() => startTimer(1800)}
          />
        </Container>
        <Modal
          modalVisible={modalVisible}
          setModalVisible={changeInfoModal}
          title='Como funciona ?'
          text={
            'Esta funcionalidade meditação utiliza um temporizador circular para guiá-lo durante sua sessão. A cada ciclo, você verá "Inspire" ou "Expire" para ajudá-lo a sincronizar sua respiração.'
          }
        />
      </Container>
    </Screen>
  )
}

const styles = StyleSheet.create({
  circularContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
})
