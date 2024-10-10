import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, TouchableOpacityProps } from 'react-native';

import { Colors } from '../../utils/constants/colors';

const { width } = Dimensions.get('window');

interface ButtonProps extends TouchableOpacityProps {
  text: string
  color?: string
}

export default function Button({ text, color = Colors.Blue.Deep, style, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: color }, style]} {...props}
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
    margin: 5
  },
  text: {
    color: Colors.White,
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
})
