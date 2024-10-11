import { Text, TextStyle } from 'react-native';
import { TextProps as RNTextProps } from "react-native";
import React from 'react';

export default interface TextProps extends RNTextProps {
  color?: string;
}

const baseStyle: TextStyle = {
  fontWeight: 'bold',
  color: 'white',
};

const TextComponent = (fontSize: number) => ({ children, color, style, ...props }: TextProps) => (
  <Text
    style={[
      baseStyle,           // Estilo base
      { fontSize },        // Tamanho da fonte
      style,               // Estilo adicional recebido por props (incrementa o estilo, não sobrescreve)
      { color: color || baseStyle.color },  // Cor personalizada ou cor padrão
    ]}
    {...props}
  >
    {children}
  </Text>
);

// Exportando diferentes variantes de texto
export const Title = TextComponent(32);
export const SubTitle = TextComponent(20);
export const Body = TextComponent(14);
