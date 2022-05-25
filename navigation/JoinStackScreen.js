import React from 'react';
// stack navigation 도구 불러오기
import {createStackNavigator} from '@react-navigation/stack';
// stack navigation에 사용될 컴포넌트 불러오기
import LoginPage from '../pages/join/LoginPage';
import ProfilePage from '../pages/join/ProfilePage';
import Location from '../pages/location/Location';
import MapView from '../pages/location/MapView';

// stack navigation 라이브러리 제공
const Stack = createStackNavigator();

function JoinStackScreen() {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          title: '프로필 입력',
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
      <Stack.Screen
        name="Location"
        component={Location}
        options={{
          title: '동네 인증하기',
          headerStyle: {
            height: 70,
            shadowColor: 'black',
            elevation: 5,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 30,
          },
          headerLeft: () => {
            headerBackVisible: false;
          },
        }}
      />
      <Stack.Screen
        name="MapView"
        component={MapView}
        options={{
          title: '동네 인증하기',
          headerStyle: {
            height: 70,
            shadowColor: 'black',
            elevation: 5,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 30,

          },
          headerLeft: () => {
            headerBackVisible: false;
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default JoinStackScreen;
