import { TextInput, TextInputProps, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/constants/colors'

interface InputProps extends TextInputProps { }

export default function Input({ style, ...props }: InputProps) {
  return (
    <TextInput style={[styles.textInput, style]} {...props} />
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '75%',
    borderBottomColor: Colors.Black,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})