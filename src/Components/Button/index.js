// Global imports
import React, { Component } from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

// File imports
import COLORS from '../../Helper/Colors'
import FONTS from '../../Helper/Fonts'

class CustomButton extends Component {
  render() {
    const { title, btnStyle, buttonAction, leftImg, rightImg, rightImageStyle, leftImageStyle, textColor, textStyle } = this.props;
    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.btnStyle, btnStyle]}
        onPress={buttonAction}
        activeOpacity={0.8}
      >
        {leftImg && <Image resizeMode='contain' source={leftImg} style={[styles.leftIcon, leftImageStyle]} />}
        <Text style={[styles.text, textStyle, { color: textColor }]}>{title}</Text>
        {rightImg && <Image resizeMode='contain' source={rightImg} style={[styles.rightIcon, rightImageStyle]} />}
      </TouchableOpacity>
    )
  }
}

export default CustomButton

const styles = {
  btnStyle: {
    borderRadius: 25,
    height: 50,
    backgroundColor: COLORS.APP_PRIMARY_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    flexDirection: 'row',
  },
  text: {
    fontFamily: FONTS.VISBYROUND_MEDIUM,
    fontWeight: '700',
    fontSize: 20,
  },
  rightIcon: {
    height: 18,
    width: 18,
    justifyContent: 'center',
    marginLeft: 10,
  },
  leftIcon: {
    height: 18,
    width: 18,
    justifyContent: 'center',
    marginRight: 10,
  },
}