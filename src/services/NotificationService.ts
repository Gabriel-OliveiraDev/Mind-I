import notifee, {
  AndroidChannel,
  AndroidImportance,
  AuthorizationStatus,
  RepeatFrequency,
  TimestampTrigger,
  TriggerType
} from '@notifee/react-native'

interface notificationProps {
  channelData: AndroidChannel,
  id: string,
  title: string,
  body: string,
  importance?: AndroidImportance
  date?: Date
  repeatFrequency?: RepeatFrequency
}

export default function NotificationService() {

  // async function foregroundEvent(DISMISSED: () => void, PRESS: () => void) {
  //   notifee.onForegroundEvent(({ type }) => {
  //     switch (type) {
  //       case EventType.DISMISSED:
  //         DISMISSED()
  //         break
  //       case EventType.PRESS:
  //         PRESS()
  //         break
  //     }
  //   })
  // }

  async function getPermission(status: React.Dispatch<React.SetStateAction<boolean>>) {
    const settings = notifee.requestPermission()
    if ((await settings).authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      return status(true)
    }
    return status(false)
  }


  async function scheduleNotification({ ...data }: notificationProps) {
    if (data.date === undefined) return
    const channelId = await notifee.createChannel(data.channelData)

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: data.date?.getTime(),
      repeatFrequency: data.repeatFrequency || RepeatFrequency.NONE,
    }

    await notifee.createTriggerNotification({
      title: data.title,
      body: data.body,
      android: {
        channelId,
        importance: data.importance || AndroidImportance.HIGH,
      }
    }, trigger)
  }

  return {
    // foregroundEvent,
    getPermission,
    scheduleNotification
  }
}
