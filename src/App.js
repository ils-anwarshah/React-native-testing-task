import React from 'react'
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';
import Quates from './component/quatesPage';
import CounterPage from './component/CounterPage';
import FetchDataUsingMap from './component/FetchDataUsingMap';
import Login from './component/Login';
import Register from './component/Register';
import NavigationCont from './component/Navigation/NavigationCont';

export default function App() {
  return (
    <NavigationCont>      
      <StatusBar backgroundColor={'skyblue'}/>
       {/* <CounterPage />
       <Quates/> */}
        {/* <FetchDataUsingMap/> */}
        <Login/>
        {/* <Register/> */}
    </NavigationCont>
   
  )
}
const style = StyleSheet.create({
    statusBarStyle:{
      backgroundColor:'skyblue'
    }
})
