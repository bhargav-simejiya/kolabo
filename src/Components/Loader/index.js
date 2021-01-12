import React, { Component } from 'react'
import AnimatedLoader from "react-native-animated-loader"
import { LOTTIE_ANIMATION_FILE } from '../../Helper/Constants'

class Loader extends Component {
  render() {
    const { isLoading } = this.props
    return (
      <AnimatedLoader
        visible={isLoading}
        source={LOTTIE_ANIMATION_FILE}
        animationStyle={styles.lottie}
        speed={1}
      />
    )
  }
}

const styles = {
  lottie: {
    width: 150,
    height: 150
  }
}

export default Loader
