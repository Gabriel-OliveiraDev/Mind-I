import { View, ViewProps, ViewStyle, ScrollView, ScrollViewProps } from 'react-native'
import React from 'react'

interface ContainerProps extends ViewProps {
  color?: string
  flex?: boolean
  list?: boolean
  horizontalList?: boolean
  scrollOptions?: ScrollViewProps
  center?: boolean
}

export default function Container({ flex, children, color, list = false, horizontalList = false, center = true, ...props }: ContainerProps) {
  const baseStyle: ViewStyle = {
    flex: flex ? 1 : 0,
    backgroundColor: color || 'transparent',
    width: '100%',
    padding: 20,
    justifyContent: center ? 'center' : 'flex-start',
    alignItems: 'center'
  }

  const listStyle: ViewStyle = {
    ...baseStyle,
    gap: 10,
    flexDirection: horizontalList ? 'row' : 'column',
  }

  if (list) {
    return (
      <ScrollView
        {...props.scrollOptions}
        horizontal={horizontalList} // Permite rolagem horizontal
        contentContainerStyle={[listStyle, props.style]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    )
  }

  return (
    <View {...props} style={[baseStyle, props.style]}>
      {children}
    </View>
  )
}
