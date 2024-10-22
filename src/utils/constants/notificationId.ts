import { AndroidChannel } from "@notifee/react-native"

export const NotificationId = {
  focus: <AndroidChannel>({
    id: 'focus-channel-id',
    name: 'focus-channel',
    vibration: true,
  }),

  medication: <AndroidChannel>({
    id: 'medication-channel-id',
    name: 'medication-channel',
    vibration: true,
  })
}