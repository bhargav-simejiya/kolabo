// Global imports
import React, { Component } from 'react'
import { Header } from 'react-native-elements'

// File imports
import { headerMarginTop } from '@Utils/Constants'
import FONTS from '@Utils/Fonts'
import COLORS from '@Utils/Colors'

class CustomHeader extends Component {

  render() {
    const { bgColor, centerComponent, rightComponent, leftComponent, containerStyle } = this.props;

    return (
      <Header
        containerStyle={[styles.header, { backgroundColor: bgColor ? bgColor : COLORS.WHITE, }, containerStyle]}
        rightComponent={rightComponent && rightComponent}
        leftComponent={leftComponent && leftComponent}
        centerComponent={centerComponent && centerComponent}
      />
    )
  }
}

export default CustomHeader

const styles = {
  header: {
    marginTop: headerMarginTop,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    elevation: 5,
  }
}