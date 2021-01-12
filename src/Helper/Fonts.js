import { Platform } from 'react-native'

export default {
  VISBYROUND_BOLD: Platform.OS === 'ios' ? "VisbyRoundCF-Bold" : "VisbyRoundCF-Bold",
  VISBYROUND_EXTRABOLD: Platform.OS === 'ios' ? "VisbyRoundCF-ExtraBold" : "VisbyRoundCF-ExtraBold",
  VISBYROUND_LIGHT: Platform.OS === 'ios' ? "VisbyRoundCF-Light" : "VisbyRoundCF-Light",
  VISBYROUND_MEDIUM: Platform.OS === 'ios' ? "VisbyRoundCF-Medium" : "VisbyRoundCF-Medium",
  VISBYROUND_REGULAR: Platform.OS === 'ios' ? "VisbyRoundCF-Regular" : "VisbyRoundCF-Regular",
  VISBYROUND_SEMIBOLD: Platform.OS === 'ios' ? "VisbyRoundCF-DemiBold" : "VisbyRoundCF-DemiBold",
  NERIS_REGULAR: Platform.OS === 'ios' ? "Neris-Light" : "Neris-Light",
  NERIS_SEMIBOLD: Platform.OS === 'ios' ? "Neris-SemiBold" : "Neris-SemiBold",
}