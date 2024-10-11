import { useNavigation } from "@react-navigation/native";

export default function useGoTo() {
  const nav = useNavigation()

  const goToHome = () => {
    nav.navigate('Home')
  }

  const goToLogin = () => {
    nav.navigate('Login')
  }

  const goToRegister = () => {
    nav.navigate('Register')
  }

  const goToAccount = () => {
    nav.navigate('Account')
  }

  const goToFocus = () => {
    nav.navigate("Focus")
  }

  const goToMeditation = () => {
    nav.navigate("Meditation")
  }

  return {
    goToHome,
    goToLogin,
    goToRegister,
    goToAccount,
    goToFocus,
    goToMeditation
  }
}