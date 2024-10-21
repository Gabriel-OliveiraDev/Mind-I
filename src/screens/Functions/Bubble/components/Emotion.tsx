import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import React from 'react';
import { Text } from '../../../../components';
import { Colors } from '../../../../utils/constants/colors';
import { StyleSheet } from 'react-native';

interface EmotionProps extends TouchableOpacityProps {
  color: string;
  title: string;
  choiced?: boolean;
}

export default function Emotion({ color, title, choiced, onPress }: EmotionProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        choiced && { backgroundColor: Colors.Blue.Main },
      ]}
      activeOpacity={0.8}
    >
      <View style={[styles.emotionColor, { backgroundColor: color }]} />
      <Text.Body style={styles.text}>{title}</Text.Body>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 125,
    padding: 10,
    backgroundColor: Colors.Blue.Min,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    elevation: 8,
  },
  emotionColor: {
    height: 70,
    width: 70,
    borderRadius: 35,
    elevation: 24,
    opacity: 0.75,
  },
  text: {
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
