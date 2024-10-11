import { View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { Colors } from '../../utils/constants/colors'
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'

interface WaveProps extends ViewProps {
  color?: string
  inverted?: boolean
}

export default function Wave({ ...props }: WaveProps) {
  return (
    <View {...props}>
      <Svg height="100" width="100%"
        style={
          {
            top: !props.inverted ? '-10%' : '0%',
            transform: [{ rotate: !props.inverted ? '180deg' : '0deg' }],
          }
        }
      >
        <Path
          d="M44.6371 45.6168L-6 92.6782V150H416V0L311.411 57.5739C287.235 70.8823 258.29 72.3633 232.882 61.5919L155.247 28.6799C144.135 23.9691 132.189 21.5414 120.119 21.5414H105.907C83.1759 21.5414 61.2872 30.1424 44.6371 45.6168Z"
          fill={props.color ? props.color : Colors.Blue.Deep}
        />
      </Svg>
    </View >
  )
}