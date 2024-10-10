import { View, ViewProps, ViewStyle } from 'react-native'
import React, { PropsWithChildren } from 'react'

interface ContainerProps extends PropsWithChildren, ViewProps {
  color?: string
  flex?: boolean
}

export default function Container({ flex, children, color, ...props }: ContainerProps) {

  const viewStyle: ViewStyle = {
    flex: flex ? 1 : 0,
    backgroundColor: color ? color : 'transparent',
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <View {...props} style={[viewStyle, props.style]} >
      {children}
    </View>
  )
}