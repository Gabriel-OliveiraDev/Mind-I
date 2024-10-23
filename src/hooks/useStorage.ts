import AsyncStorage from '@react-native-async-storage/async-storage'

export default function useStorage() {
  async function setItem(key: string, value: any) {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (err) {
      console.log(err)
    }
  }

  async function getItem(key: string) {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (err) {
      console.log(err)
    }
  }

  async function removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (err) {
      console.log(err)
    }
  }

  return { setItem, getItem, removeItem }
}