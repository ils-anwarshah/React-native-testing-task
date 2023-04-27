import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Quates from './quatesPage';
import FetchDataUsingMap from './FetchDataUsingMap';
import TabContainer from './Navigation/TabContainer';
import Cart from './ShoppingPage';

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
  return (

      <Drawer.Navigator initialRouteName="Home" screenOptions={{drawerActiveBackgroundColor:'orange',drawerActiveTintColor:'black',headerTintColor:"orange"}}>
        <Drawer.Screen name="Home" component={TabContainer} options={{headerShown:false}}/>
        <Drawer.Screen name="profile" component={Profile} />
        <Drawer.Screen name="Posts" component={FetchDataUsingMap} />
        <Drawer.Screen name="setting" component={Setting} />
        <Drawer.Screen name="Shopping" component={Cart} options={{title:"Shopping"}}/>
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