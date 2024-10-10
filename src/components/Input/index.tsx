import { TextInput, TextInputProps, StyleSheet } from 'react-native'
import React from 'react'

interface InputProps extends TextInputProps { }

export default function Input({ ...props }: InputProps) {
  return (
    <TextInput style={styles.textInput} {...props} />
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '75%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 20,
  },
})