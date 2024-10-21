import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../utils/constants/colors';
import { Screen, Button, Input, Logo, Wave, Container, Text } from '../../components';
import { useAppContext } from '../../context';
import useGoTo from '../../hooks/useGoTo';

export default function LoginScreen() {
  const { goToRegister } = useGoTo()
  const { login } = useAppContext()
  return (
    <Screen color={Colors.White}>
      <View style={styles.topBackground}>
        <Logo width={'60%'} height={'70%'} />
        <Text.Title color={'#5D54B4'} style={styles.title}>Mind I</Text.Title>
      </View>
      <Wave />
      <Container >

        <Input
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={() => { }}
        />

        <Input
          placeholder="Senha"
          secureTextEntry
          onChangeText={() => { }}
        />

        <Button text='Entrar' onPress={login} />

        <Text.Body style={{ marginTop: 20 }} color={Colors.Black}>Não possui uma conta ?
          <Text.Body color={Colors.Blue.Main} onPress={goToRegister}> Cadastre-se</Text.Body>
        </Text.Body>
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  topBackground: {
    width: '100%',
    height: '40%',
    backgroundColor: Colors.Blue.Deep,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
  }
})