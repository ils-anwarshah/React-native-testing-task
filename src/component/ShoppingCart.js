import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ShoppingCart() {
  return (
    <View style={setyles.container}> 
      <Text>You are rich! Nothing to buy, Huh ?:) </Text>
    </View>
  )
}
const setyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    }
})