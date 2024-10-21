import { TouchableOpacity, StyleSheet, TouchableOpacityProps, View, Dimensions } from 'react-native'
import React from 'react'
import { Icon, Text } from '../../components'
import { Colors } from '../../utils/constants'
import { IconType } from '../../utils/types'
import useTheme from '../../hooks/useTheme'

interface ListItemProps extends TouchableOpacityProps {
  title: string
  icon?: string
  type?: IconType
}


const { height } = Dimensions.get('window');
export default function ListItem({ title, icon, type, ...props }: ListItemProps) {
  const Theme = useTheme()
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: Theme.primaryButton }]}
      activeOpacity={0.8}
      {...props}
    >

      <View style={styles.textContainer}>
        <Text.Sub>{title}</Text.Sub>
      </View>

      <View style={styles.iconContainer}>
        {icon && type ? <Icon type={type} name={icon} color={Colors.White} /> : null}
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.06,
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