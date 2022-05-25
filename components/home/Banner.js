import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import banner from '../../assets/images/banner.png'

function Banner (){ 
  return (
    <View>
      <Image source={banner} style={styles.banner}/>
    </View>
  )
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    width: '100%',
    height: 130,
  },
})

export default Banner


