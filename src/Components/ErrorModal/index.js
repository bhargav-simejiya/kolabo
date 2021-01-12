import React, { Component } from 'react'
import { Dimensions, View, Text, Modal, TouchableOpacity } from 'react-native'

import COLORS from '../../Helper/Colors'
import Fonts from '../../Helper/Fonts'

class ErrorModal extends Component {
  render() {
    const {
      message, visible, handleBack
    } = this.props
    return (
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        supportedOrientations={['portrait', 'landscape']}
        onRequestClose={() => handleBack()}
      >
        <View style={styles.modelStyle1}>
          <View style={styles.modelStyle2}>
            <Text style={styles.msgText}
            >
              {message}
            </Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => handleBack()}
              ><Text style={styles.btnTitleStyle}>Okay</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const WIDTH = Dimensions.get('window').width - 40
const styles = {
  msgText: {
    fontSize: 18,
    color: COLORS.COLOR_BLACKSHADE,
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_LIGHT
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  btnTitleStyle: {
    color: COLORS.BLACK,
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 16
  },
  btnStyle: {
    shadowOffset: { width: 2, height: 2, },
    borderRadius: 20,
    backgroundColor: COLORS.APP_PRIMARY,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  modelStyle1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080'
  },
  modelStyle2: {
    width: WIDTH,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 15
  },
};

export default ErrorModal
