import { View } from 'react-native'
import React, { PropsWithChildren } from 'react'

export default function LeftContainer({ children }: PropsWithChildren) {
  return (
    <View style={{ gap: 10 }}>
      {children}
    </View>
  )
}