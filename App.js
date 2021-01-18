// Global Imports
import React from 'react'
import { View, I18nManager, Text } from 'react-native'
import { CommonActions } from '@react-navigation/native'
import * as Sentry from "@sentry/react-native"
import messaging from '@react-native-firebase/messaging'

// File Imports
import { SENTRY_URL } from './src/Helper/Constants'
import LocalizedStrings from './src/Helper/LocalizedStrings'

// Component Imports
import Loader from '@Loader'

Sentry.init({ dsn: SENTRY_URL })

class App extends React.Component {
  componentDidMount() {
    console.log("KOLABO-- App")
    LocalizedStrings.setLanguage('en')

    if (LocalizedStrings.getLanguage() === 'ar') {
      I18nManager.allowRTL(true)
      I18nManager.forceRTL(true)
    } else {
      I18nManager.allowRTL(false)
      I18nManager.forceRTL(false)
    }

    this.props.navigation.dispatch(CommonActions.reset({ index: 1, routes: [{ name: 'InitialScreen' }] }))
    this.requestUserPermission()

    messaging().onMessage(async remoteMessage => {
      alert('A new FCM message arrived!', JSON.stringify(remoteMessage))
    })

    messaging().getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          log.success(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
      })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Kolabo</Text>
        </View>
    )
  }

  requestUserPermission = async () => {
    const authorizationStatus = await messaging().requestPermission()
    if (authorizationStatus) {
      let fcmToken = await messaging().getToken()
      console.log('fcmToken: ', fcmToken)
      // Utils.setNotificationDeviceToken(fcmToken)
    }
  }
}

export default App