import React, { useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { Icon } from 'react-native-elements'
import Menu, { MenuItem } from 'react-native-material-menu'
// Components
import ReportModal from '../../components/chatting/ReportModal'
import GoOutModal from '../../components/chatting/GoOutModal'

function MaterialMenu ({navigation}){
  let menu = null
  const [isReportVisible, setReportVisible] = useState(false)
  const [isGoOutVisible, setGoOutVisible] = useState(false)

  const setMenuRef = (ref) => {
    menu = ref
  }

  const hideMenu = () => {
    menu.hide()
  }

  const showMenu = () => {
    menu.show()
  }

  const handleReportSend = (inputText) => {
    console.log(`신고가 접수되었습니다. : ${inputText}`)
    setReportVisible(!isReportVisible)
  }

  const handleReportClose = () => {
    setReportVisible(!isReportVisible)
  }

  const handleGoOutSend = (text) => {
    console.log(text)
    setGoOutVisible(!isGoOutVisible)
  }

  const handleGoOutClose = () => {
    setGoOutVisible(!isGoOutVisible)
  }

  return (
    <View style={styles.menu}>
      <Menu
        ref={setMenuRef}
        button={
          <Icon name='more-vertical' type='feather' size={25} containerStyle={{paddingRight: 20}} onPress={showMenu} />}
      >
        <MenuItem onPress={()=>{hideMenu(); setReportVisible(!isReportVisible);}}>신고하기</MenuItem>
        <MenuItem onPress={()=>{hideMenu(); setGoOutVisible(!isGoOutVisible);}}>나가기</MenuItem>
      </Menu>
      <ReportModal onSendButton={handleReportSend} onCloseButton={handleReportClose} isModalVisible={isReportVisible} />
      <GoOutModal onSendButton={handleGoOutSend} onCloseButton={handleGoOutClose} isModalVisible={isGoOutVisible} />
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  }
})

export default MaterialMenu

