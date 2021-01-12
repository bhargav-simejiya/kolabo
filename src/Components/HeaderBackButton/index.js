// Global imports
import React, { Component } from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

// File imports
import imgBack from '../../../assets/images/back.png'
import imgMenu from '../../../assets/images/menu.png'

class HeaderBackButton extends Component {
  render() {
    const { buttonAction, btnStyle, isMenu, tintColor } = this.props;
    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.btnStyle, btnStyle]}
        onPress={buttonAction}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Image source={isMenu ? imgMenu : imgBack} style={{ height: 20, width: 20, marginLeft: isMenu ? 0 : -4, tintColor: tintColor && tintColor }} resizeMode='contain' />
      </TouchableOpacity>
    )
  }
}

export default HeaderBackButton

const styles = {
  btnStyle: {
    marginLeft: 16,
    backgroundColor: '#D8D8D840',
    borderRadius: 30,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  }
}