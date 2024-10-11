import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'



export default function RightContainer({ children }: PropsWithChildren) {
  return (
    <View style={{ height: '100%', width: 175 }}>
      {children}
    </View>
  )
}