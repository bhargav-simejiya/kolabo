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
export const SENTRY_URL = 'https://29a3971cf94e45e4a95fb72f8b6aea4e@o326473.ingest.sentry.io/5453790'

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