import { View, TouchableOpacity, Modal as RNModal, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../utils/constants/colors';
import { Text } from '../../components';

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  text: string;
  onConfirm?: () => void;
}

export default function Modal({ modalVisible, setModalVisible, title, text, onConfirm }: ModalProps) {
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

          {onConfirm && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onConfirm();
                setModalVisible(false);
              }}
              activeOpacity={0.8}
            >
              <Text.Body >Confirmar</Text.Body>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(false)}
            activeOpacity={0.8}
          >
            <Text.Body>Fechar</Text.Body>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
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
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.Blue.Main,
  },
});
