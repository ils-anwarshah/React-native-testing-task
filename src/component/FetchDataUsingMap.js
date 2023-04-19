import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function FetchDataUsingMap(props) {
    const [isLoading, setIsLoading] = useState(true);
    const {name} = props.route.params
 
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
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
        // console.log(res.data.posts);
      })
      .catch(err => console.log(err));
  };
  return (
    <ScrollView>
        {
            
    postData && (
        isLoading ? (
        <View>
            <ActivityIndicator
              animating={true}
              size={'large'}
              style={styles.activitiveLoading}
              color={'orange'}
            />
            <Text style={{textAlign:'center',fontSize:20}}>Welcome : {name}</Text>
            </View>
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
        marginBottom:20
    },
    description:{
        
    },
    container:{
        width:'100%',
        height:200,
        backgroundColor:"#fff",
        shadowColor:'black',
        elevation:2,
        marginBottom:10
    },
    box:{
        width:"100%",
        height:100
    }
})