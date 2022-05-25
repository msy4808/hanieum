import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function Keyword ({data}){ 
  return (
    <TouchableOpacity style={styles.recentlyBorder}>
      <Text style={styles.recentlyText}>{data}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  recentlyBorder: {
    borderWidth: 1,
    borderColor: '#a1a1a1',
    paddingTop: 8,
    paddingRight: 13,
    paddingBottom: 8,
    paddingLeft: 13,
    borderRadius: 20,
    marginRight: 7,
    marginBottom: 10,
  },
  recentlyText: {
    fontWeight: '700',
  },
})

export default Keyword