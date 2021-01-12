import AsyncStorage from '@react-native-community/async-storage'
import log from '@log'

// ISLOGIN
export const IsLogin = 'cuvaLogin'

export const getIsLooggedIn = async () => {
  let isLogin = await AsyncStorage.getItem(IsLogin)
  return isLogin
}

export const setIsLoggedIn = is => AsyncStorage.setItem(IsLogin, is.toString())

export const removeIsLogins = is => AsyncStorage.removeItem(IsLogin)

export const setIsUserLoggedIn = is => AsyncStorage.setItem(IsLogin, is.toString())

export const removeIsUserLoggedIn = is => AsyncStorage.removeItem(IsLogin)
