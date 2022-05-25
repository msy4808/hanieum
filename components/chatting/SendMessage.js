import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function SendMessage (){
  return (
    <View style={styles.send}>
      <View style={styles.sendView}>
        <View style={styles.sendUser}>
          <Text style={styles.chatTime}>오전 11: 34</Text>
          <View style={styles.sendMessage}>
            <Text style={styles.chatText}>사과 3~4개 정도 구매하고 싶어요~</Text>
            <Text style={styles.chatText}>개당 800원 정도로 가능할까요?</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  send: {
    alignItems: 'flex-end',
  },
  sendView: {
    alignItems: 'flex-end',
    width: '83%',
  },
  sendUser: {
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
  sendMessage: {
    backgroundColor: '#ffd1d1',
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
  },
  chatText: {
    color: '#343434',
    fontSize: 14,
  },
  chatTime: {
    color: '#a1a1a1',
    fontSize: 12,
    marginRight: 5,
  },
})

export default SendMessage