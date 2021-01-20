// Global Imports
import React, { Component } from 'react'
import {
  Text, View, ImageBackground, Image,
  TouchableOpacity, SafeAreaView, StatusBar
} from 'react-native'
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import firebase from '../../Helper/Firebase';
// File Imports
import styles from './styles'
import COLORS from '../../Helper/Colors'
import LocalizedStrings from '../../Helper/LocalizedStrings'

// Component Imports
import CustomButton from '@Button'
import HeaderBackButton from '@HeaderBackButton'
import imgBG from '../../../assets/images/bgRegister.png'
import imgGoogle from '../../../assets/images/google.png'
import imgInstagram from '../../../assets/images/instagram.png'
import imgTwitter from '../../../assets/images/twitter.png'

export class Register extends Component {
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

  _registerButtonPressed = () => {
    this.props.navigation.navigate('RegistrationFormScreen')
  }

  _loginButtonPressed = () => {
    this.props.navigation.navigate('Login')
  }

  onFacebookButtonPress = async ()=> {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(["email", "public_profile"]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  componentWillMount() {
    // Add listener here
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (!user && user != null) {
            console.log("Register ", user)
        }
    });
}

componentWillUnmount() {
    // Don't forget to unsubscribe when the component unmounts
    this.unsubscribe();
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
      <ImageBackground source={imgBG} style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <SafeAreaView style={styles.container}>
          <HeaderBackButton buttonAction={this._onPressBack} btnStyle={styles.backButton} tintColor={'white'} />
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            {this.renderContent()}
            {this.renderRegisterButton()}
            {this.renderSocialLogin()}
            {this.renderAlreadyLogin()}
          </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }

  renderContent = () => {
    return (
      <View>
        <Text style={styles.intro}>{LocalizedStrings.Register.Intro}</Text>
      </View>
    )
  }

  renderRegisterButton = () => {
    return (
      <CustomButton
        title={LocalizedStrings.Register.Register}
        btnStyle={styles.btnStyle}
        buttonAction={this._registerButtonPressed}
        textColor={COLORS.WHITE}
      />
    )
  }

  renderSocialLogin = () => {
    return (
      <View style={{ flexDirection: 'row', marginVertical: 40 }}>
        <TouchableOpacity>
          <Image source={imgGoogle} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15 }}>
          <Image source={imgTwitter} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}>
          <Image source={imgInstagram} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    )
  }

  renderAlreadyLogin = () => {
    return (
      <View>
        <Text style={styles.alreadyHave}>{LocalizedStrings.Register.Already}</Text>
        <TouchableOpacity onPress={this._loginButtonPressed}>
          <Text style={[styles.alreadyHave, { fontWeight: '500' }]}>{LocalizedStrings.Register.Login}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Register
