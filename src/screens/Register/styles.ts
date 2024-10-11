import { StyleSheet } from "react-native";

export
  const styles = StyleSheet.create({
    waveContainerTop: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    wave: {
      position: 'absolute',
      width: "100%",
      height: 130,
    },
    waveOverlay: {
      zIndex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    signInContainer: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    signInText: {
      fontSize: 14,
      color: '#000',
    },
    signInLink: {
      fontSize: 14,
      color: '#424769',
      fontWeight: 'bold',
    },
  });

