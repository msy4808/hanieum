import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import {imageGet} from '../../requesthelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Item({item,i, navigation}){
  const imageSourceGet = async() => {
    const email = await AsyncStorage.getItem('user_email');
    await imageGet(`http://192.168.219.178:3000/board/get?email=${email}`);
  }
  imageSourceGet();
  return(
  <TouchableOpacity onPress={() => {navigation.navigate('SalesDetailPage', {item:item});}}>
  <Image
    style={styles.image}
    // source={}
  />
  <Text style={styles.title}>{item.title}</Text>
  <Text style={styles.price}>{item.price}</Text>
</TouchableOpacity>
)
}

const styles = StyleSheet.create({
  image: {
    width: 157,
    height: 167,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
  }
})