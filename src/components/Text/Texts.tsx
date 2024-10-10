import { Text, TextStyle } from 'react-native';
import { TextProps as RNTextProps } from "react-native";
import React from 'react';


export default interface TextProps extends RNTextProps {
  color?: string
}

const baseStyle: TextStyle = {
  fontWeight: 'bold',
  color: 'white',
};

const TextComponent = (fontSize: number) => ({ children, color, ...props }: TextProps) => (
  <Text style={
    [
      baseStyle,
      { fontSize },
      props.style,
      { color: color ? color : baseStyle.color }
    ]
  }
    {...props}>
    {children}
  </Text>
);

export const Title = TextComponent(24);
export const SubTitle = TextComponent(18);
export const Body = TextComponent(14);
