import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, TouchableOpacityProps } from 'react-native';

import { Colors } from '../../utils/constants/colors';
import useTheme from '../../hooks/useTheme';

const { width } = Dimensions.get('window');

interface ButtonProps extends TouchableOpacityProps {
  text: string
  color?: string
}

export default function Button({ text, color, style, ...props }: ButtonProps) {
  const Theme = useTheme()
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: color || Theme.primaryButton }, style]} {...props}
      touchSoundDisabled
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    padding: 6,
    borderRadius: 12,
    width: width * 0.5,
    margin: 5,
    elevation: 8
  },
  text: {
    color: Colors.White,
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
})
