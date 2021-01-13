import { StyleSheet } from 'react-native'
import COLORS from '../../Helper/Colors'
import FONTS from '../../Helper/Fonts'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    marginHorizontal: 25,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: COLORS.APP_PRIMARY,
    borderRadius: 36
  },
  textInput: {
    marginTop: 12,
    marginHorizontal: 12,
  },
  btnStyle: {
    marginHorizontal: 15,
    marginTop: 25
  },
  welcome: {
    fontFamily: FONTS.NERIS_REGULAR,
    fontWeight: '900',
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
    marginTop: 25
  },
  userImg: {
    height: 90,
    width: 90,
    alignSelf: 'center',
    marginTop: -60,
    borderRadius: 45,
    borderColor: 'rgb(223,212,200)',
    borderWidth: 4,
  },
  bottomContainer: {
    marginTop: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  loginWithSocialText: {
    fontFamily: FONTS.NERIS_REGULAR,
    fontSize: 16,
    color: COLORS.CHARCOAL_GREY
  },
  socialIcon: {
    height: 60,
    width: 60
  }
})