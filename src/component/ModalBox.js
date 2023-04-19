import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function ModalBox(props) {

    const HideModal=()=>{
        props.setVisiblity(false);
    }
    // console.log('props',props)
  return (
      <Modal style={styles.Modal} transparent={true} presentationStyle='overFullScreen' animationType='slide' visible={props.visiblity}>
        <TouchableOpacity style={styles.closeButton} onPress={HideModal}>
        <View ><Text style={{fontSize:20}}>X</Text></View>
        </TouchableOpacity>
        <View style={styles.Modal}>
            <Text >Hello, no notification here :) </Text>
        </View>
      </Modal>
     
  )
}

const styles = StyleSheet.create({
    
    Modal:{
        width:'80%',
        height:'40%',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        top:200,
        left:40,
        backgroundColor:'white',
        shadowColor:'black',
        elevation:10,zIndex:4

    },
    closeButton:{
        position:'absolute',
        top: 210,
        left:320,
        zIndex:5
    }
})