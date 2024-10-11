import { TouchableOpacity, StyleSheet, TouchableOpacityProps, View, Dimensions } from 'react-native'
import React from 'react'
import { Text } from '../../components'
import { Colors } from '../../utils/constants/colors'

interface ListItemProps extends TouchableOpacityProps {
  title: string
  icon?: string
}


const { height } = Dimensions.get('window');
export default function ListItem({ title, icon, ...props }: ListItemProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      {...props}
    >

      <View style={styles.textContainer}>
        <Text.Sub>{title}</Text.Sub>
      </View>

      <View style={styles.iconContainer}>
        
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.06,
    backgroundColor: Colors.Blue.Main,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 10
  },
  iconContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 20
  }
})