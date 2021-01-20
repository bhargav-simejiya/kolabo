import { Dimensions, Platform } from 'react-native'

// Header size accordingly platform
export const headerMarginTop = Platform.OS === 'ios' ? 0 : 0;

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const IMAGE_URL = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i

// BASE URL
export const BASE_URL = ''

// SENTRY URL
export const SENTRY_URL = 'https://1311e5835f5547f5be68ee4306af298f@o326473.ingest.sentry.io/5590572'

// FACEBOOK ID
export const FACEBOOK_APP_ID = 428580298157452;
// callback url https://kolabo-app.firebaseapp.com/__/auth/handler


// LOTTIE_ANIMATION_FILE
export const LOTTIE_ANIMATION_FILE = require('../../loader1.json')

// ANIMATION
export const LIGHT_SPEED_IN = 'fadeInUp'
export const FADE_IN_DOWN = 'fadeInDown'
export const FADE_IN_UP = 'fadeInUp'

// GLOBAL LOGOUT METHOD
export const LOGOUT_METHOD = (navigation) => {
  Utils.isLogins(false)
  navigation.dispatch(CommonActions.reset({ index: 1, routes: [{ name: 'Login' }] }))
}