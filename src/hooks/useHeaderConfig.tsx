import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '../components'
import useTheme from './useTheme'

interface useHeaderConfig extends TouchableOpacityProps {
  color?: string
}

export default function useHeaderConfig({ ...props }: useHeaderConfig) {
  const Theme = useTheme()
  const navigation = useNavigation()

  return (useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          {...props}
          onPress={props.onPress}
          style={{ marginRight: 15 }}
        >
          <Icon name='help-outline' type='MaterialIcons' color={props.color || Theme.header} />
        </TouchableOpacity>
      )
    }), [navigation]
  }))
}