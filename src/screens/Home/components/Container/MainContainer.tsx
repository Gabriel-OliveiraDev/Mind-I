import { View, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Colors } from '../../../../utils/constants/colors'

export default function MainContainer({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 40,
    backgroundColor: Colors.Blue.Deep,
    borderBottomLeftRadius: 58,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 }, // Direção da sombra
    shadowOpacity: 0.2, // Intensidade da sombra
    shadowRadius: 10, // Desfoque da sombra
    // Sombra para Android
    elevation: 24,
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
