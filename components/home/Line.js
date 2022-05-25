import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Line (){ 
  return (
    <View >
      <View style={styles.line}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderColor: '#e9e9e9',
  },
})

export default Line


