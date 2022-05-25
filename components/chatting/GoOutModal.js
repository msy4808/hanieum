import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'
import Modal from 'react-native-modal'

function GoOutModal ({onSendButton, onCloseButton, isModalVisible}){

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.gooutView}>
        <Text style={styles.gooutTitle}>나가기</Text>
        <Text style={styles.gooutText}>방에서 나가시겠습니까?</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.gooutButton} onPress={()=>onCloseButton()}>
            <Text style={styles.buttonText}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gooutButton} onPress={()=>onSendButton('방에서 나갔습니다.')}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  gooutView: {
    backgroundColor: '#ffffff',
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 5,
    alignItems: 'center',
  },
  gooutTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  gooutText: {
    marginTop: 40,
    marginBottom: 40,
    fontSize: 15,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '85%',
  },
  gooutButton: {
    backgroundColor: '#ffffff',
    marginLeft: 20,
    marginRight: 10
  },
  buttonText: {
    color: '#2196F3',
  },
})

export default GoOutModal