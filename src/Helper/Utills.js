import AsyncStorage from '@react-native-community/async-storage'
import log from '@log'
import firebase from './Firebase';

// ISLOGIN
export const IsLogin = 'kolaboLogin'
export const PUSH_TOKEN = "push_token"

export const getIsLooggedIn = async () => {
  let isLogin = await AsyncStorage.getItem(IsLogin)
  return isLogin
}

export const setIsLoggedIn = is => AsyncStorage.setItem(IsLogin, is.toString())

export const removeIsLogins = is => AsyncStorage.removeItem(IsLogin)

export const setIsUserLoggedIn = is => AsyncStorage.setItem(IsLogin, is.toString())

export const removeIsUserLoggedIn = is => AsyncStorage.removeItem(IsLogin)

export const setNotificationDeviceToken = token => AsyncStorage.setItem(PUSH_TOKEN, token)

export const getNotificationDeviceToken = () => AsyncStorage.getItem(PUSH_TOKEN)

export const writeDatabase = async (ref, data) => {
  firebase.database().ref(ref).set(data).then((data) => {
    //success callback
    console.log('data ', data)
    return {success:true, data};
  }).catch((error) => {
    //error callback
    console.log('error ', error)
    return { success: false, error };
  }) 
}

export const readDatabase = (ref) => {
  return firebase.database().ref(ref).once('value').then((snapshot) => {
    return snapshot.val();
  });
}