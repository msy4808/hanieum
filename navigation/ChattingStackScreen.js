import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// Pages
import ChatListPage from '../pages/chatting/ChatListPage'

const Stack = createStackNavigator();

function ChattingStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatListPage"
        component={ChatListPage}
        options={{
          title: '채팅',
          headerStyle: {
            height: 70,
            shadowColor: 'black',
            elevation: 5,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default ChattingStackScreen

