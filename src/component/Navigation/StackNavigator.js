import { View, Text, Image, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import Register from '../Register';
import { useState } from 'react';
import Quates from '../quatesPage';
import ModalBox from '../ModalBox';
import FetchDataUsingMap from '../FetchDataUsingMap';
import DrawerContainer from '../DrawerContainer';
import ShoppingCart from '../ShoppingCart';

const Stack = createNativeStackNavigator();


export default function StackNavigator() {
  const [modalVisiblity,setModalVisiblity] = useState(false);
  return (
    <Stack.Navigator initialRouteName='login'>
        <Stack.Screen options={{ title:'Login Page', headerTintColor:'orange',} } name="login" component={Login} />
        <Stack.Screen name="register" component={Register} options={{title:'Back',headerTintColor:'orange'}}/>
        {/* <Stack.Screen name='home'component={Quates} options={{title:'Home Page',headerBackVisible:false,headerTintColor:'orange',headerTitleAlign:'center', headerRight:()=>(<Button title='Cart' color={'orange'} onPress={()=>setModalVisiblity(true)}></Button>)}}/> */}
        <Stack.Screen name='drawercontainer' component={DrawerContainer} options={{headerShown:false}}/>
        <Stack.Screen name="shoppingcart" component={ShoppingCart} options={{headerSearchBarOptions:true,title:'Cart'}}/>
    </Stack.Navigator>
  )
}