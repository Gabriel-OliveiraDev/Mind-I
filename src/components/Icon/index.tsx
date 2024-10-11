import React from 'react';
import { TextStyle } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

// Definindo as bibliotecas possíveis
type IconType = 'MaterialIcons' | 'FontAwesome' | 'Ionicons' | 'Feather' | 'MaterialCommunityIcons' | 'Entypo';

interface IconProps {
  name: string;
  size?: number; // Tamanho do Icon size, padrão é  24
  color?: string; // Cor do icone, padrão preto
  style?: TextStyle; // Estilo adicional
  type: IconType; // O tipo da biblioteca
}

export default function Icon({ name, size = 24, color, style, type }: IconProps) {
  let IconLibrary;

  // Switch pra trocar entre as bibliotecas
  switch (type) {
    case 'MaterialIcons':
      IconLibrary = MaterialIcons;
      break;
    case 'FontAwesome':
      IconLibrary = FontAwesome;
      break;
    case 'Ionicons':
      IconLibrary = Ionicons;
      break;
    case 'Feather':
      IconLibrary = Feather;
      break;
    case 'MaterialCommunityIcons':
      IconLibrary = MaterialCommunityIcons;
      break;
    case 'Entypo':
      IconLibrary = Entypo;
      break;
    default:
      return null; // Caso não seja passada uma biblioteca suportada
  }
  // Retorna o icone
  return <IconLibrary name={name} size={size} color={color} style={style} />
}
