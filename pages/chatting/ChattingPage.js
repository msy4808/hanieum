import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
// Components
import GetMessage from '../../components/chatting/GetMessage'
import SendMessage from '../../components/chatting/SendMessage'
import MaterialMenu from '../../components/chatting/MaterialMenu'
import ImageSelectModal from '../../components/chatting/ImageSelectModal'

function ChattingPage({ navigation, route }) {
  //const { name, address, profileImg } = route.params.userData;
  const [imageSource, setImageSource] = useState([])
  const [toggleModal, setToggleModal] = useState(false)

  useEffect(() => {
    navigation.setOptions({
      title: '상도동',
      headerStyle: {
        height: 70,
        shadowColor: 'black',
        elevation: 5,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => (
        <MaterialMenu />
      ),
    })
  }, [])

  const handleToggleModal = () => { // 모달 활성화 여부
    setToggleModal(!toggleModal)
  }

  const handleCamera = () => {
    launchCamera({
      saveToPhotos: true,
    }, response => {
      if (response.didCancel) { // didCancel: 카메라로 사진 선택 취소
        console.log(response.didCancel)
      } else {
        const uri = response.assets[0].uri
        setImageSource(uri)
        handleToggleModal()
        Alert.alert('카메라', uri)
      }
    })
  }

  const handleGallery = () => {
    launchImageLibrary({}, response => {
      if (response.didCancel) { // didCancel: 카메라로 사진 선택 취소
        console.log(response.didCancel)
      } else {
        const uri = response.assets[0].uri
        setImageSource(uri)
        handleToggleModal()
        Alert.alert('갤러리', uri)
      }
    })
  }

  return (
    <KeyboardAvoidingView style={styles.listView} behavior='height' keyboardVerticalOffset={110}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.chatView}>
          <View style={styles.dateView}>
            <Text style={styles.chatDate}>2021년 7월 2일</Text>
          </View>
          <View style={styles.messageView}>
            <GetMessage />
            <SendMessage />
          </View>
        </View>
      </ScrollView>
      <View style={styles.inputView}>
        <TouchableOpacity>
          <Ionicons name='add-outline' size={45} color='#c6c6c6' onPress={handleToggleModal} />
        </TouchableOpacity>
        <TextInput style={styles.chatInput}></TextInput>
        <TouchableOpacity>
          <Ionicons name='send-sharp' size={30} color='#c6c6c6' />
        </TouchableOpacity>
      </View>
      <ImageSelectModal toggleModal={toggleModal} onToggleModal={handleToggleModal} onCamera={handleCamera} onGallery={handleGallery} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  chatView: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  dateView: {
    alignItems: 'center',
  },
  chatDate: {
    marginBottom: 20,
    color: '#a1a1a1',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#f6f6f6',
  },
  chatInput: {
    height: 40,
    width: '70%',
    marginRight: 15,
    marginLeft: 5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
})

export default ChattingPage

