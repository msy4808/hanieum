import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// Components
import Line from '../../components/write/Line';
import NextButton from '../../components/write/NextButton';
import Preview from '../../components/write/Preview';
import {Picker} from '@react-native-picker/picker';

import picture from '../../assets/images/picture.png';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SaleWrittingPage({navigation}) {
  const [imageCount, setImageCount] = useState(0);
  const [imageList, setImageList] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [able, setAble] = useState(true);
  const state = 1;
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [email, setEmail] = useState('');
  const getEmail = async() => {
    const email = await AsyncStorage.getItem('user_email');
    setEmail(email);
  }
  useEffect(() => {
    getEmail();
    navigation.setOptions({
      title: '판매 글쓰기',
      headerStyle: {
        height: 70,
        shadowColor: 'black',
        elevation: 5,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <AntDesign
          name="close"
          size={26}
          color="#6f6f6f"
          style={{marginLeft: 15}}
          onPress={() => navigation.navigate('HomePage')}
        />
      ),
      headerRight: () => (
        <NextButton
          navigation={navigation}
          able={able}
          route={{imageList, title, price, content, state, category, email}}
        /> //데이터 넘겨주기
      ),
    });
  }, [able, imageList, title, price, content, state, category, email]);

  useEffect(() => {
    // validate
    if (imageCount >= 1 && title !== '' && price !== '' && content !== '') {
      console.log('다음으로 넘어가요!');
      setAble(false);
    } else {
      console.log('필수 항목을 채워주세요!');
      setAble(true);
    }
  });

  const handleGallery = () => {
    if (imageCount >= 10) {
      alert('사진은 10장까지만 가능합니다.');
    } else {
      launchImageLibrary({}, response => {
        if (response.didCancel) {
          // didCancel: 카메라로 사진 선택 취소
          console.log(response.didCancel);
        } else {
          const uri = response.assets[0].uri;
          setImageList([...imageList, {id: nextId, uri: uri}]); // 사진 리스트 추가
          setImageCount(imageCount + 1); // 사진 카운트
          setNextId(nextId + 1);
        }
        console.log(imageList);
      });
    }
  };

  const handleDelete = index => {
    setImageList(imageList.filter(imageItem => imageItem.id !== index));
    setImageCount(imageCount - 1);
  };

  const handlePriceInput = text => {
    const unComma = text.toString().replace(/[^\d]+/g, ''); // , 풀기
    const comma = unComma
      .toString()
      .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,'); // 천 단위마다 , 추가
    setPrice(comma);
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectView}>
        <TouchableOpacity style={styles.pictureSelect} onPress={handleGallery}>
          <Image style={styles.selectCamera} source={picture} />
          <Text style={styles.selectText}>{imageCount}/10</Text>
        </TouchableOpacity>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {imageList.map((image, index) => (
            <Preview
              key={index}
              index={index}
              imageUrl={image}
              onDelete={handleDelete}
            />
          ))}
        </ScrollView>
      </View>
      <Line />
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={e => setTitle(e)}
        placeholder="제목"></TextInput>
      <Line />
      <TextInput
        style={styles.textInput}
        value={price}
        keyboardType="numeric"
        onChangeText={text => handlePriceInput(text)}
        placeholder="₩ 가격"></TextInput>
      <Line />
      {/*  카테고리 추가 */}
      <Picker
        selectedValue={selectedLanguage}
        mode='dropdown'
        style={{
          marginLeft: 20,
        }}
        prompt='카테고리를 선택하세요'
        dropDownStyle={{backgroundColor: '#fff'}}
        dropdownIconColor='#000000'
        onValueChange={(itemValue, itemIndex) => {
          setSelectedLanguage(itemValue)
          setCategory(itemValue)
        }
        }>
        <Picker.Item label="채소" value="채소" />
        <Picker.Item label="과일" value="과일" />
        <Picker.Item label="정육" value="정육" />
        <Picker.Item label="수산" value="수산" />
        <Picker.Item label="기타" value="기타" />
      </Picker>
      <Line />
      <TextInput
        style={styles.textInputMulti}
        placeholder="음식에 관한 상세 설명을 적어주세요.&#13;&#10;예시) 개봉일자, 맛, 구매처, 개봉유무 등"
        multiline={true}
        textAlignVertical="top"
        value={content}
        onChangeText={e => setContent(e)}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  selectView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    height: 70,
  },
  pictureSelect: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 4,
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 1,
  },
  selectCamera: {
    width: 19,
    height: 17,
    marginTop: 4,
  },
  selectText: {
    color: '#343434',
    fontSize: 11,
  },
  textInput: {
    height: 65,
    paddingLeft: 20,
    fontSize: 16,
    color: '#000000', //제 핸드폰에서 텍스트가 안보여서 임시로 추가했습니다
  },
  textInputMulti: {
    height: 400,
    padding: 20,
    color: '#000000', //제 핸드폰에서 텍스트가 안보여서 임시로 추가했습니다
  },
});

export default SaleWrittingPage;
