import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'

function RequestScrollView (){ 
  const requestProduct = [
    {
      title: '사과',
      price: 3000,
      image: require('../../assets/images/berry.png'),
    },
    {
      title: '팽이버섯',
      price: 6000,
      image: require('../../assets/images/egg.png'),
    },
    {
      title: '고구마',
      price: 9000,
      image: require('../../assets/images/egg.png'),
    },
    {
      title: '사과',
      price: 3000,
      image: require('../../assets/images/berry.png'),
    },
    {
      title: '팽이버섯',
      price: 6000,
      image: require('../../assets/images/egg.png'),
    },
    {
      title: '고구마',
      price: 9000,
      image: require('../../assets/images/egg.png'),
    }
  ]
  
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {requestProduct.map((requestItem, index) => [
        <View key={index}>
          <TouchableOpacity style={styles.requestView}>
            <Text style={styles.requestTitle}>{requestItem.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.requestView}>
            <Text style={styles.requestTitle}>{requestItem.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.requestView}>
            <Text style={styles.requestTitle}>{requestItem.title}</Text>
          </TouchableOpacity>
        </View>
      ])}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  requestRow: {
    flexDirection: 'row',
  },
  requestView: {
    marginBottom: 10,
    marginRight: 7,
  },
  requestTitle: {
    backgroundColor: '#c4c4c4',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 15, //20에서 15로 줄임
    padding: 8,
    borderRadius: 10,
  },
})

export default RequestScrollView


