import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PurchseDetailPage({ navigation, route }) {
  const boardList = route.params.list;
  let previousData = boardList.filter(d => {
    if(d.id == route.params.item.id - 1){
     return d.title;
    }
  })
  let nextData = boardList.filter(d => {
    if(d.id == route.params.item.id + 1){
     return d.title;
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back-outline" size={32} style={styles.arrow} onPress={() => navigation.navigate('LivePage')}></Icon>
        <View style={styles.header_right}>
          <Icon name='share-social-outline' size={32} color={'#000000'} style={styles.share}></Icon>
          <Icon name="ellipsis-vertical" size={32} color='#000000' style={styles.menu}></Icon>
        </View>
      </View>
      <View style={styles.profile}>
        <Image
          source={require('../../assets/test.jpg')}
          style={styles.profile_img}
        />
        <View style={styles.profile_text}>
          <Text style={styles.nickname}>마이구미</Text>
          <Text style={styles.address_time}>상도동·방금전</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.content_text}>
          {route.params.item.content}
        </Text>
        <View style={styles.chat_area}>
          <Icon name='chatbubble-outline' size={12} style={styles.chat_img}></Icon>
          <Text style={styles.chat}>채팅 1</Text>
        </View>
      </View>
      <View>
        <View style={styles.back_list}>
          <Text style={styles.list_menu}>이전글</Text>
          <Text style={styles.list_text}>{previousData[0] == null ? '이전글이 없습니다 ' : previousData[0].title}</Text>
        </View>
        <View style={styles.next_list}>
          <Text style={styles.list_menu}>다음글</Text>
          <Text style={styles.list_text}>{nextData[0] == null ? '다음글이 없습니다' : nextData[0].title}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Button style={styles.button}>
          <Text style={styles.buttontext} onPress={() => { navigation.navigate('Chatting') }}>채팅하기</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    marginLeft: 20
  },
  header_right: {
    flexDirection: 'row',
    marginLeft: 'auto',
    padding: 10
  },
  share: {
    marginLeft: 'auto',
    marginRight: 10
  },
  menu: {
    marginLeft: 'auto'
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc'
  },
  profile_img: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf: 'center',
    marginLeft: 20
  },
  profile_text: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  nickname: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  address_time: {
    fontSize: 12,
    color: '#7e7e7e'
  },
  content: {
    flex: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    padding: 20
  },
  content_text: {
    fontSize: 18,
    color: '#343434',
    lineHeight: 30
  },
  chat_area: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  chat_img: {
    transform: [{ rotate: '270deg' }],
    color: '#a1a1a1',
    alignSelf: 'center',
  },
  chat: {
    marginLeft: 14,
    color: '#a1a1a1',
  },
  list_menu: {
    color: '#7e7e7e',
    fontSize: 16,
    margin: 10,
    marginLeft: 30,
    textAlign: 'center'
  },
  back_list: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc'
  },
  next_list: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc'
  },
  list_text: {
    fontSize: 16,
    color: '#343434',
    margin: 10,
    textAlign: 'center'
  },
  button: {
    width: '35%',
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#000',
    backgroundColor: '#ff7d7d',
    alignSelf: 'flex-end',
    marginRight: 30,
    marginTop: 10
  },
  buttontext: {
    color: '#fff',
    fontSize: 18
  }
});
