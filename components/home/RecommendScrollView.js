import React from 'react'
import { StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native'

function RecommendScrollView (){ 
  const recommendProduct = [
    {
      title: '베리류',
      price: 2000,
      image: require('../../assets/images/berry.png'),
    },
    {
      title: '계란 한 판',
      price: 5000,
      image: require('../../assets/images/egg.png'),
    },
    {
      title: '계란 한 판',
      price: 5000,
      image: require('../../assets/images/egg.png'),
    }
  ]
  
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {recommendProduct.map((recommendItem, index) => [
        <TouchableOpacity style={styles.product} key={index}>
          <Image source={recommendItem.image} style={styles.productImage} />
          <Text style={styles.productTitle}>{recommendItem.title}</Text>
          <Text style={styles.productPrice}>{recommendItem.price}원</Text>
        </TouchableOpacity>
      ])}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  product: {
    marginRight: 15,
  },
  productImage: {
    height: 150,
    width: 140,
  },
  productTitle: {
    marginTop: 10,
    fontSize: 15,
  },
  productPrice: {
    fontWeight: '700',
  },
})

export default RecommendScrollView


