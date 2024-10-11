import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../../../utils/constants/colors'

interface ButtonProps extends TouchableOpacityProps {
  icon?: string
  text: string
}



export default function Button({ ...props }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.8} {...props}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.Blue.Min,
    width: '100%',
    height: 100,
    borderRadius: 6,
    elevation: 10,
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
    letterSpacing: 1
  }
})