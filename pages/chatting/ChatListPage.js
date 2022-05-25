import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import axios from 'axios'
// Components
import ChatCard from '../../components/chatting/ChatCard'

function ChatListPage({ navigation }) {
  //const [userInfo, setUserInfo] = useState([])
  const dummyData = [
    {
      nickName: '상도동',
      location: '상도동',
      chatMessage: [

        {
          time: '오전 11: 34',
          type: 'get',
          message: '사과 3~4개 정도 구매하고 싶어요~ 개당 800원 정도로 가능할까요?',
          image: require('../../assets/images/berry.png'),
        },
        {
          time: '오전 11: 35',
          type: 'get',
          message: '개당 800원 정도로 가능할까요?',
          image: require('../../assets/images/berry.png'),
        },
        {
          time: '오후 7: 34',
          type: 'send',
          message: '사과 3~4개 정도 구매하고 싶어요~ 개당 800원 정도로 가능할까요?',
        },
      ]
    }, {
      nickName: '대림동',
      location: '대림동',
      chatMessage: [
        {
          time: '오전 11: 34',
          type: 'get',
          message: '사과 3~4개 정도 구매하고 싶어요~',
          image: require('../../assets/images/berry.png'),
        },
        {
          time: '오전 11: 35',
          type: 'get',
          message: '개당 800원 정도로 가능할까요?',
          image: require('../../assets/images/berry.png'),
        },
        {
          time: '오후 7: 34',
          type: 'send',
          message: '사과 3~4개 정도 구매하고 싶어요~ 개당 800원 정도로 가능할까요?',
        },
      ]
    }
  ]

  // async function apiTest() {
  //   try {
  //     const response = await axios.get('http://10.0.2.2:3000/user/all'); // 에뮬레이터 IP주소
  //     const userData = response.data.result
  //     setUserInfo(userData)
  //   } catch (error) {
  //     return console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   apiTest();
  // }, [])

  return (
    <ScrollView style={styles.listView}>
      { dummyData.map((data, index) => (
        <ChatCard key={index} navigation={navigation} dummyData={data} />
      ))}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
})

export default ChatListPage

