import React from 'react'
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';
import Quates from './component/quatesPage';
import CounterPage from './component/CounterPage';
import FetchDataUsingMap from './component/FetchDataUsingMap';

export default function App() {
  return (
    <View>
        <SafeAreaView>
          <StatusBar backgroundColor={'skyblue'}/>
           {/* <CounterPage />
           <Quates/> */}
            <FetchDataUsingMap/>
        </SafeAreaView>
    </View>
  )
}
const style = StyleSheet.create({
    statusBarStyle:{
      backgroundColor:'skyblue'
    }
})
