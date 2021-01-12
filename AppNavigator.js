// GLobal Imports
import 'react-native-gesture-handler'
import * as React from 'react'
import { LogBox, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// File Imports
import App from './App'
import InitialScreen from './src/screens/InitialScreen'
import AboutRAIN from './src/screens/AboutRAIN'
import Register from './src/screens/Register'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

class AppNavigator extends React.Component {
  componentDidMount() {
    LogBox.ignoreAllLogs(true)
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="App">
          <Stack.Screen
            name="App"
            component={App}
            options={() => ({ headerShown: false })}
          />
          <Stack.Screen
            name="InitialScreen"
            component={InitialScreen}
            options={() => ({ headerShown: false })}
          />
          <Stack.Screen
            name="AboutRAIN"
            component={AboutRAIN}
            options={() => ({ headerShown: false })}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={() => ({ headerShown: false })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator