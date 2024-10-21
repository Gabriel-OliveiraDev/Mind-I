import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker';
import { Colors } from '../../../utils/constants/colors';
import { Icon } from '../../../components';

export default function Profile() {
  const [profileImage, setProfileImage] = useState<string | undefined>(undefined);

  const openAlbum = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      selectionLimit: 1,
      includeBase64: true,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Seleção de imagem cancelada pelo usuário');
        return;
      } else if (response.errorCode) {
        console.log('Erro ao selecionar a imagem: ', response.errorCode);
        return;
      }

      if (response.assets && response.assets.length > 0) {
        const selectedImageUri = response.assets[0].uri;
        setProfileImage(selectedImageUri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openAlbum} style={styles.imageWrapper}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <View style={styles.placeholder}>
            <Icon type="MaterialIcons" name="person" size={64} color={Colors.Gray} />
          </View>
        )}
      </TouchableOpacity>

      {/* Ícone da câmera para indicar ação */}
      <View style={styles.cameraWrapper}>
        <TouchableOpacity style={styles.cameraButton} onPress={openAlbum}>
          <Icon type="MaterialIcons" name="camera-alt" size={28} color={Colors.Gray} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LightGray,
  },
  cameraWrapper: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  cameraButton: {
    backgroundColor: Colors.Blue.Min,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
