import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Quates from './quatesPage';
import FetchDataUsingMap from './FetchDataUsingMap';
import TabContainer from './Navigation/TabContainer';

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
  return (

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabContainer} options={{headerShown:false}}/>
        <Drawer.Screen name="profile" component={Profile} options={{headerTintColor:"orange"}}/>
        <Drawer.Screen name="Posts" component={FetchDataUsingMap} options={{headerTintColor:"orange"}}/>
        <Drawer.Screen name="setting" component={Setting} options={{headerTintColor:"orange"}}/>
      </Drawer.Navigator>
  );
}

const Profile=()=>{
  return(
    <View>
      <Text>HEllo I am profile Page</Text>
    </View>
  )
}

const Setting=()=>{
  return(
    <View><Text>
      Hello I am Setting Page
      </Text></View>
  )
}