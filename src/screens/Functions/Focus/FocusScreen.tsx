import React, { useState } from 'react'
import { Button, Container, Input, Modal, Screen, Text, Wave } from '../../../components'
import { Colors } from '../../../utils/constants/colors'
import useTheme from '../../../hooks/useTheme'
import useHeaderConfig from '../../../hooks/useHeaderConfig'

export default function FocusScreen() {
  useHeaderConfig({
    onPress() { handleInfoModal() }
  })
  const Theme = useTheme()
  const [modalVisible, setModalVisible] = useState(false)

  const handleInfoModal = () => {
  setModalVisible(!modalVisible)
  }

  return (
    <>
      <Modal
        title='Foco'
        text='Esta funcionalidade de foco ajuda você a manter a produtividade ao longo do dia. Com lembretes inteligentes, ele notifica você na hora certa para realizar suas tarefas importantes. Seja para estudar, meditar ou simplesmente se concentrar no que importa.'
        modalVisible={modalVisible}
        setModalVisible={handleInfoModal}
      />
      <Screen>
        <Wave />
        <Container flex>
          <Container color={Theme.primaryButton} style={{ borderRadius: 12 }}>
            <Input
              placeholder='Digite seu objetivo'
              style={{ borderColor: Colors.LightGray, width: '100%' }}
              placeholderTextColor={Theme.text}
            />
          </Container>
          <Container style={{ gap: 10 }} >
            <Button text={`Notificar em\n5 minutos`} style={{ width: '100%' }} />
            <Button text={`Notificar em\n15 minutos`} style={{ width: '100%' }} />
            <Button text={`Notificar em\n30 minutos`} style={{ width: '100%' }} />
          </Container>
        </Container>
      </Screen>
    </>
  )
}