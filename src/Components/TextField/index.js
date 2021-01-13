// Global imports
import React, { Component } from 'react'
import { TextInput, View, Image, TouchableOpacity } from 'react-native';

// File imports
import COLORS from '../../Helper/Colors'
import FONTS from '../../Helper/Fonts'

class CustomTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // style: {},
    };
  }

  render() {
    const {
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
      rightIconStyle
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
            editable={editable}
            selectionColor={COLORS.APP_PRIMARY}
            placeholderTextColor={placeholderColor ? placeholderColor : COLORS.LIGHT_GRAY_BLUE}
            autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
            // maxLength={maxLength ? maxLength : 48}
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
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 16,
    padding: 12
  },
  view: {
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1.0,
    borderColor: COLORS.TEXT_FIELD_BORDER,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightIcon: {
    height: 18,
    width: 18,
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 8,
  },
  leftIcon: {
    height: 18,
    width: 18,
    justifyContent: 'center',
    marginLeft: 12,
    marginRight: 5,
  },
}