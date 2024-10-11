import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import useGoTo from '../../../hooks/useGoTo'
import { Text } from '../../../components';
import { Colors } from '../../../utils/constants/colors';

export default function SignIn() {
  const { goToLogin } = useGoTo();
  return (
    <View style={styles.signInContainer}>
      <Text.Body color={Colors.Black}>Já tem uma conta? </Text.Body>
      <TouchableOpacity onPress={goToLogin}>
        <Text.Body color={Colors.Blue.Main}>ENTRAR</Text.Body>
      </TouchableOpacity>
    </View>
  )
}