import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import facebookLogo from '../../assets/images/facebookLogo.png'
import kakaoLogo from '../../assets/images/kakaoLogo.png'
import naverLogo from '../../assets/images/naverLogo.png'
import { NaverLogin, getProfile } from '@react-native-seoul/naver-login'
import { LoginManager, AccessToken, Profile } from 'react-native-fbsdk-next'
import { login as KakaoLogin, getProfile as getKakaoProfile } from '@react-native-seoul/kakao-login'

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

// Naver Key
const androidKeys = {
  kConsumerKey: 'NLt4tFnXHSXPVILZlppL',
  kConsumerSecret: 'PBbcYv57G7',
  kServiceAppName: 'Fooding'
};

function LoginPage({ navigation }) {

  // Naver Login
  const naverLogin = (props) => {
    NaverLogin.login(props, (error, token) => {
      getNaverProfile(token)
    })
  }

  const getNaverProfile = async (token) => {
    const profileResult = await getProfile(token.accessToken);
    if (profileResult.resultcode === "024") {
      console.log("로그인 실패", profileResult.message);
      return;
    }
    console.log("profileResult", profileResult);
    storeToken(profileResult.response.email, 'Naver')
  };

  // Facebook Login
  const facebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then((result) => {
        AccessToken.getCurrentAccessToken()
          .then((token) => {
            // email 가져오기
            fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,friends&access_token=' + token.accessToken)
              .then((response) => {
                response.json().then((json) => {
                  const email = json.email
                  storeToken(email, 'Facebook')
                })
              })
              .catch((error) => {
                console.log('ERROR FACEBOOK: ' + error)
              })
          })
      })
      .catch((error) => {
        alert('Login Failed: ' + error)
      })
  }

  // Kakao Login
  const kakaoLogin = () => {
    KakaoLogin()
      .then((token) => {
        userKakaoProfiles(token)
      })
      .catch((err) => {
        alert('Login Failed: ' + err.code + err.message)
      })
  }

  const userKakaoProfiles = async (token) => {
    try {
      const profile = await getKakaoProfile();
      storeToken(profile.email, 'Kakao')
    } catch (error) {
      console.log(error)
    }
  };

  const storeToken = async (email, loginType) => {
    // try {
      console.log(email)
      console.log(loginType)
      navigation.navigate('Location', {email: email, loginType: loginType})

      // const response = await axios.post('http://192.168.219.178:3000/user/login', {
      //   email,
      //   loginType,
      // })

      // console.log(response)

      // if (response) {
      //   console.log(response)
      //   AsyncStorage.setItem('access_Token', response.data.accessToken)
      //   AsyncStorage.setItem('user_email', email) //AsyncStorage email 추가
      //   if (response.data.address !== '') {
      //     navigation.navigate('Location', {email: email, loginType: loginType}) //위치인증 페이지로 토큰을 넘기면 경고가 뜸...
      //   } else {
      //     navigation.navigate('TabNavigation')
      //   }
      // }

    //   console.log(AsyncStorage.getItem('access_Token', (err, result) => {
    //     console.log(result)
    //     console.log(err)
    //   }))

    //   if (response.err) {
    //     console.log(response.err)
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }



  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topText}>
          <Text style={styles.topTitle}>Fooding</Text>
          <View style={styles.topLine}></View>
          <Text style={styles.topSubTitle}>어쩌면 가까운 곳에,</Text>
          <Text style={styles.topSubTitle}>당신이 필요한 식재료</Text>
        </View>
        <View style={styles.socialLogin}>
          <TouchableOpacity style={styles.naverLogin} onPress={() => naverLogin(androidKeys)}>
            <Image source={naverLogo} style={styles.naverLoginImage} />
            <Text style={styles.naverLoginText}>네이버 로그인</Text>
            <View style={styles.naverView}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookLogin} onPress={() => facebookLogin()}>
            <Image source={facebookLogo} style={styles.facebookLoginImage} />
            <Text style={styles.facebookLoginText}>페이스북 로그인</Text>
            <View style={styles.facebookView}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.kakaoLogin} onPress={() => kakaoLogin()}>
            <Image source={kakaoLogo} style={styles.kakaoLoginImage} />
            <Text style={styles.kakaoLoginText}>카카오 로그인</Text>
            <View style={styles.kakaoView}></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: '100%',
  },
  content: {
    width: '86%',
    height: '100%',
    justifyContent: 'space-between',
  },
  topText: {
    marginTop: '40%',
    alignItems: 'center',
  },
  topTitle: {
    fontSize: 35,
    fontWeight: '700',
    color: '#ff3131',
    marginBottom: '40%',
    fontFamily: 'NotoSansKR-Bold',
  },
  topLine: {
    height: 2,
    width: 40,
    backgroundColor: '#ff3131',
    marginBottom: 25,
  },
  topSubTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#7e7e7e',
    marginBottom: 5,
  },
  socialLogin: {
    width: '100%',
    marginBottom: '10%',
  },
  naverLogin: {
    backgroundColor: '#00c300',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    marginBottom: 15,
  },
  naverLoginImage: {
    height: 40,
    width: 40,
    marginLeft: 5,
  },
  naverLoginText: {
    color: '#ffffff',
    fontWeight: '700',
    justifyContent: 'center',
  },
  naverView: {
    marginRight: '3%',
    borderWidth: 1,
  },
  facebookLogin: {
    backgroundColor: '#475993',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    marginBottom: 15,
  },
  facebookLoginImage: {
    height: 20,
    width: 20,
    marginLeft: 13,
  },
  facebookLoginText: {
    color: '#ffffff',
    fontWeight: '700',
    justifyContent: 'center',
  },
  kakaoLogin: {
    backgroundColor: '#ffe600',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  kakaoLoginImage: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  kakaoLoginText: {
    color: '#381e1e',
    fontWeight: '700',
    justifyContent: 'center',
  },
  kakaoView: {
    marginRight: '2%',
  },
})

export default LoginPage
