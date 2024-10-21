import { View, TouchableOpacity, Modal as RNModal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../utils/constants/colors'
import { Text } from '../../components'

interface ModalProps {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  text: string
}

export default function Modal({ modalVisible, setModalVisible, title, text }: ModalProps) {
  return (
    <RNModal
      transparent={true}
      visible={modalVisible}
      animationType="fade"
      onRequestClose={() => setModalVisible(false)}
      statusBarTranslucent
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>

          <Text.Sub color={Colors.Black} style={{ marginBottom: 10 }}>
            {title}
          </Text.Sub>

          <Text.Body color={Colors.Black} style={styles.modalText}>
            {text}
          </Text.Body>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
            activeOpacity={0.8}
          >
            <Text.Body>Fechar</Text.Body>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: Colors.White,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',

  },
  closeButton: {
    backgroundColor: Colors.Blue.Main,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: Colors.White,
    fontWeight: 'bold',
  },
});