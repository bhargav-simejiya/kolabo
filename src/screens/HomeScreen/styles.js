import { StyleSheet } from 'react-native'
import COLORS from '../../Helper/Colors'
import FONTS from '../../Helper/Fonts'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  imgLogo: {
    height: 400,
    width: 400,
    alignSelf: 'center'
  },
  appName: {
    fontSize: 65,
    fontFamily: FONTS.VISBYROUND_REGULAR,
    fontWeight: '800',
    color: COLORS.WHITE,
    alignSelf: 'center',
    marginTop: -100
  },
  detailsText: {
    fontSize: 23,
    fontFamily: FONTS.VISBYROUND_REGULAR,
    fontWeight: '600',
    color: COLORS.WHITE,
    alignSelf: 'center',
    marginHorizontal: 30,
    marginTop: 12,
    textAlign: 'center'
  },
  btnStyle: {
    borderRadius: 40,
    backgroundColor: COLORS.APP_PRIMARY,
    paddingHorizontal: 40,
    paddingVertical: 10,
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 8,
    width: 220
  },
  detailsCont: {
    flex: 1,
    backgroundColor: '#00000080',
    margin: -10,
    justifyContent: 'center',
  }
})