import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './navigation/TabNavigation';
//join
import JoinStackScreen from './navigation/JoinStackScreen';
//write
import WriteStackScreen from './navigation/WriteStackScreen';
//live
import LiveStackScreen from './navigation/LiveStackScreen';

import ChattingPage from './pages/chatting/ChattingPage';
import SearchPage from './pages/home/SearchPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* initialRouteName: 맨 처음 보여줄 화면 */}
      <Stack.Navigator initialRouteName="TabNavigation">
        <Stack.Screen
          name="JoinStackScreen"
          component={JoinStackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChattingPage"
          component={ChattingPage}
        />
        <Stack.Screen
          name="SearchPage"
          component={SearchPage}
        />
        <Stack.Screen
          name="WriteStackScreen"
          component={WriteStackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LiveStackScreen"
          component={LiveStackScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
