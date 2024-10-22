import { Themes } from '../utils/constants'
import { useAppContext } from "../context";


export default function useTheme() {
  const { theme } = useAppContext()
  const themeToUse = theme === 'light' ? Themes.lightTheme : Themes.darkTheme

  return themeToUse
}