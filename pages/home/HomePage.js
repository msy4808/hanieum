import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Button } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
// Components
import Banner from '../../components/home/Banner.js'
import Line from '../../components/home/Line.js'
import FloatButton from '../../components/home/FloatButton.js'
import SaleScrollView from '../../components/home/SaleScrollView.js'
import RequestScrollView from '../../components/home/RequestScrollView.js'
import RecommendScrollView from '../../components/home/RecommendScrollView.js'

function HomePage({ navigation }) {
  const [live, setLive] = useState('')
  const handleSale = () => {
    setLive('구매')
    { navigation.navigate('Live'); live }
  }
  const handlePurchase = () => {
    setLive('판매')
    { navigation.navigate('Live'); live }
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>대방동</Text>
        <View style={styles.topBarIcons}>
          <TouchableOpacity>
            <Fontisto name='bell' size={23} style={styles.topIcon}></Fontisto>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
            <Ionicons name='search' size={26} style={styles.topIcon}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner />
        <View style={styles.contents}>
          <TouchableOpacity style={styles.contentTop} onPress={handleSale}>
            <Text style={styles.contentText}>따끈따뜬한 판매 소식</Text>
            <AntDesign name='right' size={20} style={styles.rightButton}></AntDesign>
          </TouchableOpacity>
          <SaleScrollView />
        </View>
        <Line />
        <View style={styles.contents}>
          <TouchableOpacity style={styles.contentTop} onPress={handlePurchase}>
            <Text style={styles.contentText}>띵동! 식재료 요청이 왔어요</Text>
            <AntDesign name='right' size={20} style={styles.rightButton}></AntDesign>
          </TouchableOpacity>
          <RequestScrollView />
        </View>
        <Line />
        <View style={styles.contents}>
          <TouchableOpacity style={styles.contentTop}>
            <Text style={styles.contentText}>이런 상품은 어떠세요?</Text>
            <AntDesign name='right' size={20} style={styles.rightButton}></AntDesign>
          </TouchableOpacity>
          <RecommendScrollView />
        </View>
      </ScrollView>
      <FloatButton navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topBar: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginRight: 20,
  },
  topBarText: {
    fontWeight: '700',
    fontSize: 22,
  },
  topBarIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topIcon: {
    marginLeft: 20,
  },
  contents: {
    marginTop: 30,
    marginLeft: 25,
    marginBottom: 30,
  },
  contentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginRight: 25,
  },
  contentText: {
    fontWeight: '700',
    fontSize: 20,
  },
  rightButton: {
    color: '#808080',
  },
})

export default HomePage


