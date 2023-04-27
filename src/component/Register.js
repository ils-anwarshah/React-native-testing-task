import { View, Text, StyleSheet, TouchableOpacity, TextInput,ImageBackground } from 'react-native'
import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Register({navigation}) {
    const [email, setEmail] = useState('');
    const [name,setName] = useState('')
  const [password, setPassword] = useState('');

  const  PostData= async()=>{
    let url = 'http://10.0.2.2:3000/users'
    const requestOptions = {
     method: 'POST',
     headers: { 
         'Content-Type': 'application/json',
        
     },
     body: JSON.stringify({ name:name, email:email, password:password })
 };
    let result = await fetch(url,requestOptions)
    navigation.navigate('drawercontainer',{name})
    AsyncStorage.setItem('user','true')
   }
  return (
    <View>
      <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2022/06/29/19/07/colored-7292420__340.jpg'}} style={{height:'100%'}} blurRadius={80}>
      <View style={styles.InputContainer}>
      <TextInput placeholder="Name" value={name} style={styles.InputBox} onChangeText={e=>setName(e)}></TextInput>
        <TextInput placeholder="email" value={email} style={styles.InputBox} onChangeText={e=>setEmail(e)}></TextInput>
        <TextInput
        style={styles.InputBox}
          placeholder="password"
          secureTextEntry
          value={password} onChangeText={e=>setPassword(e)}></TextInput>
      </View>
      <View style={styles.TouchableOpacityContainer}>
      <TouchableOpacity style={styles.buttonContainer} onPress={PostData}>
        <View ><Text style={styles.button}>Register</Text></View>
      </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
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