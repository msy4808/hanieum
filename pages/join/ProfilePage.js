import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import User from '../../assets/images/user.png'
import Camera from '../../assets/images/camera.png'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
// Components
import ImageModal from '../../components/join/ImageModal.js'

function ProfilePage({ navigation, route }) {
  console.log(route)
  const [imageSource, setImageSource] = useState('')
  const [toggleModal, setToggleModal] = useState(false)
  const [name, setName] = useState('')
  const [focus, setFocus] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [profileText, setProfileText] = useState(true)
  const [textEssential, setTextEssential] = useState(false)
  const [textOverLap, setTextOverLap] = useState(false)

  const dummyData = [
    {
      name: 'user1',
      image: { uri: 'file:///data/user/0/com.foodingapp/cache/rn_image_picker_lib_temp_887eac67-10ed-41ea-8310-6caf7fd9731e.jpg' }
    }, {
      name: 'user2',
      image: { uri: 'file:///data/user/0/com.foodingapp/cache/rn_image_picker_lib_temp_887eac67-10ed-41ea-8310-6caf7fd9731e.jpg' }
    }
  ]

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
      }
    })
  }

  const handleChange = (e) => { // 버튼 활성화/비활성화
    const { text } = e.nativeEvent
    if (text !== '') {
      setButtonDisabled(false)
    }
    if (text == '') {
      setButtonDisabled(true)
    }
  }

  const handleFocus = () => {
    setFocus(!focus)
  }

  const handleAllClear = () => {
    setName('')
    setButtonDisabled(true)
    setProfileText(false)
    setTextEssential(true)
    setTextOverLap(false)
  }

  const handleNextButton = async (name) => {
    dummyData.map((item) => {
      if (item.name == name) { // 중복 닉네님 확인
        setTextEssential(false)
        setTextOverLap(true)
      } else {
        navigation.navigate('TabNavigation')
      }
    })

    // try {
    //   const response = await axios.post('http://192.168.0.8:3000/user/all')
    //   console.log(response)
    // } catch (error) {
    //   console.log("닉네임 저장: " + error)
    // }
  }

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <View style={styles.profileView}>
          <View style={styles.propfilePicture}>
            <Image source={imageSource == '' ? User : { uri: imageSource }} style={styles.userImage} />
            <TouchableOpacity style={styles.cameraButton} onPress={handleToggleModal}>
              <Image source={Camera} style={styles.carmeraImage} />
            </TouchableOpacity>
          </View>
          <ImageModal toggleModal={toggleModal} onToggleModal={handleToggleModal} onCamera={handleCamera} onGallery={handleGallery} />
          <View style={styles.alignView}>
            <Text style={styles.nickNameText}>닉네임</Text>
            <View style={focus ? styles.nickNameFocus : styles.nickNameUnFocus}>
              <TextInput style={styles.nickNameInput} value={name} onChangeText={(text) => setName(text)} onChange={(e) => handleChange(e)} onFocus={handleFocus} onBlur={handleFocus} maxLength={10} />
              {buttonDisabled ? <View style={styles.buttonDis}></View> :
                <Icon name='cancel' size={20} color='#dbdbdb' containerStyle={{ paddingRight: 5 }} onPress={handleAllClear} />
              }
            </View>
            {textOverLap ? <Text style={styles.bottomText}>* 중복된 닉네임입니다.</Text> : null}
            {textEssential ? <Text style={styles.bottomText}>* 닉네임은 필수입니다.</Text> : null}
          </View>
          {profileText ? <Text style={styles.profileText}>프로필을 입력해주세요.</Text> : null}
        </View>
        <View style={styles.emptyView}></View>
        <Button title="다음" buttonStyle={styles.nextButton} containerStyle={styles.nextButtonContainer} titleStyle={styles.nextTitle} disabled={buttonDisabled} onPress={(name) => handleNextButton(name)}>
          <Text>다음</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  contents: {
    flex: 1,
    width: '80%',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 40,
  },
  profileView: {
    alignItems: 'center',
  },
  propfilePicture: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  userImage: {
    width: 130,
    height: 130,
    borderRadius: 70,
  },
  cameraButton: {
    position: 'absolute',
  },
  carmeraImage: {
    width: 40,
    height: 40,
  },
  alignView: {
    alignItems: 'flex-start',
    marginTop: 30,
  },
  nickNameUnFocus: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#7e7e7e',
    width: '75%',
    padding: 0,
    margin: 0,
  },
  nickNameFocus: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#ec6068',
    width: '75%',
    padding: 0,
    margin: 0,
  },
  nickNameText: {
    color: '#7e7e7e',
    fontSize: 14,
    alignItems: 'flex-start',
  },
  nickNameInput: {
    width: '90%',
    fontSize: 18,
    color: '#707070',
  },
  buttonDis: {
    width: '10%',
  },
  bottomText: {
    color: '#ec6068',
    fontSize: 13,
    marginTop: 10,
  },
  profileText: {
    color: '#7e7e7e',
    fontSize: 16,
    marginTop: 40,
  },
  emptyView: {
    height: '40%',
  },
  nextButton: {
    height: 50,
    backgroundColor: '#ff3131',
    borderRadius: 15,
  },
  nextButtonContainer: {
    elevation: 10,
    borderRadius: 15,
    width: '100%',
  },
  nextTitle: {
    fontWeight: '700',
  },
})

export default ProfilePage