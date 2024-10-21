import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Logo, Text } from '../../../../components';
import useTheme from '../../../../hooks/useTheme';

interface BannerProps extends TouchableOpacityProps {
  hello: string;
  name: string;
}

export default function Banner({ children, hello, name, ...props }: BannerProps) {
  const Theme = useTheme()
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, { backgroundColor: Theme.banner }]}
      touchSoundDisabled
      activeOpacity={0.9}
    >
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          {
            name?.length >= 11 ?
              (<Text.Sub>{hello}</Text.Sub>) :
              (<Text.Title>{name}</Text.Title>)
          }
        </View>
        <View>
          <Logo height={250} width={150} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 8,
    paddingBottom: 40,
    borderBottomLeftRadius: 58,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    // Sombra para Android
    elevation: 8,
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  innerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
