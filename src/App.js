import React from 'react'
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';
import Quates from './component/quatesPage';
import CounterPage from './component/CounterPage';
import FetchDataUsingMap from './component/FetchDataUsingMap';
import Login from './component/Login';
import Register from './component/Register';
import NavigationCont from './component/Navigation/NavigationCont';
import DrawerContainer from './component/DrawerContainer';
import 'react-native-gesture-handler'
import store from './redux/store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationCont>      
      <StatusBar backgroundColor={'skyblue'}/>
       {/* <CounterPage />
       <Quates/> */}
        {/* <FetchDataUsingMap/> */}
        <Login/>
        {/* <Register/> */}
    </NavigationCont>
    </Provider>
    
   
  )
}
const style = StyleSheet.create({
    statusBarStyle:{
      backgroundColor:'skyblue'
    }
})
