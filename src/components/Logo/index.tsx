import { DimensionValue, Image, ImageStyle } from 'react-native'
import React from 'react'

interface LogoProps {
  width: DimensionValue
  height: DimensionValue
  style?: ImageStyle
}

export default function Logo({ width, height, style }: LogoProps) {
  return (
    <Image style={[{ width, height }, style]}
      source={require('../../assets/images/Mind-I-Fundo-Login.png')} />
  )
}