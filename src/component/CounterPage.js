import React, {useState} from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default function CounterPage() {
    const [count, setCount ] = useState(1);

    PrevClickHandler =(nextCount)=>{
      if (count < 2 ){
        setCount(1)
      }
      else{
        setCount(nextCount => count-1)
      }
    }
    NextClickHandler=(PrevCount)=>{
      setCount(prevCount => count+1)
    }
  return (
    <View style={styles.box}>
         <Text style={styles.text}>
            Page-{count}
        </Text>
        <View style={styles.buttonContainer}>
          <Button title='Prev' onPress={PrevClickHandler}></Button>
          <Button title='next' onPress={NextClickHandler}></Button>
        </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
  box:{
    alignItems:'center',
    justifyContent:'center',
    marginBottom:18,
    backgroundColor:'skyblue'
  },
  text:{
    fontSize:20,
    color:'black'
  },  
  buttonContainer:{
    flexDirection:'row',
    width:'80%',
    justifyContent:'space-between',
    marginBottom:20,
  }
})
