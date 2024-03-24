import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Colors } from '../config'

const Saperator = ({customStyle}) => {
  return (
    <View style={[styles.line, customStyle]} />
  )
}

export default memo(Saperator)

const styles = StyleSheet.create({
    line: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.lightBlack
    }
})