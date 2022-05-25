import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LiveSalesPage from './LiveSalesPage'
import LivePurchasePage from './LivePurchasePage'

const Top = createMaterialTopTabNavigator();

export default function LivePage({ live }) {
  return (
    <Top.Navigator
      initialRouteName={live === '판매' ? '판매' : '구매'}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold', marginLeft: 20 },
        tabBarItemStyle: { width: 100, height: 60 },
        tabBarStyle: { backgroundColor: '#ffffff' },
        tabBarIndicatorStyle: { backgroundColor: '#ff7d7d', marginLeft: 10 },
      }}>
      <Top.Screen name="판매" component={LiveSalesPage} />
      <Top.Screen name="구매" component={LivePurchasePage} />
    </Top.Navigator>
  );
}
