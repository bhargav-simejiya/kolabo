// Global Imports
import React, { Component } from 'react'
import {
  Text, View, ImageBackground, KeyboardAvoidingView,
  ScrollView, Image, TouchableOpacity
} from 'react-native'

// File Imports
import styles from './styles'
import LocalizedStrings from '../../Helper/LocalizedStrings'

// Component Imports
import TextField from '@TextField'
import CustomButton from '@Button'
import imgBG from '../../../assets/images/BgLogIn.png'
import imgUser from '../../../assets/images/user.png'
import imgFb from '../../../assets/images/fb.png'
import imgGoogle from '../../../assets/images/google.png'
import imgInstagram from '../../../assets/images/instagram.png'
import imgTwitter from '../../../assets/images/twitter.png'


export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return this.redenrMainView()
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

  _loginButtonPressed = () => {

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

  redenrMainView = () => {
    return (
      <View style={styles.container}>
        <ImageBackground source={imgBG} style={{ flex: 1, justifyContent: 'center', }}>

          {this.renderLoginContainer()}
          {this.renderBottomView()}

        </ImageBackground>
      </View>
    )
  }

  renderLoginContainer = () => {
    return (
      <View style={styles.textContainer}>
        <Image source={imgUser} style={styles.userImg} resizeMode='contain' />
        <ScrollView scrollEnabled={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }}>
          <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', }}
            behavior={Platform.OS == 'ios' ? 'padding' : null}
          >
            <Text style={styles.welcome}>{LocalizedStrings.Login.Hello}</Text>
            {this.renderUsernameTextField()}
            {this.renderPasswordTextField()}
          </KeyboardAvoidingView>
        </ScrollView>
        {this.renderLogInButton()}
      </View>
    )
  }

  renderUsernameTextField = () => {
    return (
      <TextField
        placeholder={LocalizedStrings.Login.Username}
        containerView={styles.textInput}
        value={this.state.username}
        onChangeText={(text) => this.setState({ username: text })}
      />
    )
  }

  renderPasswordTextField = () => {
    return (
      <TextField
        placeholder={LocalizedStrings.Login.Password}
        secureTextEntry
        containerView={styles.textInput}
        value={this.state.password}
        onChangeText={(text) => this.setState({ password: text })}
      />
    )
  }

  renderLogInButton = () => {
    return (
      <CustomButton
        title={LocalizedStrings.Login.Login}
        btnStyle={styles.btnStyle}
        buttonAction={this._loginButtonPressed}
        textColor={'#030303'}
      />
    )
  }

  renderBottomView = () => {
    return (
      <View style={styles.bottomContainer}>
        <Text style={styles.loginWithSocialText}>{LocalizedStrings.Login.loginWithSocialText}</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TouchableOpacity style={{ marginRight: 15 }}>
            <Image source={imgFb} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imgGoogle} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15 }}>
            <Image source={imgTwitter} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imgInstagram} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Login
