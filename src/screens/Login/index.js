// Global Imports
import React, { Component } from 'react'
import {
  Text, View, ImageBackground, KeyboardAvoidingView,
  ScrollView, Image, TouchableOpacity
} from 'react-native'
import { Field, reduxForm } from "redux-form"
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
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
import StyleConfig from '../../Helper/StyleConfig'
import { readDatabase, writeDatabase, getNotificationDeviceToken } from '../../Helper/Utills';


export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }
  componentDidMount = () => {
      GoogleSignin.configure({
        "webClientId":"945147674348-4eadchsh384flckj3rc0fsq4ukbldibi.apps.googleusercontent.com"
      });  
    
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

  _loginButtonPressed = (values) => {
    console.log("loginButtonPress ",{values})
    this.props.navigation.navigate('Dashboard')
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
    const { additionalUserInfo: { isNewUser }, user: { displayName, email, emailVerified, phoneNumber, photoURL, uid } } = firebaseRes
    console.log("isNewUser 1", isNewUser)
    if (!isNewUser) {
      // console.log(`isNewUser 2 user/${uid}` )
      let val = await readDatabase(`user/${uid}`)
      let localToken = await getNotificationDeviceToken();
      console.log(`${val.token} == ${localToken}`)
      if (val.token != localToken) {
        writeDatabase(`user/${uid}/token`, localToken)
      }
      this.props.navigation.navigate('Dashboard')
    } else {
      alert("User not found please register first");
    }
      
      
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
    const { additionalUserInfo: { isNewUser }, user: { displayName, email, emailVerified, phoneNumber, photoURL, uid } } = firebaseRes
    console.log("isNewUser 1", isNewUser)
    if (!isNewUser) {
      // console.log(`isNewUser 2 user/${uid}` )
      let val = await readDatabase(`user/${uid}`)
      let localToken = await getNotificationDeviceToken();
      console.log(`${val.token} == ${localToken}`)
      if (val.token != localToken) {
        writeDatabase(`user/${uid}/token`, localToken)
      }
      this.props.navigation.navigate('Dashboard')
    } else {
      alert("User not found please register first");
    }
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
      <Field
        name= "username"
        placeholder={LocalizedStrings.Login.Username}
        containerView={styles.textInput}
        onChangeText={(text) => this.setState({ username: text })}
        component={TextField}
      />

    )
  }

  renderPasswordTextField = () => {
    return (
      <Field
        name= "password"
        placeholder={LocalizedStrings.Login.Password}
        containerView={styles.textInput}
        onChangeText={(text) => this.setState({ username: text })}
        component={TextField}
        secureTextEntry
      />
      
    )
  }

  renderLogInButton = () => {
    return (
      <CustomButton
        title={LocalizedStrings.Login.Login}
        btnStyle={styles.btnStyle}
        buttonAction={this.props.handleSubmit(this._loginButtonPressed)}
        textColor={'#030303'}
      />
    )
  }

  renderBottomView = () => {
    return (
      <View style={styles.bottomContainer}>
        <Text style={styles.loginWithSocialText}>{LocalizedStrings.Login.loginWithSocialText}</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TouchableOpacity onPress={this.onFacebookButtonPress} style={{ marginRight: 15 }}>
            <Image source={imgFb} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onGoogleSignIn}>
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
const LoginForm = reduxForm({
  form: "registerForm",
})(Login)
export default LoginForm
