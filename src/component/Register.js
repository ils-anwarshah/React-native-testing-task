import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React,{useState} from 'react'

export default function Register() {
    const [email, setEmail] = useState('');
    const [name,setName] = useState('')
  const [password, setPassword] = useState('');
  return (
    <View>
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
      <TouchableOpacity style={styles.buttonContainer} >
        <View ><Text style={styles.button}>Register</Text></View>
      </TouchableOpacity>
      </View>
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