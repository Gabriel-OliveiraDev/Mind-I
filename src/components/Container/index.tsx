import { View, ViewProps, ViewStyle, ScrollView, ScrollViewProps } from 'react-native'
import React from 'react'

interface ContainerProps extends ViewProps, ScrollViewProps {
  color?: string
  flex?: boolean
  list?: boolean
}

export default function Container({ flex, children, color, list = false, ...props }: ContainerProps) {
  const baseStyle: ViewStyle = {
    flex: flex ? 1 : 0,
    backgroundColor: color || 'transparent',
    width: '100%',
    padding: 20,
  }

  const listStyle: ViewStyle = {
    ...baseStyle,
    gap: 10,
  }

  if (list) {
    return (
      <ScrollView
        {...props}
        contentContainerStyle={[listStyle, props.style]}
      >
        {children}
      </ScrollView>
    )
  }

  return (
    <View {...props} style={[baseStyle, props.style, { justifyContent: 'center', alignItems: 'center' }]}>
      {children}
    </View>
  )
}

