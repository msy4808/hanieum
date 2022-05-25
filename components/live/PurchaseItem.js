import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function PurchaseItem({item,list, i,navigation}){
  return(
    <TouchableOpacity style={styles.content} onPress={() => {navigation.navigate('PurchseDetailPage', {item:item, list:list});}}>
          <View style={styles.header}>
            <Text style={styles.headertext}>마이구미·상도동</Text>
            <Text style={styles.headertime}>방금전</Text>
          </View>
          <Text style={styles.desc} numberOfLines={1}>{item.content}</Text>
          <View style={styles.chat_area}>
            <Icon name='chatbubble-outline' size={16} style={styles.chat_img}></Icon>
          <Text style={styles.chat}>채팅 1</Text>
          </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  content: {
    borderBottomWidth: 1,
    borderColor: "#dcdcdc"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headertext: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
    color: '#808080'
  },
  headertime: {
    marginTop: 10,
    marginBottom: 20,
    color: '#808080',
    marginRight: 20
  },
  desc: {
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20
  },
  chat_area: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  chat_img: {
    transform: [{ rotate: '270deg'}],
    color: '#a1a1a1',
    alignSelf: 'center',
    marginLeft: 20
  },
  chat: {
    marginLeft: 10,
    color: '#a1a1a1',
    fontSize: 12
  }
})