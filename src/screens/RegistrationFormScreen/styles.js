import { StyleSheet } from 'react-native'
import COLORS from '../../Helper/Colors'
import FONTS from '../../Helper/Fonts'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  headerText:{
    fontFamily: FONTS.NERIS_SEMIBOLD,
    fontSize: 21,
    fontWeight: '600', 
    color: COLORS.APP_PRIMARY
  },
  textInput: {
    marginTop: 12,
    marginHorizontal: 12,
  },
  intro: {
    fontFamily: FONTS.NERIS_REGULAR,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    marginHorizontal: 30,
    color: COLORS.WHITE
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
  alreadyHave: {
    fontFamily: FONTS.NERIS_REGULAR,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '300',
    marginHorizontal: 30,
    color: COLORS.WHITE
  },
  backButton: {
    backgroundColor: 'transparent',
  },
  socialIcon: {
    height: 60,
    width: 60
  }
})