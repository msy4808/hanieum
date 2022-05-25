import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

function Loading() {
  return (
    <View style={styles.continer}>
      <Image style={styles.img} source={require('../../assets/images/Loading.gif')}/>
    </View>
  )
}
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 200,
    height: 200
  }
})
export default Loading;