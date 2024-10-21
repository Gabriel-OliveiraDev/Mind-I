import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from '../../../../components'
import useTheme from '../../../../hooks/useTheme'

interface ButtonProps extends TouchableOpacityProps {
  icon?: string
  text: string
  color?: string
}

export default function ListButton({ ...props }: ButtonProps) {
  const Theme = useTheme()
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: props.color || Theme.primaryButton }]} activeOpacity={0.8}
      {...props}
    >
      <Text.Sub style={styles.text}>
        {props.text}
      </Text.Sub>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 100,
    borderRadius: 6,
    elevation: 10,
    padding: 10,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
  }
})