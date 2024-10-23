import React, { useRef, useEffect, useState } from 'react'
import { View, Animated } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import { Button, Input, Screen, Text } from '../../components'
import { Colors } from '../../utils/constants'
import { styles } from './styles'
import { useAppContext } from '../../context'
import { useGoTo, useAuth } from '../../hooks'
import { db } from '../../services/firebase/FireBaseConnection'
import { doc, setDoc } from 'firebase/firestore'

export default function RegisterScreen() {
  const { register } = useAuth()
  const { login } = useAppContext()
  const { goToLogin } = useGoTo()
  const waveAnimationTop = useRef(new Animated.Value(0)).current
  const waveAnimationBottom = useRef(new Animated.Value(30)).current

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [transitionData, setTransitionData] = useState(false)
  const [error, setError] = useState('')

  const handleRegister = async () => {
    const result = await register(email, password, name)
    if (typeof result === 'string') {
      setError(result)
    }
  }

  const handleTransition = () => { setTransitionData(!transitionData) }

  const animateWaves = (animation: Animated.Value, toValue1: number, toValue2: number) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: toValue1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: toValue2,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start()
  }

  useEffect(() => {
    animateWaves(waveAnimationTop, 12, 0)
    animateWaves(waveAnimationBottom, 0, 12)
  }, [])

  const renderWave = (fill: string, rotate = false) => (
    <Svg height="150" width={'100%'} style={rotate ? { transform: [{ rotate: '180deg' }] } : {}}>
      <Path
        d="M44.6371 45.6168L-6 92.6782V150H416V0L311.411 57.5739C287.235 70.8823 258.29 72.3633 232.882 61.5919L155.247 28.6799C144.135 23.9691 132.189 21.5414 120.119 21.5414H105.907C83.1759 21.5414 61.2872 30.1424 44.6371 45.6168Z"
        fill={fill}
      />
    </Svg>
  )

  return (
    <Screen color={Colors.White}>
      <View style={styles.waveContainerTop}>
        <Animated.View style={[styles.wave, { transform: [{ translateY: waveAnimationTop }] }]}>
          {renderWave('#7279A2', true)}
        </Animated.View>
        <View style={[styles.wave, styles.waveOverlay]}>
          {renderWave('#2D3250', true)}
        </View>
      </View>

      <View style={styles.content}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 32
        }}>
          <Text.Title color={Colors.Black}>Bem-vindo</Text.Title>
          <Text.Sub color={Colors.Gray}>Crie uma conta para participar do Mind-i</Text.Sub>
        </View>

        {!transitionData ?
          (<>
            <Input
              placeholder='Nome'
              autoCapitalize='words'
              onChangeText={setName}
              value={name}
            />
            <Input
              placeholder='Email'
              keyboardType='email-address'
              onChangeText={setEmail}
              value={email}
            />
          </>
          )
          :
          (
            <View style={{ width: '100%', alignItems: 'center' }}>
              <Input
                placeholder='Senha'
                secureTextEntry
                passwordRules={'atLeast8Characters'}
                onChangeText={setPassword}
                value={password}
              />
              <Input
                secureTextEntry
                placeholder='Confirmar Senha'
                onChangeText={setConfirmPassword}
                value={confirmPassword}
              />
            </View>
          )
        }
        {error && (<Text.Body color={Colors.Red}>{error}</Text.Body>)}

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Button
            style={{ width: '40%' }}
            text={transitionData ? 'Voltar' : 'Avançar'}
            color={Colors.Blue.Deep}
            onPress={handleTransition}
          />

          {transitionData && (
            <Button
              style={{ width: '40%' }}
              text='Registrar'
              color={Colors.Blue.Deep}
              onPress={() => { handleRegister() }}
            />
          )}
        </View>

        <Text.Body color={Colors.Black}>Ja possui uma conta?
          <Text.Body color={Colors.Blue.Main} onPress={(goToLogin)}> Entrar</Text.Body>
        </Text.Body>
      </View>
    </Screen>
  )
}
