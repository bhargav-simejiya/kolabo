// GLobal Imports
import 'react-native-gesture-handler'
import * as React from 'react'
import { LogBox, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Zocial from 'react-native-vector-icons/Zocial'

// File Imports
import FONTS from './src/Helper/Fonts'
import App from './App'
import InitialScreen from './src/screens/InitialScreen'
import AboutRAIN from './src/screens/AboutRAIN'
import Register from './src/screens/Register'
import RegistrationFormScreen from './src/screens/RegistrationFormScreen'
import Login from './src/screens/Login'

import HomeScreen from './src/screens/HomeScreen'

import NotificationScreen from './src/screens/NotificationsScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import ContactUsScreen from './src/screens/ContactUsScreen'
import AboutUsScreen from './src/screens/AboutUsScreen'
import FAQScreen from './src/screens/FAQScreen'

import EventScreen from './src/screens/EventScreen'
import MessagesScreen from './src/screens/MessagesScreen'
import ProfileScreen from './src/screens/ProfileScreen'

import SideMenu from '@SideMenu'
import StyleConfig from './src/Helper/StyleConfig'
import { WIDTH } from './src/Helper/Constants'
import COLORS from './src/Helper/Colors'
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        
        if (route.name === 'Home') {
          return (<MaterialCommunityIcons name={"account-group"} size={size} color={color} />)
        } else if (route.name === 'Event') {
          return (<MaterialCommunityIcons name={"calendar-multiple-check"} size={size} color={color} />)
        } else if (route.name === 'MessagesScreen') {
          return (<Zocial name={"email"} size={size} color={color} />)
        } else if (route.name === 'ProfileScreen') {
          return (<MaterialCommunityIcons name={"account"} size={size} color={color} />)
        }
        
        },
    })}
    tabBarOptions={{
      showLabel: false,
      activeTintColor: COLORS.APP_PRIMARY,
      inactiveTintColor: COLORS.LIGHT_GRAY,
      
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Event" component={EventScreen} />
      <Tab.Screen name="MessagesScreen" component={MessagesScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{ width: WIDTH * 0.8 }}
      drawerContent={(props) => <SideMenu {...props} />}
      screenOptions={{ headerStyle: {}, useNativeAnimations: false }}
      drawerPosition='left'
    >
      <Drawer.Screen
        name="NotificationScreen"
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <Drawer.Screen
        name="ContactUsScreen"
        component={ContactUsScreen}
      />
      <Drawer.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
      />
      <Drawer.Screen
        name="FAQScreen"
        component={FAQScreen}
      />
    </Drawer.Navigator>
  )
}



class AppNavigator extends React.Component {
  componentDidMount() {
    LogBox.ignoreAllLogs(true)
    console.log("KOLABO-- AppNavigator")
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
            name="RegistrationFormScreen"
            component={RegistrationFormScreen}
            options={() => ({ headerShown: false })}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={() => ({ headerShown: false })}
          />
          <Stack.Screen
            name="Dashboard"
            component={DrawerNavigator}
            options={() => ({ headerShown: false })}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator