import {useState, useEffect} from 'react';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Button,
} from 'react-native';
import axios from 'axios';
import ModalBox from './ModalBox';

export default function Quates({navigation}) {
  const [quatesData, setQuatesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[visiblity , setVisiblity] = useState(false)

  const ShowMOdal =()=>{
    if(!visiblity){
      setVisiblity(true);
    }
    else {
      setVisiblity(false)
    }
      
  }

useEffect(()=>{
  navigation.setOptions({
    headerRight:()=>(
      <Button title="Cart" onPress={ShowMOdal}/>
    )
  })
},[navigation,setVisiblity])

  useEffect(() => {
    let url = 'https://dummyjson.com/quotes';
    axios
      .get(url)
      .then(res => {
        // console.log(res.data)
        setQuatesData(res.data.quotes);
        setIsLoading(false);
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
    quatesData &&
    (isLoading ? (
      <ActivityIndicator
        animating={true}
        size={'large'}
        style={styles.activitiveLoading}
        color={'orange'}
      />
    ) : (
      <View style={styles.container}>
        <View>
          <FlatList
            key={item => item.id}
            data={quatesData}
            renderItem={renderItem}
          />
        </View>
        { visiblity ?
          <ModalBox  setVisiblity={setVisiblity}/>: null}
      </View>
    ))
  );
}
const styles = StyleSheet.create({
  container:{
    padding:10
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  box: {
    width: '100%',
    height: 80,
    backgroundColor:'#fff',
    shadowColor:'black',
    elevation:4,
    marginBottom:10,
    borderRadius:10
  },
  activitiveLoading: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
