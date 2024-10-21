import React from 'react'
import { StyleSheet } from 'react-native'
import { Screen, Text, Wave, Container, InfoText } from '../../components'

export default function InfoScreen() {
  return (
    <Screen>
      <Wave />

      <Text.Title title>Informações</Text.Title>
      <Container list style={styles.container}>

      <InfoText
          title="Transtornos Mentais"
          content='Transtorno mental é um termo usado para descrever uma ampla gama de condições de saúde que afetam o humor, o pensamento e o comportamento de uma pessoa. Esses distúrbios podem causar sofrimento significativo e impactar a capacidade de uma pessoa de funcionar no dia a dia. Transtornos mentais podem resultar de uma combinação de fatores genéticos, biológicos, ambientais e psicológicos.'
        />

        <InfoText
          title="Ansiedade"
          content='Incluem condições como transtorno de ansiedade generalizada (TAG), transtorno do pânico, fobias específicas, e transtorno de ansiedade social. Caracterizam-se por preocupação excessiva, medo ou apreensão que interfere nas atividades diárias.'
        />

        <InfoText
          title='Depressão'
          content='Envolvem tristeza persistente, perda de interesse ou prazer em atividades, e outros sintomas que prejudicam a vida diária. O mais conhecido é o transtorno depressivo maior.'
        />

        <InfoText
          title="Bipolaridade"
          content='Caracterizado por alterações de humor que vão de episódios depressivos a episódios maníacos, que incluem euforia, energia elevada e comportamento impulsivo.'
        />

        <InfoText
          title="Psicópatia"
          content='Incluem condições como esquizofrenia, onde a pessoa pode ter alucinações, delírios e pensamentos desorganizados, o que afeta o contato com a realidade.'
        />

        <InfoText
          title="Obsessivo-Compulsivo"
          content='Caracteriza-se por pensamentos intrusivos (obsessões) que levam a comportamentos repetitivos (compulsões) para aliviar a ansiedade.'
        />

        <InfoText
          title="Estresse Pós-Traumático"
          content='Desenvolve-se após a exposição a eventos traumáticos. Sintomas incluem flashbacks, pesadelos e ansiedade intensa relacionada ao evento.'
        />

        <InfoText
          title="Alimentares"
          content='Incluem anorexia nervosa, bulimia nervosa e transtorno de compulsão alimentar periódica. São caracterizados por comportamentos extremos em relação à alimentação e preocupações com o peso e a forma do corpo.'
        />

        <InfoText
          title="Hiperatividade"
          content='Caracteriza-se por sintomas de desatenção, hiperatividade e impulsividade que afetam o desempenho escolar, social ou no trabalho.'
        />

        <InfoText
          title="Personalidade"
          content='Incluem condições como transtorno de personalidade borderline, transtorno de personalidade antissocial e transtorno de personalidade esquiva. Caracterizam-se por padrões de comportamento, pensamento e funcionamento emocional que são rígidos e desadaptativos.'
        />

        <InfoText
          title="Neurocognitivos"
          content='Como a demência e a doença de Alzheimer, afetam a memória, a percepção e a capacidade de resolver problemas, muitas vezes devido à deterioração cerebral.'
        />

        <InfoText
          title="Sono"
          content='Incluem insônia, apneia do sono, narcolepsia e outros distúrbios que afetam a qualidade e a quantidade do sono.'
        />

        <InfoText
          title="Somatoformes"
          content='Caracterizam-se por sintomas físicos sem uma causa médica identificável, como dor crônica, problemas gastrointestinais ou fadiga persistente.'
        />

        <InfoText
          title="Dissociativos"
          content='Envolvem desconexões na memória, identidade ou percepção, como amnésia dissociativa e transtorno dissociativo de identidade (anteriormente chamado de "transtorno de personalidade múltipla").'
        />

        <InfoText
          title="Controle dos Impulsos"
          content='Como a cleptomania e a tricotilomania (arrancar cabelos), envolvem comportamentos repetitivos e compulsivos que não são facilmente controlados.'
        />

        <InfoText
          title="Uso de Substâncias"
          content='Envolvem abuso ou dependência de álcool, drogas e outras substâncias, com consequências negativas para a saúde física e mental.'
        />
      </Container>
    </Screen>
  )
}

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderColor: '#fff',
    borderBottomWidth: 1,
    borderRadius: 60,
  },
  container: {
    gap: 10,
  },
})
