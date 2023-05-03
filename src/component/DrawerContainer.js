import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'

import Quates from './quatesPage';
import FetchDataUsingMap from './FetchDataUsingMap';
import TabContainer from './Navigation/TabContainer';
import Cart from './ShoppingPage';
import { Avatar } from '@rneui/themed';
import { Icon } from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

export default function DrawerContainer({navigation}) {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
const DrawerContents=(props)=>{
  const getProfileName=async()=>{
    const user= await AsyncStorage.getItem('name');
    const email = await AsyncStorage.getItem('email');
    if (user){
      setName(user);
      setEmail(email);
    }
  
    
}
  useEffect(()=>{
    getProfileName();
  },[getProfileName])


  handleLogOut=()=>{
    navigation.navigate('login')
    AsyncStorage.removeItem('name')
    AsyncStorage.removeItem('email')
    AsyncStorage.removeItem('user')
  }
  return(
    <>
    <View style={styles.profileContainer}>
      <Avatar
      size={60}
      rounded
      containerStyle={{marginLeft:20}}
      source={{uri:'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'}}
      />
      <View>
      <Text style={styles.profileText}>{name==="" ? "User":name}</Text>
      <Text style={styles.profileEmailText}>{name==="" ? "User@gmail.com":email}</Text>
      </View>
    </View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    <DrawerItem label={'Log Out'} onPress={handleLogOut} icon={()=>(<Icon type='material-community' name="home"/>)} > </DrawerItem>

    </>
  )
}

  return (

      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContents {...props} />} screenOptions={{drawerActiveBackgroundColor:'orange',drawerActiveTintColor:'black',headerTintColor:"orange"}}>
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

const styles = StyleSheet.create({
  profileContainer:{
    backgroundColor:'orange',
    width:'100%',
    height:150,
    flexDirection:"row"
  },
  profileText:{
    marginLeft:20,
    marginTop:8,
    fontSize:18,
    fontWeight:'600',
    color:'black'
  },
  profileEmailText:{
    marginLeft:20,
    fontSize:14,
    fontWeight:'600',
  }
})