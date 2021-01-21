// Global imports
import React, { Component } from 'react'
import { TextInput, Text,View, Image, TouchableOpacity } from 'react-native';

// File imports
import COLORS from '../../Helper/Colors'
import FONTS from '../../Helper/Fonts'
import StyleConfig from '../../Helper/StyleConfig'

class CustomTextField extends Component {
  constructor(props) {
    super(props)
    const { input } = props
    this.hasValue = false
    if (input.value !== undefined && input.value.length > 0) {
        this.hasValue = true
    }
}

  render() {
    const {
      refProp, autoFocus, value, multiline, input, onChangeText, keyboardType, meta: { touched, error },
      viewStyle,
      placeholderColor,
      autoCapitalize,
      maxLength,
      inputStyle,
      rightImg,
      leftImg,
      isFocused,
      editable,
      containerView,
      leftimgStyle,
      onPressRight,
      onPressLeft,
      rightIconStyle,
      notes
    } = this.props;
    return (
      <View style={containerView ? containerView : styles.containerView}>
        <View style={[styles.view, viewStyle]}>
          {leftImg &&
            <TouchableOpacity
              onPress={onPressLeft}
              disabled={onPressLeft ? false : true}
              activeOpacity={0.7}
            >
              <Image resizeMode='contain' source={leftImg} style={[styles.leftIcon, leftimgStyle]} />
            </TouchableOpacity>
          }
          <TextInput
            ref={refProp ? refProp : (node) => this.input = node}
            value={typeof value === 'number' ? '' + value : value}
            onChangeText={onChangeText}
            multiline={multiline}
            autoFocus={autoFocus}
            selectTextOnFocus={true}
            maxLength={maxLength}
            keyboardType={keyboardType === "numeric" ? (Platform.OS === 'android' ? (Platform.Version < 21 ? 'phone-pad' : 'numeric') : 'numeric') : keyboardType}
            secureTextEntry={input.name === "password" || input.name === "signUpPassword" || input.name === "old_password" || input.name === "new_password" || input.name === "new_vpassword" ? true : false}
            editable={editable}
            selectionColor={COLORS.APP_PRIMARY}
            placeholderTextColor={placeholderColor ? placeholderColor : COLORS.LIGHT_GRAY_BLUE}
            autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
            {...input}
            {...this.props}
            style={[styles.textFieldStyle, inputStyle]}
          />
          {rightImg &&
            <TouchableOpacity
              onPress={onPressRight}
              disabled={onPressRight ? false : true}
              activeOpacity={0.7}
            >
              <Image resizeMode='contain' source={rightImg} style={[styles.rightIcon, rightIconStyle]} />
            </TouchableOpacity>
          }
        </View>
        {notes && <View style={styles.notesContainer}>
          <Text style={styles.notesText}>{notes}</Text>
        </View>}
      </View>
    )
  }
}

export default CustomTextField

const styles = {
  containerView: {
    // width: '100%',
  },
  textFieldStyle: {
    flex: 1,
    textAlign: 'left',
    fontFamily: FONTS.NERIS_REGULAR,
    fontSize: StyleConfig.countPixelRatio(16),
    padding: StyleConfig.countPixelRatio(12)
  },
  view: {
    backgroundColor: 'white',
    borderRadius: StyleConfig.countPixelRatio(30),
    borderWidth: 1.0,
    borderColor: COLORS.TEXT_FIELD_BORDER,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightIcon: {
    height: StyleConfig.countPixelRatio(18),
    width: StyleConfig.countPixelRatio(18),
    justifyContent: 'center',
    marginLeft: StyleConfig.countPixelRatio(5),
    marginRight: StyleConfig.countPixelRatio(8),
  },
  leftIcon: {
    height: StyleConfig.countPixelRatio(18),
    width: StyleConfig.countPixelRatio(18),
    justifyContent: 'center',
    marginLeft: StyleConfig.countPixelRatio(12),
    marginRight: StyleConfig.countPixelRatio(5),
  },
  notesContainer: {
    flexDirection: 'row-reverse',
    marginHorizontal: StyleConfig.countPixelRatio(16)
  },
  notesText: {
    textAlign: 'left',
    fontFamily: FONTS.NERIS_REGULAR,
    fontSize: StyleConfig.countPixelRatio(10),
  }
}