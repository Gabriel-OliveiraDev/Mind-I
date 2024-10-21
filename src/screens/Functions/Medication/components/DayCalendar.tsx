import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Icon, Text } from '../../../../components'
import { Colors } from '../../../../utils/constants/colors'

interface DayCalendarProps {
  day: string
  onSelect: (selected: boolean) => void
}

export default function DayCalendar({ day, onSelect }: DayCalendarProps) {
  const [selected, setSelected] = useState<boolean>(false)

  const handlePress = () => {
    setSelected(!selected)
    onSelect(!selected)
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.9}
      style={styles.container}
    >
      <View style={styles.dayContainer}>
        {selected && <Icon name='check' type='MaterialIcons' color={Colors.White} />}
      </View>
      <Text.Body color={Colors.White}>{day}</Text.Body>
    </TouchableOpacity >
  )
}


const styles = StyleSheet.create({
  container: {
    width: '12.5%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dayContainer: {
    backgroundColor: Colors.Blue.Min,
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },


})