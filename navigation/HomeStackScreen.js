import React from 'react'
// stack navigation 도구 불러오기
import { createStackNavigator } from '@react-navigation/stack';
// stack navigation에 사용될 컴포넌트 불러오기
import HomePage from '../pages/home/HomePage'
import HomeDetailPage from '../pages/home/HomeDetailPage'




// stack navigation 라이브러리 제공
const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      {/* stack nacigation에 사용될 페이지 컴포넌트 추가 */}
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="HomeDetailPage" component={HomeDetailPage} />
    </Stack.Navigator>
  )
}

export default HomeStackScreen