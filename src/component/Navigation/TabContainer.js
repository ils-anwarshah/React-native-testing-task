import { View, Text,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FetchDataUsingMap from '../FetchDataUsingMap';
import Quates from '../quatesPage';


const BottomNaviator = createBottomTabNavigator();

export default function TabContainer() {
    
  return (
   <BottomNaviator.Navigator screenOptions={{tabBarActiveTintColor:'orange',}}>
    <BottomNaviator.Screen name="Quates" component={Quates}  options={{headerTintColor:"orange",tabBarIcon:()=>(<View><Image source={{uri:"https://e7.pngegg.com/pngimages/1004/282/png-clipart-house-home-automation-kits-computer-icons-free-home-angle-text-thumbnail.png"}} style={{height:25,width:25}}/></View>)}} />
    <BottomNaviator.Screen name="Posts" component={FetchDataUsingMap} options={{headerTintColor:"orange",tabBarIcon:()=>(<View><Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rTr5C7Ip1unmVEJipvsnZJU6Jpd0AZyt8cba7GPA4zPUJN7F3KRfNAiQjnpN7KoOkKo&usqp=CAU"}} style={{height:25,width:25}}/></View>)}}/>
   </BottomNaviator.Navigator>
  )
}