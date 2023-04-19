import {View, Text, TextInput, TouchableOpacity, StyleSheet,StatusBar} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData,setUserData] = useState({});

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
      navigation.navigate('home',{email})
      console.log(`welcome ${userData[i].name}`);
    }
    else{
      console.log('No user Found')
      break;
    }
  }
    
   
   
  }
  return (   
    <View>
        <StatusBar backgroundColor={'orange'}/>
      <View style={styles.InputContainer}>
        <TextInput placeholder=" Email" value={email} style={styles.InputBox} onChangeText={e=>setEmail(e)}></TextInput>
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
        borderColor:'grey',
        borderWidth:1,
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