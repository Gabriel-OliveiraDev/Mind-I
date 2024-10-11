import { ScrollView, StyleSheet } from 'react-native';
import React, { PropsWithChildren } from 'react';

export default function ListRoot({ children }: PropsWithChildren) {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer} // Responsável pelo conteúdo
      style={styles.container} // Estilo da ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
});
