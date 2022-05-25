import React from 'react'
import { StyleSheet, View, PermissionsAndroid, Platform, Text, Image } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import Geocoder from "react-native-geocoding"
import Button from 'apsl-react-native-button'

function Location({ navigation, route }) {
  //console.log(route)
  let addressComponent
  const location = {
    latitude: 0,
    longitude: 0,
    address: ''
  }
  function AddressLoad(lat, lon) { //위도 경도를 주소로 바꿔주는 코드
    Geocoder.init('AIzaSyD2SaQr0yZmq1OKf0yx-TtnWPCtqUJCiGA', { language: 'ko' })
    Geocoder.from(lat, lon).then(json => {
      addressComponent = json.results[3].formatted_address.substring(5);
      location.address = addressComponent
      console.log(location);
    })
  }
  const requestPermission = async () => { //위치권한 받아오는 코드
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // navigation.navigate('MapView', { location: location, email: route.params.email }) //받아온 사용자의 주소정보를 네비게이터를 이용해 넘겨줌
          Geolocation.getCurrentPosition((position) => { //사용자의 위치를 위도와 경도로 받아옴
            location.latitude = position.coords.latitude;
            location.longitude = position.coords.longitude;
            AddressLoad(location.latitude, location.longitude)
            console.log(location)
            navigation.navigate('MapView', { location: location, email: route.params.email, loginType: route.params.loginType }) //받아온 사용자의 주소정보를 네비게이터를 이용해 넘겨줌
          }, (error) => {
            console.log(error)
          })
        } else {
          console.log("실패");
        }
      }
    } catch (err) {
      console.warn(err);
    }
  }
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/map.png')} style={styles.img_map} />
      <Text style={styles.text}>어쩌면 가까운 곳에,{'\n'}
        당신이 필요한 식재료
      </Text>
      <Button onPress={requestPermission} style={styles.button}>
        <Text style={styles.buttontext}>
          위치 인증하기
          </Text>
      </Button>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff'
  },
  img_map: {
    width: 298,
    height: 177,
    marginBottom: 60
  },
  text: {
    fontSize: 26,
    color: '#7e7e7e',
    fontWeight: 'bold',
    marginBottom: 120,
    textAlign: 'center'
  },
  button: {
    width: '80%',
    marginLeft: '10%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 0,
    borderColor: '#000',
    marginBottom: 30,
    backgroundColor: '#ff3131',
    // ios 그림자 세팅
    // shadowOpacity: 0.8,
    // shadowColor: '#000',
    // shadowRadius: 3.84,
    // shadowOffset: {
    //   width: 2,
    //   height: 2
    // },
    elevation: 5
  },
  buttontext: {
    fontSize: 17,
    color: '#ffffff',
    fontWeight: '700'
  },
})

export default Location;