import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import chatUser from '../../assets/images/chatUser.png'

function ChatCard({ navigation, dummyData }) {
  const { nickName, location, chatMessage } = dummyData;

  //chconsole.log(userData)
  //console.log(dummyData.chatMessage)

  return (
    <TouchableOpacity style={styles.chatCard} onPress={() => navigation.navigate('ChattingPage')}>
      <Image source={chatUser} style={styles.userImage} />
      <View style={styles.chatContent}>
        <View style={styles.user}>
          <Text style={styles.userName}>{nickName}</Text>
          <Text style={styles.userArea}>{location}</Text>
        </View>
        <Text numberOfLines={1} style={styles.chatMessage}>{chatMessage[0].message}</Text>
      </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#dcdcdc',
    padding: 20,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 70,
    marginRight: 15,
  },
  chatContent: {
    justifyContent: 'space-between',
    height: 45,
    width: '83%',
    overflow: 'hidden',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: '700',
    marginRight: 10,
  },
  userArea: {
    fontSize: 11,
    color: '#a1a1a1',
  },
  chatMessage: {
    color: '#343434',
  },

})

export default ChatCard
