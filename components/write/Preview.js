import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'

import cancel from '../../assets/images/cancel.png'

function Preview({ imageUrl, index, onDelete }) {

  const handlePrevieDelete = () => {
    onDelete(index)
  }

  return (
    <View style={styles.preView}>
      <Image style={styles.preViewImage} source={imageUrl} />
      <TouchableOpacity style={styles.preViewButton} onPress={handlePrevieDelete}>
        <Image source={cancel} style={styles.preViewButtonImage} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  preView: {
    width: 57,
    height: 57,
    marginRight: 5,
  },
  preViewButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  preViewImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 10,
    marginTop: 5,
  },
  preViewButtonImage: {
    width: 18,
    height: 18,
  },
})

export default Preview


