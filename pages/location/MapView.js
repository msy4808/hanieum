import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Mapview, {Marker} from 'react-native-maps';
import Button from 'apsl-react-native-button';
import Loading from '../Loading/Loading';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MapView({navigation, route}) {
  //console.log(route)
  // const onAddUser = async ({ location }) => {
  //alert('위치인증이 완료되었습니다')
  //유저 생성
  // console.log(route)
  // console.log(location)
  // const token = await AsyncStorage.getItem('access_Token');
  // console.log(`토큰은 ${JSON.stringify(token)}`)
  // const createUser = await axios.post('http://192.168.219.178:3000/user/create', {
  //   email: route.params.email,
  //   address: route.params.location.address,
  //   token,
  //   loginType: route.params.loginType
  // })
  //console.log(createUser)
  //   navigation.navigate('ProfilePage', { route: route })
  // }

  const comLocation = async () => {
    const response = await axios.post(
      'http://192.168.219.178:3000/user/login',
      {
        email: route.params.email,
        address: route.params.location.address,
      },
    );
    if (response) {
      // console.log(`Login :  ${JSON.stringify(response)}`);
      AsyncStorage.setItem('user_email', route.params.email); //AsyncStorage email 추가
      navigation.navigate('ProfilePage', {route: route});
    } else {
      navigation.navigate('TabNavigation');
    }
  };

  const [ready, setReady] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setReady(false);
    }, 2000);
  });
  const location = {
    //넘겨받은 주소정보를 저장
    latitude: route.params.location.latitude,
    longitude: route.params.location.longitude,
    address: route.params.location.address,
  };

  return ready ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <Mapview
        style={styles.map} //넘겨받은 주소를 바탕으로 지도에 표시
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </Mapview>
      <View style={styles.content}>
        <Text style={styles.contentText}>{location.address}</Text>
        <Button
          style={styles.button}
          onPress={() => comLocation()}>
          <Text style={styles.buttonText}>위치인증완료</Text>
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 5,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  button: {
    width: '80%',
    marginLeft: '10%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 0,
    borderColor: '#000',
    marginBottom: 10,
    backgroundColor: '#ff3131',
    // ios 그림자 세팅
    // shadowOpacity: 0.8,
    // shadowColor: '#000',
    // shadowRadius: 3.84,
    // shadowOffset: {
    //   width: 2,
    //   height: 2
    // },
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
});
export default MapView;
