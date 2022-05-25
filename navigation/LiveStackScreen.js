import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LivePage from '../pages/live/LivePage';
import DetailPage from '../pages/live/SalesDetailPage';
import PurchseDetailPage from '../pages/live/PurchseDetailPage'

const Stack = createStackNavigator();

export default function LiveStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LivePage" component={LivePage} />
      <Stack.Screen name="SalesDetailPage" component={DetailPage} />
      <Stack.Screen name="PurchseDetailPage" component={PurchseDetailPage} />
    </Stack.Navigator>
  );
}
