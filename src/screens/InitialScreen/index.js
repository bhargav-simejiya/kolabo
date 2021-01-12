// GLobal Imports
import React, { Component } from 'react'
import {
  Text, View, Image, ImageBackground,
  StatusBar
} from 'react-native'

// File Imports
import styles from './styles'
import COLORS from '../../Helper/Colors'
import LocalizedStrings from '../../Helper/LocalizedStrings'

// Component Imports
import CustomButton from '@Button'
import imgBG from '../../../assets/images/HoldingHands.png'
import imgLogo from '../../../assets/images/logo.png'

export class InitialScreen extends Component {
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

  _exploreButtonPressed = () => {
    this.props.navigation.navigate('AboutRAIN')
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
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <ImageBackground source={imgBG} style={{ flex: 1, alignItems: 'center', }}>
          {this.renderDetails()}
        </ImageBackground>
      </View>
    )
  }

  renderDetails = () => {
    return (
      <View style={styles.detailsCont}>
        <Image source={imgLogo} style={styles.imgLogo} resizeMode='center' />
        <Text style={styles.appName}>{LocalizedStrings.Explore.Kolabo}</Text>
        <Text style={styles.detailsText}>{LocalizedStrings.Explore.Details}</Text>
        {this.renderExploreButton()}
      </View>
    )
  }

  renderExploreButton = () => {
    return (
      <CustomButton
        title={LocalizedStrings.Explore.Explore}
        btnStyle={styles.btnStyle}
        buttonAction={this._exploreButtonPressed}
        textColor={COLORS.WHITE}
      />
    )
  }
}

export default InitialScreen
