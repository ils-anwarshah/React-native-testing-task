import {useState, useEffect} from 'react';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList,ActivityIndicator} from 'react-native';
import axios from 'axios';

export default function Quates() {
  useEffect(()=>{
    <ActivityIndicator animating={true} size='large' />
    setTimeout(()=>{
      
    },2000)
  },[])
  
  const [quatesData, setQuatesData] = useState([]);
  useEffect(() => {
    let url = 'https://dummyjson.com/quotes';
    axios
      .get(url)
      .then(res => {
        // console.log(res.data)
        setQuatesData(res.data.quotes);
      })

      .catch(error => {
        console.log(error);
      });
  }, []);
  const Items = ({id, title}) => (
    <View style={styles.box}>
      <Text style={styles.text}>
        {id}. {title}
      </Text>
    </View>
  );

  const renderItem = ({item}) => <Items id={item.id} title={item.quote} />;

  return (
    quatesData && (
      <View>
        <View>
          <FlatList
            key={item => item.id}
            data={quatesData}
            renderItem={renderItem}
          />
        </View>
      </View>
    )
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20,
  },
  box: {
    width: '100%',
    height: 80,
    borderColor: 'red',
  },
});
