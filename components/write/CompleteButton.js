import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {writePost, imagePost} from '../../requesthelper';

function CompleteButton({navigation, able, route, image}) {
  //route,  image 추가
  // console.log(navigation)
  const sandData = {
    title: route.title,
    content: route.content,
    price: route.price,
    category: route.category,
    state: route.state,
    email: route.email
  };
  let formData = new FormData();
  const ImageForm = () => {
    image.forEach(data => {
      const file = {
        uri: data.uri,
        type: 'image/jpeg',
        name: `${data.id}`,
      };
      formData.append('image', file);
    });
  };
  const ButtonAction = async () => {
    ImageForm();
    imagePost(`http://192.168.219.178:3000/board/image`, formData); //이메일에서 boardid로 바뀜...
    writePost('http://192.168.219.178:3000/board/create', sandData);
    navigation.navigate('TabNavigation');
  };
  return (
    <Button
      title="완료"
      type="clear"
      buttonStyle={styles.button}
      titleStyle={styles.title}
      disabled={able}
      onPress={() => {
        ButtonAction();
      }}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 18,
  },
  title: {
    fontSize: 15,
    color: '#ff7d7d',
    fontWeight: 'bold',
  },
});

export default CompleteButton;
