import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../utils/constants/colors';
import { Screen, Button, Input, Logo, Wave, Container, Text } from '../../components';
import { useAppContext } from '../../context';
import { useAuth, useGoTo } from '../../hooks';
import { User } from '../../utils/types';

export default function LoginScreen() {
  const { signIn } = useAuth()
  const { goToRegister } = useGoTo()
  const { login } = useAppContext()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const handleLogin = async () => {
    const result = await signIn(email, password)
    if (typeof result === 'string') {
      setError(result)
    } else {
      const user: User = {
        email: result.user.email!,
        uid: result.user.uid,
      }
      login(user)
    }
  }


  return (
    <Screen color={Colors.White}>
      <View style={styles.topBackground}>
        <Logo width={'55%'} height={'65%'} />
        <Text.Title color={'#5D54B4'} style={styles.title}>Mind I</Text.Title>
      </View>
      <Wave color={Colors.Blue.Deep} />
      <Container >
        <Text.Sub color={Colors.Black} style={{ marginBottom: 10 }}>
          Ingressar ao Mind I
        </Text.Sub>
        <Container>

          <Input
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />

          <Input
            placeholder="Senha"
            secureTextEntry
            onChangeText={setPassword}
          />

          {error && <Text.Body color={Colors.Red}>{error}</Text.Body>}
          <Button color={Colors.Blue.Deep} text='Entrar' onPress={handleLogin} />
        </Container>

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
    height: '36%',
    backgroundColor: Colors.Blue.Deep,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
  }
})