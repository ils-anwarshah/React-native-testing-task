import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FetchDataUsingMap from '../FetchDataUsingMap';
import Quates from '../quatesPage';


const BottomNaviator = createBottomTabNavigator();

export default function TabContainer() {
    
  return (
   <BottomNaviator.Navigator>
    <BottomNaviator.Screen name="Quates" component={Quates}  options={{headerTintColor:"orange"}}/>
    <BottomNaviator.Screen name="Posts" component={FetchDataUsingMap} options={{headerTintColor:"orange"}}/>
   </BottomNaviator.Navigator>
  )
}