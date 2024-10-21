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
  const goToBubble = () => {
    nav.navigate("Bubble")
  }

  const goToMedication = () => {
    nav.navigate("Medication")
  }

  const goToInfo = () => {
    nav.navigate("Information")
  }

  const goToTerms = () => {
    nav.navigate("Terms")
  }

  const goToAbout = () => {
    nav.navigate("About")
  }


  return {
    goToHome,
    goToLogin,
    goToRegister,
    goToAccount,
    goToFocus,
    goToMeditation,
    goToBubble,
    goToMedication,
    goToInfo,
    goToTerms,
    goToAbout
  }
}