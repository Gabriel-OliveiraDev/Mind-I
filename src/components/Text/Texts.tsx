import { Text, TextStyle } from 'react-native';
import { TextProps as RNTextProps } from 'react-native';
import React from 'react';
import useTheme from '../../hooks/useTheme';

export interface TextProps extends RNTextProps {
  color?: string;
  title?: boolean;
}

const baseStyle: TextStyle = {
  fontWeight: 'bold',
  color: 'white',
};

const TextComponent =
  (fontSize: number) =>
    ({ children, color, style, title, ...props }: TextProps) => {
      const Theme = useTheme();

      const combinedStyle: TextStyle = {
        fontSize, // Tamanho da fonte
        color: color || (title ? Theme.textTitle : Theme.text), // Alterna entre Theme.textTitle e Theme.text
        ...(title
          ? {
            paddingHorizontal: 30,
            paddingVertical: 4,
            borderColor: Theme.textTitle,
            borderBottomWidth: 1,
            borderRadius: 60,
          }
          : {}),
      };

      return (
        <Text maxFontSizeMultiplier={1.5} style={[baseStyle, combinedStyle, style]} {...props}>
          {children}
        </Text>
      );
    };

// Exportando diferentes variantes de texto
export const Title = TextComponent(32);
export const SubTitle = TextComponent(20);
export const Body = TextComponent(16);
