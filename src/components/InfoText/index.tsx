import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import useTheme from '../../hooks/useTheme'

interface InfoTextProps {
  title: string
  content: string
  color?: string
}

export default function InfoText({ title, content }: InfoTextProps) {
  const Theme = useTheme()
  return (
    <View style={styles.viewContainer}>
      <Text style={[styles.textTitle, { color: Theme.textTitle }]} >
        {title}
      </Text>
      <Text style={[styles.text, { color: Theme.textTitle }]}>
        {content}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    gap: 10,
  },
  textTitle: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    letterSpacing: 1.2,
  },
})

