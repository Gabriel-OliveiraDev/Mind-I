import { SafeAreaView, ViewProps, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { PropsWithChildren } from 'react';

interface ScreenProps extends PropsWithChildren, ViewProps {
  color?: string;
}

export default function Screen({ children, color = 'transparent', style, ...props }: ScreenProps) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexGrow: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      {/* Detecta toque fora do input e oculta o teclado */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={[{ flex: 1, backgroundColor: color }, style]} {...props}>
          {children}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
