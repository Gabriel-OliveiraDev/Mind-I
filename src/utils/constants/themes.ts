import { Colors } from "./colors";

const lightTheme = {
  background: Colors.White,
  wave: Colors.Blue.Deep,
  banner: Colors.Blue.Deep,
  primaryButton: Colors.Blue.Min,
  secondButton: Colors.Blue.Main,
  text: Colors.White,
  textTitle: Colors.Blue.Deep,
  header: Colors.White,
  meditationCircle: Colors.Blue.Deep,
  meditationBackground: Colors.LightGray,
  containerMin: Colors.Blue.Min,
  containerMain: Colors.Blue.Main,
}

const darkTheme = {
  background: Colors.Blue.Deep,
  wave: Colors.White,
  banner: Colors.Blue.Main,
  primaryButton: Colors.Blue.Main,
  secondButton: Colors.Blue.Min,
  text: Colors.White,
  textTitle: Colors.White,
  header: Colors.Blue.Deep,
  meditationCircle: Colors.White,
  meditationBackground: Colors.Blue.Main,
  containerMin: Colors.Blue.Min,
  containerMain: Colors.Blue.Main,
}

export const Themes = {
  lightTheme,
  darkTheme
}
