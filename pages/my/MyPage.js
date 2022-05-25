import React, { useEffect, version } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {writePost, imagePost}from '../../requesthelper'


function MyPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: '마이 푸딩',
      headerStyle: {
        height: 70,
        shadowColor: 'black',
        elevation: 5,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  }
  , [])

  function test() {
    alert("테스트")
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.profilearea}>
          <Image style={styles.profileimage} source={require('../../assets/test.jpg')} />
          <View style={styles.profilecode}>
            <Text style={styles.profilelevel}>등급</Text>
            <Text style={styles.profilename}>닉네임</Text>
          </View>
          <View style={styles.profilebutton}>
          <Icon name="chevron-forward-outline" size={32} color={'#000000'} ></Icon>
          </View>
        </View>
        <View style={styles.sopping}>
          <TouchableOpacity onPress={() => { navigation.navigate('판매') }} style={styles.soppingarea}><Image style={styles.ico_img} source={require('../../assets/images/ico-cart.png')} /><Text>판매</Text></TouchableOpacity>
          <TouchableOpacity onPress={test} style={styles.soppingarea}><Image style={styles.ico_img} source={require('../../assets/images/ico-hand.png')} /><Text>요청</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('구매') }} style={styles.soppingarea}><Image style={styles.ico_img} source={require('../../assets/images/ico-card.png')} /><Text>구매</Text></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={test} style={styles.eventarea}>
          <View style={styles.textarea}>
            <Text style={styles.eventtext}>친구 초대 이벤트!</Text>
            <Text style={styles.eventtext}>친구 초대하고 기프티콘 받아가세요!</Text>
          </View>
          <Image style={styles.img} source={require('../../assets/images/ico-box.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={test} style={styles.menu}><Text style={styles.menutext}>공지사항</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('동네 인증하기') }} style={styles.menu}><Text style={styles.menutext}>위치 인증하기</Text></TouchableOpacity>
        <TouchableOpacity onPress={test} style={styles.menu}><Text style={styles.menutext}>푸쉬 알람 설정</Text></TouchableOpacity>
        <TouchableOpacity onPress={test} style={styles.menu}><Text style={styles.menutext}>이벤트</Text></TouchableOpacity>
        <TouchableOpacity onPress={test} style={styles.menu}><Text style={styles.menutext}>약관 및 정책</Text></TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  profilearea: {
    flexDirection: 'row',
  },
  profileimage: {
    height: 80,
    width: 80,
    borderRadius: 100,
    margin: 20,
    marginLeft: 40,
    resizeMode: 'stretch'
  },
  profilecode: {
    justifyContent: 'center'
  },
  profilelevel: {
    fontSize: 16
  },
  profilename: {
    fontSize: 24
  },
  profilebutton: {
    alignContent: 'center',
    marginLeft: 'auto',
    marginRight: 20,
    justifyContent: 'center'
  },
  sopping: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ico_img: {
    width: 29,
    height: 27
  },
  soppingarea: {
    height: 80,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#cdcdcd',
  },
  eventarea: {
    flex: 1.4,
    backgroundColor: '#ff7d7d',
    flexDirection: 'row'
  },
  textarea: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  eventtext: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  img: {
    width: 120,
    height: 70,
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    marginRight: 10
  },
  menu: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#cdcdcd',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  menutext: {
    fontSize: 18,
    color: '#808080',
    fontWeight: '700',
    marginLeft: 15
  }
})

export default MyPage

