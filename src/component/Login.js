import {View, Text, TextInput, TouchableOpacity, StyleSheet,StatusBar,ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData,setUserData] = useState({});
  const [user,setUser] = useState(false)
  useEffect(()=>{
    getUser();
    if (user){
      navigation.navigate('drawercontainer')
    }else{

    }
  },[user])

  const getUser = async()=>{
    const isUser = await AsyncStorage.getItem('user');
    // console.log(isUser)
    if (isUser==="true"){
      setUser(true)
    }
    else{
      setUser(false)
    }
  }


 const  PostData= async()=>{
   let url = 'http://10.0.2.2:3000/users'
   axios.get(url)
   .then((res)=>{
    setUserData(res.data)
  })
  //  console.log(userData[0].email)
  for (let i=0;i<userData.length;i++){
    if (email === userData[i].email && password === userData[i].password)
    {
      navigation.navigate('drawercontainer',{email})
      AsyncStorage.setItem('user','true')
      console.log(`welcome ${userData[i].name}`);
      break;
    }
    else{
      console.log('No user Found')
      break;
    }
  }
  }
  return (   
    <View>
      <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2022/06/29/19/07/colored-7292420__340.jpg'}} style={{height:'100%'}} blurRadius={80}>
        <StatusBar backgroundColor={'orange'}/>
      <View style={styles.InputContainer}>
        <TextInput placeholder=" Email" value={email} style={styles.InputBox} onChangeText={e=>setEmail(e)} ></TextInput>
        <TextInput
        style={styles.InputBox}
          placeholder=" Password"
          secureTextEntry
          value={password} onChangeText={e=>setPassword(e)}></TextInput>
      </View>
      <View style={styles.TouchableOpacityContainer} >
      <TouchableOpacity style={styles.buttonContainer} onPress={PostData}>
        <View ><Text style={styles.button} >Login</Text></View>
      </TouchableOpacity>
      </View>
      <View style={styles.TouchableOpacityContainer}><TouchableOpacity style={styles.buttonContainer2} onPress={()=>navigation.navigate('register')}>
        <View ><Text style={styles.button2} >Register</Text></View>
      </TouchableOpacity></View>
      </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
    InputContainer:{
        height:300,
        padding:20,
        justifyContent:'flex-end',
        alignContent: 'center',
    },
    InputBox:{
        marginTop:20,
        borderColor:'white',
        borderWidth:2,
        borderRadius:5
    },
    button:{
        textAlignVertical:'center',
        textAlign:'center'
    },
    buttonContainer:{
        width:'40%',
        height:40,
        justifyContent:'center',
        backgroundColor:'skyblue',
        alignItems:'center',
        shadowColor:'black',
        elevation:10,
        borderRadius:5
    
    },
    buttonContainer2:{
        width:'40%',
        height:40,
        justifyContent:'center',
        backgroundColor:'orange',
        alignItems:'center',
        shadowColor:'black',
        elevation:10,
        borderRadius:5
       
    },
    button2:{
        textAlignVertical:'center',
        textAlign:'center'
    },
    TouchableOpacityContainer:{
        paddingBottom:20,
        paddingRight:20,
        width:'100%',
        alignItems:'flex-end',
    }
})