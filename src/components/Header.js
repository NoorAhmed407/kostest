import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { Colors, Icons, Metrix } from '../config'
import { fonts } from '../config/Constants'
import Images from '../config/Images'

const Header = () => {
  return (
    <View style={styles.headerContainer}> 
        <TouchableOpacity activeOpacity={0.7} style={styles.backBtnContainer}>
                <Icons.AntDesign name={'left'} color={Colors.white} size={Metrix.customFontSize(18)}  />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Media Management</Text>
            <Text style={styles.desc}>Draft campaign</Text>
        </View>

        <TouchableOpacity activeOpacity={0.7}>
            <Image source={Images.profile} resizeMode={'contain'} style={styles.image} />
        </TouchableOpacity>
    </View>
  )
}

export default memo(Header)

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: Metrix.VerticalSize(10)
    },
    backBtnContainer: {
        width: Metrix.VerticalSize(50),
        height: Metrix.VerticalSize(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.lightBlack
    },
    title: {
        color: Colors.white,
        fontFamily: fonts.Bold,
        fontSize: Metrix.customFontSize(16)
    },
    desc: {
        color: Colors.white,
        fontFamily: fonts.Light,
        fontSize: Metrix.customFontSize(14)
    },
    image: {
        width: Metrix.VerticalSize(60),
        height: Metrix.VerticalSize(60),
    }
})