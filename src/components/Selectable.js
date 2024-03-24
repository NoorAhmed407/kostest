import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Metrix } from '../config'
import { fonts } from '../config/Constants'

const Selectable = ({selected=false, value, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.container, {borderWidth: selected ? 0 : 0.9, backgroundColor: selected ? Colors.primary :  Colors.black}]}>
      <Text style={styles.textStyle}>{value}</Text>
    </TouchableOpacity>
  )
}

export default Selectable

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrix.HorizontalSize(15),
    paddingVertical: Metrix.VerticalSize(15),
    marginHorizontal: Metrix.HorizontalSize(7),
    marginVertical: Metrix.VerticalSize(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.borderColor,
    borderRadius: 24,
  },
  textStyle: {
    color: Colors.white,
    fontFamily: fonts.Medium,
    fontSize: Metrix.customFontSize(16),
  },
});