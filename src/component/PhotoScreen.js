import {View, Text, ActivityIndicator, ScrollView, TouchableHighlight, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button} from '@rneui/base';
import {useSelector} from 'react-redux';
import {FETCH_DATA} from '../redux/ConstData/const';
export default function PhotoScreen() {
  const dispatch = useDispatch();
  const [UserData, setUserData] = useState();
  const Data = useSelector(item => item.PhotoData);
  //  console.log(Data.PhotoData._j)
  useEffect(() => {
    setUserData(Data);
  }, [ Data]);

  const FetchPhotos = () => {
    dispatch({type: FETCH_DATA});
    // console.log('Button check');
  };
  return Data && Data.loading ? (
    <View>
      <TouchableHighlight style={styles.touchablehighlight} onPress={FetchPhotos} ><Text>Press to Load Data</Text></TouchableHighlight>
    
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text>Loading...</Text>
      </View>
    </View>
  ) : (
    Data.PhotoData._j.map(item => (
      <ScrollView key={item.id} style={{backgroundColor:'orange',margin:10}}>
      <View style={{flex: 1}}>
        <View style={{flex:1,justifyContent: 'center',padding:10}}>
          <Text style={styles.text}>Name:- {item.name}</Text>
          <Text style={styles.email}>User:- {item.email}</Text>
        </View>
      </View>
      </ScrollView>
    ))
  );
}

const styles = StyleSheet.create({
  text:{
    color:'black',
    fontSize:18
  },
  email:{
    color:'black',
    fontSize:14
  },
  touchablehighlight:{
    backgroundColor:'orange',height:50,justifyContent:'center',alignItems:'center',margin:10
  }
})