// Global Imports
import React, { Component } from 'react'
import {
  Text, View, ImageBackground, Image,
  TouchableOpacity, SafeAreaView, StatusBar
} from 'react-native'
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import firebase from '../../Helper/Firebase';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

// File Imports
import styles from './styles'
import COLORS from '../../Helper/Colors'
import LocalizedStrings from '../../Helper/LocalizedStrings'
import { writeDatabase, getNotificationDeviceToken} from '../../Helper/Utills'
// Component Imports
import CustomButton from '@Button'
import HeaderBackButton from '@HeaderBackButton'
import imgBG from '../../../assets/images/bgRegister.png'
import imgGoogle from '../../../assets/images/google.png'
import imgInstagram from '../../../assets/images/instagram.png'
import imgTwitter from '../../../assets/images/twitter.png'


export class Register extends Component {

  componentDidMount = () => {
      GoogleSignin.configure({
        "webClientId":"945147674348-4eadchsh384flckj3rc0fsq4ukbldibi.apps.googleusercontent.com"
      });  
    // Add listener here
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user && user != null) {
          console.log("Register ", user)
      }
    });
   // GoogleSignin.configure();
    // GoogleSignin.configure({
    //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    //   webClientId: '945147674348-4eadchsh384flckj3rc0fsq4ukbldibi.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    //   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //   hostedDomain: '', // specifies a hosted domain restriction
    //   loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    //   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    //   accountName: '', // [Android] specifies an account name on the device that should be used
    //   iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    // });
  }

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
  onGoogleSignIn = async () => {
    try {
      
      await GoogleSignin.hasPlayServices();
      console.log("reached google sign in");
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo ", userInfo)
     
      const { idToken } = userInfo;
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
    const firebaseRes =await auth().signInWithCredential(googleCredential);
    console.log("firebaseRes ", firebaseRes)
    const { additionalUserInfo: { profile: providerId }, user: { displayName, email, emailVerified, phoneNumber, photoURL, uid } } = firebaseRes
    let token = await getNotificationDeviceToken()
    writeDatabase(`user/${uid}`, {
      "name": displayName,
      email,
      emailVerified,
      phoneNumber,
      photoURL,
      "provider": "gmail",
      uid,
      token
    }); 
    this.props.navigation.navigate('Dashboard')
      
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("onGoogleSignIn  CANCELLED")
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("onGoogleSignIn  IN_PROGRESS")
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("onGoogleSignIn  PLAY_SERVICES_NOT_AVAILABLE")
        // play services not available or outdated
      } else {
        console.log("onGoogleSignIn  ELSE", error)
        // some other error happened
      }
    }
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
    
    
    console.log("facebookCredential ", facebookCredential)
    // Sign-in the user with the credential
    const firebaseRes = await auth().signInWithCredential(facebookCredential);
    console.log("firebaseRes ", firebaseRes)
    const { additionalUserInfo: { profile: providerId }, user: { displayName, email, emailVerified, phoneNumber, photoURL, uid } } = firebaseRes
    let token = await getNotificationDeviceToken()
    writeDatabase(`user/${uid}`, {
      "name": displayName,
      email,
      emailVerified,
      phoneNumber,
      photoURL,
      "provider": "facebook",
      uid,
      token
    });    
    this.props.navigation.navigate('Dashboard')
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
        <TouchableOpacity onPress={ this.onGoogleSignIn}>
          <Image source={imgGoogle} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15 }}>
          <Image source={imgTwitter} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onFacebookButtonPress}>
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
