import React from 'react'
// stack navigation 도구 불러오기
import { createStackNavigator } from '@react-navigation/stack'
// stack navigation에 사용될 컴포넌트 불러오기
import SaleWrittingPage from '../pages/write/SaleWrittingPage'
import AuthWrittingPage from '../pages/write/AuthWrittingPage'

// stack navigation 라이브러리 제공
const Stack = createStackNavigator();

function WriteStackScreen() {
  return (
    <Stack.Navigator options={{ headerShown: false }} initialRouteName="SaleWrittingPage">
      <Stack.Screen
        name="SaleWrittingPage"
        component={SaleWrittingPage}
      />
      <Stack.Screen
        name="AuthWrittingPage"
        component={AuthWrittingPage}
      />
    </Stack.Navigator>
  )
}

export default WriteStackScreen

