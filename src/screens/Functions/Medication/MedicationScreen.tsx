import React, { useState } from 'react'
import { Button, Container, Input, Modal, Screen, Text, Wave } from '../../../components'
import { Colors } from '../../../utils/constants/colors'
import Calendar from './components/Calendar'
import Slider from '@react-native-community/slider'
import { useTheme, useHeaderConfig } from '../../../hooks'

export default function MedicationScreen() {
  const Theme = useTheme()

  useHeaderConfig({
    onPress() { handleInfoModal() }
  })

  const [page, setPage] = useState<boolean>(false)
  const [buttonTitle, setButtonTitle] = useState('Medicação em horário')
  const [selectedDays, setSelectedDays] = useState<number[]>([])
  const [selectedHour, setSelectedHour] = useState<number>(0)
  const [modalVisible, setModalVisible] = useState(false)

  const handleInfoModal = () => { setModalVisible(!modalVisible) }

  const handleSelectedDaysChange = (days: number[]) => {
    setSelectedDays(days)
  }

  const handlePage = () => {
    setPage(!page),
      page ?
        setButtonTitle('Medicação em horário') :
        setButtonTitle('Medicação em dias')
  }

  // Converte o valor do slider para o formato de horário (HH:00)
  const formatHour = (hour: number) => {
    return `${hour.toString().padStart(2, '0')}:00`
  }

  return (
    <Screen>
      <Wave />
      <Container flex center={false}>
        {page ? (
          <>
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
              style={{ marginTop: 20, borderColor: Theme.textTitle, width: '90%' }}
              placeholder='Nome do remédio'
              placeholderTextColor={Theme.textTitle}
            />
            <Button
              text={'Confirmar'}
              style={{ width: '90%' }}
              onPress={handlePage}
              color={Colors.Blue.Main}
            />

          </>
        ) : (
          <>
          </>
        )}
        <Button
          text={buttonTitle}
          style={{ width: '90%' }}
          onPress={handlePage}
          color={Colors.Blue.Main}
        />
      </Container>
      <Modal
        title='Como funciona ?'
        text='Esta funcionalidade de calendário de medicação, permite que o usuário possa cadastrar um medicamento em dois modos diferentes. Em doses diárias ou em doses continuas, por exemplo: de 8 em 8 horas.'
        modalVisible={modalVisible}
        setModalVisible={handleInfoModal}
      />
    </Screen>
  )
}
