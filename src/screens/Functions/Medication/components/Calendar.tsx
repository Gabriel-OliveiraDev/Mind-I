import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DayCalendar from './DayCalendar'
import { Colors } from '../../../../utils/constants/colors'

interface DayCalendarProps {
  onDaysChange: (day: number[]) => void
}

export default function Calendar({ onDaysChange }: DayCalendarProps) {
  const [selectedDays, setSelectedDays] = useState<number[]>([])


  const handleSelect = (day: number, selected: boolean) => {
    const updatedDays = selected ?
      [...selectedDays, day] // Adicionando o dia que foi selecionado
      :
      selectedDays.filter(d => d !== day) // Remove o dia descmarcando o dia selecionado
    setSelectedDays(updatedDays)
  }

  // Atualizando o componente Pai
  useEffect(() => {
    onDaysChange(selectedDays)
  }, [selectedDays])

  return (
    <View style={styles.container}>
      <DayCalendar day='Seg' onSelect={(s: boolean) => { handleSelect(1, s) }} />
      <DayCalendar day='Ter' onSelect={(s: boolean) => { handleSelect(2, s) }} />
      <DayCalendar day='Qua' onSelect={(s: boolean) => { handleSelect(3, s) }} />
      <DayCalendar day='Qui' onSelect={(s: boolean) => { handleSelect(4, s) }} />
      <DayCalendar day='Sex' onSelect={(s: boolean) => { handleSelect(5, s) }} />
      <DayCalendar day='Sab' onSelect={(s: boolean) => { handleSelect(6, s) }} />
      <DayCalendar day='Dom' onSelect={(s: boolean) => { handleSelect(7, s) }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: Colors.Blue.Main,
    width: '95%',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-evenly',
    borderRadius: 8,
    padding: 2
  }
})