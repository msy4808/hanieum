import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
// Components
import Line from '../../components/write/Line'
import CompleteButton from '../../components/write/CompleteButton'

import barcodeNomal from '../../assets/images/barcode_nomal.png'
import barcodeClick from '../../assets/images/barcode_click.png'
import checkNomal from '../../assets/images/choice_nomal.png'
import checkClick from '../../assets/images/choice_click.png'

function AuthWrittingPage({ navigation, route}) { //route 추가
  const [able, setAble] = useState(true)
  const [authCheck, setAuthCheck] = useState(true)
  const [barcodeCheck, setBarcodeCheck] = useState(false)
  const [billCheck, setBillCheck] = useState(false)

  console.log(route.params.imageList)
  useEffect(() => {
    navigation.setOptions({
      title: '인증하기',
      headerStyle: {
        height: 70,
        shadowColor: 'black',
        elevation: 5,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => (
        <CompleteButton navigation={navigation} able={able} route={route.params.boardData} image={route.params.imageList} />
      ),
    })
  }, [able])

  useEffect(() => {
    if (barcodeCheck === true && billCheck === true) {
      setAuthCheck(false)
      setAble(false)
    } else {
      console.log('인증을 완료하세요!')
    }
  })

  const handleBarcodeClick = () => { // 바코드 인증
    alert('바코드 인증이 완료 되었습니다.')
    setBarcodeCheck(true)
  }

  const handleBillClick = () => { // 영수증 인증
    alert('영수증 인증이 완료 되었습니다.')
    setBillCheck(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.authView}>
        <Text style={styles.authText}>인증안함</Text>
        <Image style={styles.authCheck} source={authCheck ? checkClick : checkNomal} />
      </View>
      <Line />
      <View style={styles.authView}>
        <Text style={styles.authText}>바코드 인증하기</Text>
        <TouchableOpacity onPress={handleBarcodeClick}>
          <Image style={styles.authBarcode} source={barcodeCheck ? barcodeClick : barcodeNomal} />
        </TouchableOpacity>
      </View>
      <Line />
      <View style={styles.authView}>
        <Text style={styles.authText}>영수증 인증하기</Text>
        <TouchableOpacity onPress={handleBillClick}>
          <Image style={styles.authBarcode} source={billCheck ? barcodeClick : barcodeNomal} />
        </TouchableOpacity>
      </View>
      <Line />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  authView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 25,
    height: 65,
  },
  authText: {
    fontSize: 15,
  },
  authCheck: {
    width: 23,
    height: 23,
    marginRight: 3,
  },
  authBarcode: {
    width: 30,
    height: 30,
  },
})

export default AuthWrittingPage

