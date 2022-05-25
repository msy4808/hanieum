import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import chatUser from '../../assets/images/chatUser.png'

function GetMessage() {
  //console.log(profileImg)
  return (
    <View style={styles.getView}>
      <View style={styles.getUser}>
        <Image source={chatUser} style={styles.userImage} />
        <View style={styles.getMessage}>
          <Text style={styles.chatText}>사과 3~4개 정도 구매하고 싶어요~</Text>
          <Text style={styles.chatText}>개당 800원 정도로 가능할까요?</Text>
        </View>
        <Text style={styles.chatTime}>오전 11: 34</Text>
      </View>
      <View style={styles.getUser}>
        <Image source={chatUser} style={styles.userImage} />
        <View style={styles.getMessage}>
          <Text style={styles.chatText}>개당 800원 정도로 가능할까요?</Text>
        </View>
        <Text style={styles.chatTime}>오전 11: 34</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  getView: {
    alignItems: 'flex-start',
    width: '73%',
  },
  getUser: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 13,
  },
  userImage: {
    width: 35,
    height: 35,
    borderRadius: 70,
    marginRight: 8,
  },
  getMessage: {
    backgroundColor: '#f2f2f2',
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    marginRight: 5,
  },
  chatText: {
    color: '#343434',
    fontSize: 14,
  },
  chatTime: {
    color: '#a1a1a1',
    fontSize: 12,
  },
})

export default GetMessage