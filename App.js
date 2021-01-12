// Global Imports
import React from 'react'
import { View, I18nManager } from 'react-native'
import { CommonActions } from '@react-navigation/native'

// File Imports
import LocalizedStrings from './src/Helper/LocalizedStrings'

// Component Imports
import Loader from '@Loader'

class App extends React.Component {
  componentDidMount() {
    LocalizedStrings.setLanguage('en')

    if (LocalizedStrings.getLanguage() === 'ar') {
      I18nManager.allowRTL(true)
      I18nManager.forceRTL(true)
    } else {
      I18nManager.allowRTL(false)
      I18nManager.forceRTL(false)
    }

    this.props.navigation.dispatch(CommonActions.reset({ index: 1, routes: [{ name: 'InitialScreen' }] }))
  }

  render() {
    return (
      <View />
    )
  }
}

export default App;
