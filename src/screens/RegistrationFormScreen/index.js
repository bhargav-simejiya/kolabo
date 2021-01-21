// Global Imports
import React, { Component } from 'react'
import {
  Text, View, Image,ScrollView,
  TouchableOpacity, SafeAreaView, StatusBar
} from 'react-native'
import { Field, reduxForm } from "redux-form"
// File Imports
import styles from './styles'
import COLORS from '../../Helper/Colors'
import LocalizedStrings from '../../Helper/LocalizedStrings'

// Component Imports
import TextField from '@TextField'
import CustomButton from '@Button'
import HeaderBackButton from '@HeaderBackButton'
import CustomHeader from '@Header'
import imgBG from '../../../assets/images/bgRegister.png'
import imgGoogle from '../../../assets/images/google.png'
import imgInstagram from '../../../assets/images/instagram.png'
import imgTwitter from '../../../assets/images/twitter.png'
let formData = [
  {
    "name": "business_name",
    "type": "text",
    "placeholder": 'Business Name',
    "containerView": styles.textInput,
    "notes": "(Compulsory)",
    "selectTextOnFocus": true
  },
  {
    "name": "localBusinessRegistrationNo",
    "type": "text",
    "placeholder": 'Local Business Registration No',
    "containerView": styles.textInput,
    "notes": "(Hidden from Public)",
    "selectTextOnFocus": true,
    "keyboardType": "number"
  },
  {
    "name": "yearOfIncoporation",
    "type": "text",
    "placeholder": 'Year of Incoporation',
    "containerView": styles.textInput,
    "notes": "(Hidden from the public, not compulsory)",
    "selectTextOnFocus": true,
    "keyboardType": "number"
  },
  {
    "name": "businessWebsite",
    "type": "text",
    "placeholder": "Business Website",
    "containerView": styles.textInput,
    "notes": "(Not compulsory)",
    "selectTextOnFocus": true,
    "keyboardType": "email-address"
  },
  {
    "name": "dateOfBirth",
    "type": "text",
    "placeholder": "Date of Birth",
    "containerView": styles.textInput,
    "notes": "Compulsory for Compliance (Hidden from the public)",
    "selectTextOnFocus": true
  },
  {
    "name": "mobileNumber",
    "type": "text",
    "placeholder": "Mobile Number",
    "containerView": styles.textInput,
    "notes": "(Compulsory) (Hidden from the public)",
    "selectTextOnFocus": true,
    "keyboardType": "number"
  },
  {
    "name": "emailAddress",
    "type": "text",
    "placeholder": "Email address",
    "containerView": styles.textInput,
    "notes": "(Compulsory) (Hidden from non paying subscribers)",
    "selectTextOnFocus": true,
    "keyboardType": "email-address"
  },
  {
    "name": "city",
    "type": "text",
    "placeholder": "City",
    "containerView": styles.textInput,
    "notes": "(Compulsory)",
    "selectTextOnFocus": true
  },
  {
    "name": "country",
    "type": "text",
    "placeholder": "Country",
    "containerView": styles.textInput,
    "notes": "(Compulsory)",
    "selectTextOnFocus": true,
  },
  {
    "name": "socialMedia",
    "type": "text",
    "placeholder": "Social Media",
    "containerView": styles.textInput,
    "selectTextOnFocus": true,
  },
  {
    "name": "growthTarget",
    "type": "text",
    "placeholder": "Growth Target",
    "containerView": styles.textInput,
    "notes": "(Maybe, I need to have 2X or 4X my business turnover)\n(Compulsory) (Hidden from the public)",
    "selectTextOnFocus": true
  },
  {
    "name": "myMajorBusinessChallenge",
    "type": "text",
    "placeholder": "My major business Challenge",
    "containerView": styles.textInput,
    "selectTextOnFocus": true
  },
  {
    "name": "others",
    "type": "text",
    "placeholder": "Others",
    "containerView": styles.textInput,
    "selectTextOnFocus": true
  },
]
export class RegistrationFormScreen extends Component {
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

  _registerButtonPressed = (values) => {
    alert(JSON.stringify(values))

  }

  _loginButtonPressed = () => {
    this.props.navigation.navigate('Login')
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
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <SafeAreaView style={styles.container}>
          <CustomHeader
            leftComponent={() => <HeaderBackButton buttonAction={this._onPressBack} btnStyle={styles.backButton} tintColor={COLORS.APP_PRIMARY} />}
            centerComponent={() => <View style={{ flex: 1, justifyContent: 'center' }}><Text style={styles.headerText}>Registration Details</Text></View>}
          />
          <ScrollView>
            <View>
              {formData.map((item,index)=> this.renderContent(item))}
            </View>
            {this.renderRegisterButton()}
            </ScrollView>
        </SafeAreaView>
      </View>
    )
  }

  renderContent = (props) => {
    return (
      <Field
        component={TextField}
        {...props}
      />

    )
  }

  renderRegisterButton = () => {
    const { handleSubmit } = this.props;
    return (
      <CustomButton
        title={"Submit"}
        btnStyle={styles.btnStyle}
        buttonAction={ handleSubmit(this._registerButtonPressed)}
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
        <TouchableOpacity>
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
const RegistrationFormScreenForm = reduxForm({
  form: "registerForm",
})(RegistrationFormScreen)
export default RegistrationFormScreenForm
