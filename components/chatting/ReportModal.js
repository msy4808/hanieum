import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'

function SendMessage ({onSendButton, onCloseButton, isModalVisible}){
  const [report, setReport] = useState('')

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.reportView}>
        <Text style={styles.reportTitle}>신고사유</Text>
        <TextInput style={styles.reportInput} multiline={true} placeholder='신고사유를 작성해주세요.' onChangeText={setReport}/>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.reportButton} onPress={()=>onCloseButton()}>
            <Text style={styles.buttonText}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reportButton} onPress={()=>onSendButton(report)}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  reportView: {
    backgroundColor: '#ffffff',
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 5,
    alignItems: 'center',
  },
  reportTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  reportInput: {
    borderWidth: 1,
    borderColor: '#a1a1a1',
    width: '85%',
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '85%',
  },
  reportButton: {
    backgroundColor: '#ffffff',
    marginLeft: 20,
    marginRight: 10
  },
  buttonText: {
    color: '#2196F3',
  },
})

export default SendMessage