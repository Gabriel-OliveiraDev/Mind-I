export type IconType = 'MaterialIcons' | 'FontAwesome' | 'Ionicons' | 'Feather' | 'MaterialCommunityIcons' | 'Entypo'

export type Theme = 'light' | 'dark'

export type Languages = "pt-BR" | "en-US"

export type User = {
  email: string
  uid: string
  name?: string
  photoURL?: string
  theme?: Theme,
  phone?: string
  birthdate?: Date
  createdAt?: Date
  updatedAt?: Date
  language: Languages
}