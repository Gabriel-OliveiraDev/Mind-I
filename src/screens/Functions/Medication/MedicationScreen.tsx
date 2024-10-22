import React, { useState } from 'react'
import { Button, Container, Input, Modal, Screen, Text, Wave } from '../../../components'
import { Colors } from '../../../utils/constants/colors'
import Calendar from './components/Calendar'
import Slider from '@react-native-community/slider'
import { useTheme, useHeaderConfig, useNotification } from '../../../hooks'
import notifee, { RepeatFrequency, AndroidImportance, EventType } from '@notifee/react-native'
import { Alert, FlatList, Pressable, View } from 'react-native'
import { useAppContext } from '../../../context'
import { NotificationId } from '../../../utils/constants'

export default function MedicationScreen() {
  const { addNotification, removeNotification, userNotifications } = useAppContext()
  const { scheduleNotification } = useNotification()
  useHeaderConfig({ onPress() { handleInfoModal() } })
  const Theme = useTheme()

  const [selectedDays, setSelectedDays] = useState<number[]>([])
  const [selectedHour, setSelectedHour] = useState<number>(0)
  const [medicationName, setMedicationName] = useState<string>('')
  const [modalVisible, setModalVisible] = useState(false)
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false)
  const [selectedNotificationId, setSelectedNotificationId] = useState<string | null>(null)

  const handleInfoModal = () => { setModalVisible(!modalVisible) }

  const handleSelectedDaysChange = (days: number[]) => {
    setSelectedDays(days)
  }

  const formatHour = (hour: number) => {
    return `${hour.toString().padStart(2, '0')}:00`
  }

  const handleConfirm = async () => {
    if (!medicationName || selectedDays.length === 0) {
      Alert.alert('Por favor, insira o nome do remédio e selecione pelo menos um dia.')
      return
    }

    const newNotifications = []

    for (const day of selectedDays) {
      const now = new Date()
      const notificationDate = new Date(now)
      notificationDate.setDate(now.getDate() + ((day + 7 - now.getDay()) % 7))
      notificationDate.setHours(selectedHour, 0, 0, 0)

      if (notificationDate <= now) {
        notificationDate.setDate(notificationDate.getDate() + 7)
      }

      const notificationId = `${medicationName}-${day}-${selectedHour}`

      try {
        await scheduleNotification({
          id: notificationId,
          title: `Lembrete de Medicação: ${medicationName}`,
          body: `Hora de tomar o remédio: ${medicationName}`,
          date: notificationDate,
          importance: AndroidImportance.HIGH,
          repeatFrequency: RepeatFrequency.WEEKLY,
          channelData: {
            id: 'medication-reminder',
            name: 'Lembretes de Medicação',
            importance: AndroidImportance.HIGH,
          },
        })

        newNotifications.push({
          id: notificationId,
          title: `Lembrete de Medicação: ${medicationName}`,
          body: `Hora de tomar o remédio: ${medicationName}`,
          date: notificationDate,
        })
      } catch (error: any) {
        Alert.alert('Erro ao agendar notificação', error.message)
      }
    }

    if (newNotifications.length > 0) {
      newNotifications.forEach((notification) => {
        addNotification(notification)
      })
      Alert.alert('Notificação de medicação agendada com sucesso!')
    }
  }

  const handlePressNotification = (id: string) => {
    setSelectedNotificationId(id)
    setConfirmationModalVisible(true)
  }

  const handleConfirmDelete = () => {
    if (selectedNotificationId) {
      removeNotification(selectedNotificationId)
      setConfirmationModalVisible(false)
      setSelectedNotificationId(null)
      Alert.alert('Notificação excluída com sucesso!')
    }
  }

  notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification } = detail
    if (type === EventType.PRESS) {
      if (notification?.id) {
        await notifee.cancelNotification(notification?.id)
      }
    } else if (type === EventType.DISMISSED) {
      const timeToRemind = new Date(Date.now() + 2 * 60 * 1000) // 2 minutes from now
      notification && notification.id &&
        scheduleNotification({
          id: notification?.id,
          date: timeToRemind,
          importance: AndroidImportance.HIGH,
          body: `Hora de tomar o remédio: ${medicationName}`,
          title: `Lembrete de Medição: ${medicationName}`,
          channelData: NotificationId.medication,
        })
    }
  })

  return (
    <Screen>
      <Wave />
      <Container flex center={false}>
        <Text.Title title>Horário</Text.Title>
        <Text.Sub style={{ paddingTop: 10 }} color={Theme.textTitle}>{formatHour(selectedHour)}</Text.Sub>

        <Calendar onDaysChange={handleSelectedDaysChange} />

        <Slider
          minimumValue={0}
          maximumValue={23}
          step={1}
          value={selectedHour}
          onValueChange={(value) => setSelectedHour(value)}
          style={{ width: '100%', marginTop: 20, height: 40 }}
          thumbTintColor={Colors.Blue.Min}
          minimumTrackTintColor={Colors.Blue.Min}
          maximumTrackTintColor={Colors.Blue.Min}
        />

        <Input
          style={{ marginTop: 20, borderColor: Theme.textTitle, width: '90%', color: Theme.textTitle }}
          placeholder='Nome do remédio'
          placeholderTextColor={Theme.textTitle}
          value={medicationName}
          onChangeText={setMedicationName}
        />

        <Button
          text={'Confirmar'}
          style={{ width: '90%' }}
          onPress={handleConfirm}
          color={Colors.Blue.Main}
        />

        <Text.Body
          style={{ marginVertical: 10 }}
          color={Theme.textTitle}
        >
          Medicamentos Agendados:
        </Text.Body>

        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={{ padding: 10, borderBottomWidth: 1, borderColor: Colors.LightGray }}>
              <Text.Sub>Não há medicamento agendado</Text.Sub>
            </View>
          }
          style={{ backgroundColor: Theme.containerMain, borderRadius: 8, width: '90%' }}
          data={userNotifications.filter((item) => item)}
          keyExtractor={(item) => item.id || `key-${Math.random()}`}
          renderItem={({ item }) => (
            item && (
              <Pressable
                onPress={() => handlePressNotification(item.id)}
                style={{ padding: 10, borderBottomWidth: 1, borderColor: Colors.LightGray }}
              >
                <Text.Sub>{item.title || 'Sem título'}</Text.Sub>
                <Text.Body>{item.body || 'Sem descrição'}</Text.Body>
                <Text.Body>{item.date ? new Date(item.date).toLocaleString() : 'Sem data'}</Text.Body>
              </Pressable>
            )
          )}
        />
      </Container>

      <Modal
        title='Excluir Notificação'
        text='Deseja realmente excluir esta notificação?'
        modalVisible={confirmationModalVisible}
        setModalVisible={() => setConfirmationModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />

      <Modal
        title='Como funciona ?'
        text='Esta funcionalidade de calendário de medicação, permite que o usuário possa cadastrar um medicamento em dois modos diferentes. Em doses diárias ou em doses contínuas, por exemplo: de 8 em 8 horas.'
        modalVisible={modalVisible}
        setModalVisible={handleInfoModal}
      />
    </Screen>
  )
}
