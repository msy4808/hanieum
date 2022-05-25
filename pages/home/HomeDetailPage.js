import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function HomeDetailPage ({navigation}){
  return (
    <View>
      <Text style={styles.text}>HomeDetailPage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontWeight: '700',
  },
})

export default HomeDetailPage

