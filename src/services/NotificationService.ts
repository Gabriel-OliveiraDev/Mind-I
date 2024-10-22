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

  async function getPermission(status: React.Dispatch<React.SetStateAction<boolean>>) {
    const settings = notifee.requestPermission()
    if ((await settings).authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      return status(true)
    }
    return status(false)
  }

  async function scheduleNotification({
    channelData,
    date,
    body,
    title,
    repeatFrequency,
    id,
    importance
  }: notificationProps) {

    if (date === undefined) return
    const channelId = await notifee.createChannel(channelData)

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date?.getTime(),
      repeatFrequency: repeatFrequency || RepeatFrequency.NONE,
    }

    await notifee.createTriggerNotification({
      title: title,
      body: body,
      android: {
        channelId,
        importance: importance || AndroidImportance.HIGH,
        pressAction: {
          id: id || 'default',
          launchActivity: 'default'
        }
      }
    }, trigger)
  }

  return {
    getPermission,
    scheduleNotification
  }
}
