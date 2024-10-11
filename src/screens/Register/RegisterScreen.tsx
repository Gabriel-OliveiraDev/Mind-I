import React, { useRef, useEffect } from 'react';
import { View, Animated } from 'react-native';

import Svg, { Path } from 'react-native-svg';
import { Button, Input, Screen, Text } from '../../components';
import { Colors } from '../../utils/constants/colors';
import { styles } from './styles';
import SignIn from './components/SignIn';
import { useAppContext } from '../../context';
import useGoTo from '../../hooks/useGoTo';

const width = '100%';

export default function RegisterScreen() {
  const waveAnimationTop = useRef(new Animated.Value(0)).current;
  const waveAnimationBottom = useRef(new Animated.Value(30)).current;

  const { login } = useAppContext()
  const { goToLogin } = useGoTo()

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
    ).start();
  };

  useEffect(() => {
    animateWaves(waveAnimationTop, 12, 0);
    animateWaves(waveAnimationBottom, 0, 12);
  }, []);

  const renderWave = (fill: string, rotate = false) => (
    <Svg height="150" width={width} style={rotate ? { transform: [{ rotate: '180deg' }] } : {}}>
      <Path
        d="M44.6371 45.6168L-6 92.6782V150H416V0L311.411 57.5739C287.235 70.8823 258.29 72.3633 232.882 61.5919L155.247 28.6799C144.135 23.9691 132.189 21.5414 120.119 21.5414H105.907C83.1759 21.5414 61.2872 30.1424 44.6371 45.6168Z"
        fill={fill}
      />
    </Svg>
  );

  return (
    <Screen>
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

        <Input placeholder='Nome' autoCapitalize='words' />
        <Input placeholder='Email' keyboardType='email-address' />
        <Input placeholder='Senha' secureTextEntry />

        <Button text='Criar Conta' color={Colors.Blue.Deep} onPress={login} />

        <Text.Body color={Colors.Black}>Ja possui uma conta?
          <Text.Body color={Colors.Blue.Main} onPress={goToLogin}> Entrar</Text.Body>
        </Text.Body>
      </View>
    </Screen>
  );
}
