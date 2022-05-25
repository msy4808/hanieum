import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

function NextButton({ navigation, able, route }) { //route 추가
  const boardData = {
    title: route.title,
    content: route.content,
    price: route.price,
    category: route.category,
    state: route.state,
    email: route.email
  }
  const ButtonAction = () => {
    navigation.navigate('AuthWrittingPage', {boardData:boardData, imageList:route.imageList})
  }
  return (
    <Button
      title='다음'
      type='clear'
      buttonStyle={styles.button}
      titleStyle={styles.title}
      disabled={able}
      onPress={() => { ButtonAction(); }}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    marginRight: 18,
  },
  title: {
    fontSize: 15,
    color: '#ff7d7d',
    fontWeight: 'bold',
  }
})

export default NextButton