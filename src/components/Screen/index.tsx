import { SafeAreaView, ViewProps, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import useTheme from '../../hooks/useTheme'

interface ScreenProps extends ViewProps {
  color?: string
}

export default function Screen({ children, color, style, ...props }: ScreenProps) {
  const Theme = useTheme()
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexGrow: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled>
        <SafeAreaView style={[{ flex: 1, backgroundColor: color || Theme.background }, style]} {...props}>
          {children}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  )
}
