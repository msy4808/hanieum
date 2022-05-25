import React from 'react'
// stack navigation 도구 불러오기
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// stack navigation에 사용될 컴포넌트 불러오기
import HomeStackScreen from './HomeStackScreen'
import LiveStackScreen from './LiveStackScreen'
import ChattingStackScreen from './ChattingStackScreen'
import MyStackScreen from './MyStackScreen'

import Ionicons from 'react-native-vector-icons/Ionicons'

// stack navigation 라이브러리 제공
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-sharp'
          } else if (route.name === 'Live') {
            iconName = 'cart-sharp'
          } else if (route.name === 'Chatting') {
            iconName = 'chatbox-ellipses-sharp'
          } else if (route.name === 'My') {
            iconName = 'person-sharp'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: { height: '8%', paddingTop: 10, paddingBottom: 10, },
        activeTintColor: '#343434',
        inactiveTintColor: '#a1a1a1',
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Live" component={LiveStackScreen} />
      <Tab.Screen name="Chatting" component={ChattingStackScreen} />
      <Tab.Screen name="My" component={MyStackScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation

