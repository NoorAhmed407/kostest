import { Image, StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import Images from '../config/Images'
import { Metrix } from '../config'

const Stepper = () => {
  return (
    <View style={{width: '100%', marginTop: Metrix.VerticalSize(30)}}>
        <Image source={Images.stepper} resizeMode={'stretch'} style={styles.StepperStyle} />
    </View>
  )
}

export default memo(Stepper);

const styles = StyleSheet.create({
    StepperStyle: {
        width: '100%',
        height: Metrix.VerticalSize(55)
    }
})