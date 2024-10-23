import React from 'react'
import { Container, InfoText, Screen, Text, Wave } from '../../../components'

export default function AboutScreen() {
  return (
    <Screen>
      <Wave />
      <Text.Title title>Sobre o aplicativo</Text.Title>
      <Container list>
        <InfoText
          title='Bolha de Emoções'
          content='Permite que os usuários registrem suas emoções em tempo real, proporcionando um espaço para expressar e acompanhar os sentimentos. Isso pode ajudar a identificar padrões emocionais e promover a autoconsciência.'
        />

        <InfoText
          title='Temporizador de Meditação'
          content='Permite que os usuários registrem suas emoções em tempo real, proporcionando um espaço para expressar e acompanhar os sentimentos. Isso pode ajudar a identificar padrões emocionais e promover a autoconsciência.'
        />

        <InfoText
          title='Foco com Notificações Personalizadas'
          content='Lembra os usuários de suas tarefas diárias ou compromissos importantes, funcionando como um assistente pessoal. As notificações podem ser ajustadas para enviar lembretes em horários específicos, ajudando a manter a produtividade e o cumprimento de objetivos.'
        />

        <InfoText
          title='Calendário de Medicações'
          content='Permite cadastrar medicamentos e programar lembretes para tomá-los nos dias e horários certos. Essa funcionalidade é ideal para ajudar os usuários a seguirem seus tratamentos corretamente, promovendo uma gestão mais eficaz da saúde.'
        />
      </Container>
    </Screen>
  )
}
