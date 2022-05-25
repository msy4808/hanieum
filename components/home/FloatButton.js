import React from 'react'
import { StyleSheet, Alert, Image } from 'react-native'
import { FloatingAction } from 'react-native-floating-action'
import Want from '../../assets/images/want.png'
import Request from '../../assets/images/request.png'

function FloatButton({ navigation }) {
  const actions = [
    {
      text: '원해요',
      name: 'bt_want',
      icon: <Image source={Want} style={styles.wantButton} />,
      position: 1,
      color: '#ffffff',
      buttonSize: 45,
      textStyle: {
        fontSize: 15,
        fontWeight: '700'
      },
      textBackground: 'rgba(47, 47, 47, 0)',
      textColor: '#ffffff',
      textElevation: 0,
      margin: 8,
    },
    {
      text: '팔게요',
      name: 'bt_sale',
      icon: <Image source={Request} style={styles.requestButton} />,
      position: 2,
      color: '#ffffff',
      buttonSize: 45,
      textStyle: {
        fontSize: 15,
        fontWeight: '700'
      },
      textBackground: 'rgba(47, 47, 47, 0)',
      textColor: '#ffffff',
      textElevation: 0,
      margin: 8,
    },
  ]

  return (
    <FloatingAction
      actions={actions}
      position='right'
      color='#ff3131'
      actionsPaddingTopBottom={2}
      iconWidth={20} //30 -> 20
      iconHeight={20} //30 -> 20
      buttonSize={50} //60 -> 50
      overlayColor='rgba(47, 47, 47, 0.7)'
      onPressItem={(name) => {
        if (name === 'bt_sale') {
          navigation.navigate('WriteStackScreen')
        } else {
          Alert.alert('Icon pressed', `the icon ${name} was pressed`);
        }
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatButton: {
    flex: 1,
    position: 'absolute',
  },
  wantButton: {
    width: 22,
    height: 22,
  },
  requestButton: {
    width: 22,
    height: 22,
  }
})

export default FloatButton


