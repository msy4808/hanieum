import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native'
import Modal from 'react-native-modal'

function ImageSelectModal ({toggleModal, onToggleModal, onCamera, onGallery}){ 
  return (
    <Modal isVisible={toggleModal}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.modalText} onPress={()=>onCamera()}>
          <Text>카메라</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalText} onPress={()=>onGallery()}>
          <Text>이미지 선택</Text>
        </TouchableOpacity>
        <View style={styles.modalButtonView}>
          <TouchableOpacity onPress={()=>onToggleModal()}>
            <Text style={styles.modalButtonText}>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
  },
  modalText: {
    marginTop: 10,
    marginBottom: 20,
  },
  modalButtonView: {
    alignSelf: 'flex-end',
    margin: 5,
  },
  modalButtonText: {
    color: '#2196F3',
    fontWeight: '700',
  },
})

export default ImageSelectModal