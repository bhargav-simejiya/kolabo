import { StyleSheet } from 'react-native'
import COLORS from '../../Helper/Colors'
import FONTS from '../../Helper/Fonts'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  upperContainer: {
    backgroundColor: COLORS.APP_PRIMARY,
    borderRadius: 20,
    marginHorizontal: 30,
    alignItems: 'center',
    padding: 10,
    marginTop: 30
  },
  imgEye: {
    height: 18,
    width: 25,
    tintColor: 'white'
  },
  toConnectText: {
    fontFamily: FONTS.NERIS_REGULAR,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginTop: 12,
    fontWeight: '300',
    marginBottom: 8
  },
  introText: {
    fontFamily: FONTS.NERIS_REGULAR,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 65,
    fontWeight: '300',
    marginHorizontal: 30
  },
  btnStyle: {
    borderRadius: 40,
    backgroundColor: COLORS.APP_PRIMARY_LIGHT,
    paddingHorizontal: 40,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 8,
    width: 220,
  },
  btnTextStyle: {
    marginTop: -10,
    fontSize: 40,
    fontWeight: '300',
    fontFamily: FONTS.VISBYROUND_LIGHT,
  }
})