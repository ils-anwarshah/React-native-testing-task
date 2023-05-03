import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function FetchDataUsingMap(props) {
    const [isLoading, setIsLoading] = useState(true);
 
    useEffect(()=>{
        getData();
    },[])
  const [postData, setPostData] = useState([]);
  const getData = () => {
    let url = 'https://dummyjson.com/posts';
    axios
      .get(url)
      .then(res => {
        setPostData(res.data.posts);
        setIsLoading(false)
       
        // console.log(res.data.posts);
      })
      .catch(err => console.log(err));
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        {
            
    postData && (
        isLoading ? (
            <ActivityIndicator
              animating={true}
              size={'large'}
              style={styles.activitiveLoading}
              color={'orange'}
            />
           
            ):(
        
        postData.map((value, index)=>(
            
            <View key={value.id} style={styles.container}>
                <View>
                    <Text style={styles.text}>
                        {value.id}. {value.title}
                    </Text>
                </View>
                <View>
                    <Text style={styles.description}>
                        {value.body.length < 300 ? value.body : value.body.slice(0,300)+'...'}
                    </Text>
                </View>
            </View>
            
        )))
    )}
    </ScrollView>
  )
        }
const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'black',
        marginBottom:20,
        padding:10
    },
    description:{
        padding:10
    },
    container:{
        flex:1,
        backgroundColor:"#fff",
        shadowColor:'black',
        elevation:2,
        marginBottom:10,
        margin:10    
    },
    box:{
        width:"100%",
    }
})