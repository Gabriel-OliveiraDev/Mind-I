import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Button, Container, Input, Modal, Screen, Text, Wave } from '../../../components'
import { Colors, NotificationId } from '../../../utils/constants'
import { useHeaderConfig, useTheme } from '../../../hooks'
import { NotificationService } from '../../../services'
import notifee, { AndroidImportance, EventType } from '@notifee/react-native'

export default function FocusScreen() {
  useHeaderConfig({ onPress() { setModalVisible(!modalVisible) } })
  const Theme = useTheme()
  const { scheduleNotification } = NotificationService()

  const [modalVisible, setModalVisible] = useState(false)
  const [minutes, setMinutes] = useState(0)
  const [objectiveConfirm, setObjectiveConfirm] = useState(false)
  const [objective, setObjective] = useState('')

  const buttonColor = !objectiveConfirm ? Theme.secondButton : ''

  const handleObjectiveConfirm = () => {
    setObjectiveConfirm(true)
  }

  const handleObjectiveValue = (value: string) => {
    if (value !== objective) {
      setObjectiveConfirm(false)
      setObjective(value)
    }
  }

  const handleNotificate = (minute: number) => {
    const date = new Date(Date.now())
    date.setMinutes(date.getMinutes() + minute)
    scheduleNotification({
      id: 'default',
      title: 'Mind-I Foco',
      body: "Não perca o foco de sua tarefa!",
      date,
      importance: AndroidImportance.HIGH,
      channelData: NotificationId.focus,
    })
  }

  notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail
    if (type === EventType.PRESS) {
      if (notification?.id) {
        await notifee.cancelNotification(notification?.id)
      }
    } else if (type === EventType.DISMISSED) {
      handleNotificate(minutes)
    }
  })

  return (
    <Screen>
      <Wave />
      <Container flex>
        <Container color={Theme.primaryButton} style={{ borderRadius: 12 }}>
          <Input
            placeholder="Digite seu objetivo"
            style={{ width: '100%', borderColor: Colors.LightGray, color: Colors.White }}
            placeholderTextColor={Theme.text}
            onChangeText={handleObjectiveValue}
            maxFontSizeMultiplier={1.2}
          />
          <TouchableOpacity onPress={handleObjectiveConfirm} activeOpacity={0.7}>
            <Text.Sub>Confirmar</Text.Sub>
          </TouchableOpacity>
        </Container>
        <Container style={{ gap: 8 }}>
          <Button
            color={buttonColor}
            text={`Notificar em\n5 minutos`}
            style={{ width: '100%' }}
            onPress={() => setMinutes(5)}
            disabled={!objectiveConfirm}
          />

          <Button
            color={buttonColor}
            text={`Notificar em\n15 minutos`}
            style={{ width: '100%' }}
            onPress={() => setMinutes(15)}
            disabled={!objectiveConfirm}
          />

          <Button
            color={buttonColor}
            text={`Notificar em\n30 minutos`}
            style={{ width: '100%' }}
            onPress={() => setMinutes(30)}
            disabled={!objectiveConfirm}
          />
        </Container>
      </Container>
      <Modal
        title="Foco"
        text="Esta funcionalidade de foco ajuda você a manter a produtividade ao longo do dia. Com lembretes inteligentes, ele notifica você na hora certa para realizar suas tarefas importantes. Seja para estudar, meditar ou simplesmente se concentrar no que importa."
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(!modalVisible)}
      />
    </Screen>
  )
}
