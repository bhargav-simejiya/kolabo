// Global Imports
import React, { Component } from 'react'
import {
  Text, View, Image, SafeAreaView,
  ScrollView, Linking, StatusBar
} from 'react-native'

// File Imports
import styles from './styles'
import LocalizedStrings from '../../Helper/LocalizedStrings'

// Component Imports
import HeaderBackButton from '@HeaderBackButton'
import CustomButton from '@Button'
import imgEye from '../../../assets/images/eye.png'

export class AboutUsScreen extends Component {
  render() {
    return this.renderMainView()
  }

  /*
  .##....##....###....##.....##.####..######......###....########.####..#######..##....##..######.
  .###...##...##.##...##.....##..##..##....##....##.##......##.....##..##.....##.###...##.##....##
  .####..##..##...##..##.....##..##..##.........##...##.....##.....##..##.....##.####..##.##......
  .##.##.##.##.....##.##.....##..##..##...####.##.....##....##.....##..##.....##.##.##.##..######.
  .##..####.#########..##...##...##..##....##..#########....##.....##..##.....##.##..####.......##
  .##...###.##.....##...##.##....##..##....##..##.....##....##.....##..##.....##.##...###.##....##
  .##....##.##.....##....###....####..######...##.....##....##....####..#######..##....##..######.
  */

  _onPressBack = () => {
    this.props.navigation.goBack()
  }

  _nextButtonPressed = () => {
    this.props.navigation.navigate('Register')
  }

  /*
  ..######...#######..##.....##.########...#######..##....##.########.##....##.########..######.
  .##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##....##....##
  .##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##....##......
  .##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##.....######.
  .##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##..........##
  .##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##....##....##
  ..######...#######..##.....##.##.........#######..##....##.########.##....##....##.....######.
  */

  renderMainView = () => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <HeaderBackButton buttonAction={this._onPressBack} btnStyle={styles.backButton} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>About Us Screen</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }

  renderUpperGreenContainer = () => {
    return (
      <View style={styles.upperContainer}>
        <Image source={imgEye} style={styles.imgEye} resizeMode='contain' />
        <Text style={styles.toConnectText}>{LocalizedStrings.AboutRain.ToConnect}</Text>
      </View>
    )
  }

  renderIntroductionText = () => {
    return (
      <View>
        <Text style={styles.introText}>{LocalizedStrings.AboutRain.IntroductionText}</Text>
        <Text style={styles.introText}>{LocalizedStrings.AboutRain.MoreDetails} <Text style={{ color: 'blue', textDecorationLine: 'underline' }} onPress={() => Linking.openURL('https://innovateafrica.co')} >innovateafrica.co</Text></Text>
      </View>
    )
  }

  renderNextButton = () => {
    return (
      <CustomButton
        title={'>>>'}
        textStyle={styles.btnTextStyle}
        btnStyle={styles.btnStyle}
        buttonAction={this._nextButtonPressed}
      />
    )
  }
}

export default AboutUsScreen
