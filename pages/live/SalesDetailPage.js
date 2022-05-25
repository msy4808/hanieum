import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, MaskedViewBase } from 'react-native';
import Button from 'apsl-react-native-button'
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/Ionicons';

function DetailPage({ navigation, route }) {
  const images = [ //현재 서버에서 이미지를 가져오기가 힘들어서 임의의 이미지로 테스트
    require('../../assets/images/berry.png'),
    require('../../assets/images/egg.png'),
    require('../../assets/images/onion.jpg'),
    require('../../assets/images/potatoe.jpg')

  ]
  // useEffect(() => {
  //   navigation.setOptions({
  //     title: 'DetailPage',
  //     headerStyle: {
  //       height: 70,
  //       shadowColor: 'black',
  //       elevation: 5,
  //     },
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  //   })
  // }, [])

  return (
    <View style={styles.container}>
      {console.log(route)}
      <View style={styles.header}>
        <Icon name="arrow-back-outline" size={32} style={styles.arrow} onPress={() => navigation.navigate('LivePage')}></Icon>
        <View style={styles.header_right}>
          <Icon name='share-social-outline' size={32} color={'#ffffff'} style={styles.share}></Icon>
          <Icon name="ellipsis-vertical" size={32} color='#ffffff' style={styles.menu}></Icon>
        </View>
      </View>
      <View style={styles.top}>
        <View style={styles.header}>
          <Icon name="arrow-back-outline" size={32} style={styles.arrow} onPress={() => navigation.navigate('LivePage')}></Icon>
          <View style={styles.header_right}>
            <Icon name='share-social-outline' size={32} color={'#ffffff'} style={styles.share}></Icon>
            <Icon name="ellipsis-vertical" size={32} color='#ffffff' style={styles.menu}></Icon>
          </View>
        </View>
        <SliderBox
         images={images}
         resizeMode={'cover'}
         resizeMethod={'auto'} 
         sliderBoxHeight={400} 
         circleLoop={true} 
         paginationBoxVerticalPadding={20}
         activeOpacity={1}
         autoplay={true} //이미지 자동넘김 한번 넣어봤습니다
         dotColor="#ffffff"
         inactiveDotColor="#eeeeee"
         dotStyle={{
           width: 15,
           height: 15,
           borderRadius: 20,
           opacity: 0.5
         }}
         />
      </View>
      <View style={styles.top}>
        <View style={styles.profile}>
          <Image source={require('../../assets/test.jpg')} style={styles.profile_img} />
          <View style={styles.textarea}>
            <Text style={styles.nickname}>마이구미</Text>
            <Text style={styles.address}>영등포구 대림동</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.titie}>
            {route.params.item.title}
          </Text>
          <Text style={styles.cate_time}>
            {route.params.item.category}·방금전
          </Text>
          <Text style={styles.desc}>
            {route.params.item.content}
          </Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.pricetext}>{route.params.item.price}원</Text>
          <Button style={styles.button}>
            <Text style={styles.buttontext} onPress={() => { navigation.navigate('Chatting') }}>채팅하기</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 70,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  arrow: {
    marginLeft: 20,
    color: '#ffffff',
  },
  header_right: {
    flexDirection: 'row',
    padding: 10,
  },
  share: {
    marginLeft: 'auto',
    marginRight: 10
  },
  menu: {
    marginLeft: 'auto'
  },
  top: {
    flex: 1
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
    // ios 그림자 세팅
    // shadowOpacity: 0.8,
    // shadowColor: '#000',
    // shadowRadius: 3.84,
    // shadowOffset: {
    //   width: 2,
    //   height: 2
    // },
    elevation: 1
  },
  profile_img: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf: 'center'
  },
  textarea: {
    justifyContent: 'center',
    marginLeft: 10
  },
  nickname: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  address: {
    color: '#7e7e7e'
  },
  content: {
    flex: 4,
    padding: 30
  },
  titie: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  cate_time: {
    fontSize: 12,
    alignSelf: 'flex-end',
    color: '#7e7e7e'
  },
  desc: {
    fontSize: 18,
    lineHeight: 25
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    // ios 그림자 세팅
    // shadowOpacity: 0.8,
    // shadowColor: '#000',
    // shadowRadius: 3.84,
    // shadowOffset: {
    //   width: 2,
    //   height: 2
    // },
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  button: {
    width: '35%',
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#000',
    backgroundColor: '#ff7d7d',
    alignContent: 'center',
  },
  pricetext: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20
  },
  buttontext: {
    color: '#fff',
    fontSize: 18
  }
});
export default DetailPage;
