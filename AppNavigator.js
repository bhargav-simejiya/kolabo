// GLobal Imports
import 'react-native-gesture-handler'
import * as React from 'react'
import { LogBox, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

// File Imports
import FONTS from './src/Helper/Fonts'
import App from './App'
import InitialScreen from './src/screens/InitialScreen'
import AboutRAIN from './src/screens/AboutRAIN'
import Register from './src/screens/Register'
import Login from './src/screens/Login'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Home"
//       drawerStyle={{ width: WIDTH }}
//       drawerContent={props => <SideMenu {...props} />}
//       screenOptions={{ headerStyle: {}, useNativeAnimations: false }}
//       drawerPosition='left'
//     >
//       <Drawer.Screen
//         name="Home"
//         component={HomeStack}
//       />
//     </Drawer.Navigator>
//   )
// }

class AppNavigator extends React.Component {
  componentDidMount() {
    LogBox.ignoreAllLogs(true)
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="App"
          screenOptions={({ }) => ({
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { fontFamily: FONTS.NERIS_REGULAR, fontSize: 18, fontWeight: '400' }
          })}
        >
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
          <Stack.Screen
            name="Login"
            component={Login}
            options={() => ({ headerShown: false })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator