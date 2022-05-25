import React from 'react'
import MyPage from '../pages/my/MyPage'
import { createStackNavigator } from '@react-navigation/stack';
import Location from '../pages/location/Location'
import MapView from '../pages/location/MapView'


const Stack = createStackNavigator();

function MyStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPage" component={MyPage} />
      <Stack.Screen name="동네 인증하기" component={Location} />
      <Stack.Screen name="MapView" component={MapView} />
      
    </Stack.Navigator>
  )
}

export default MyStackScreen

