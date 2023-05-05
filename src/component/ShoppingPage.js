import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Skeleton } from '@rneui/base';
import {useSelector,useDispatch} from 'react-redux';
import ShoppingItem from '../Data/ShoppingItem';


export default function Cart({navigation}) {
  const dispatch = useDispatch();
  const [bedgecount,setBedgeCount] = useState(0)
  const [isloading,setIsLoading] = useState(true)
  const Data  = useSelector(item => item.cartcount)
  const CartData = useSelector(item=>item)
  // console.log(CartData.cartData)

  const UpdateCartcount=(title,url,description,price)=>{
    // console.log(title,url,description,url)
    let items = {'title':title,'url':url,'description':description,'price':price}
    dispatch({type:"ADD_TO_CART",payload:items})
  }
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },1500)
  },[])
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('shoppingcart')}
            style={styles.navigationRightButton}>
            <Text style={styles.navigationRightButtonText}>Cart</Text>
          </TouchableOpacity>
          <View style={styles.NotificationBedge}>
            <Text style={{textAlign: 'center'}}>{Data.item_count}</Text>
          </View>
        </View>
      ),
    });
  }, [Data]);
  const Items = ({title, url, description, price}) => (
    <View style={{width: '100%', backgroundColor: 'white', marginBottom: 30}}>
      <View>
        <Image source={{uri: url}} style={{...styles.Image}}></Image>
      </View>
      <View style={styles.title}>
        <Text style={{textAlign: 'center', color: 'black', fontSize: 20}}>
          {title}
        </Text>
      </View>
      <View style={styles.description}>
        <Text style={{textAlign: 'center'}}>{description}</Text>
      </View>
      <Text style={styles.price}>{price}$</Text>
      <TouchableOpacity onPress={()=>UpdateCartcount(title, url, description, price)} style={styles.buttonContainer}>
        <Text>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    isloading && 
      isloading ?<><Skeleton width={'95%'} height={550} style={{alignSelf:'center'}}/>
      <Skeleton width={'95%'} height={550} style={{alignSelf:'center',margin:25}}/>
      </>

      :  
      <ScrollView style={{flex: 1}}>
      {ShoppingItem &&
        ShoppingItem.map(item => (
          <Items
            key={item.id}
            title={item.name}
            url={item.imageUrl}
            description={item.description}
            price={item.price}
          />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: 350,
  },
  title: {
    width: '100%',
  },
  description: {},
  price: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '800',
  },
  buttonContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'orange',
    margin: 20,
  },
  navigationRightButton: {
    justifyContent: 'center',
    backgroundColor: 'orange',
    width: 50,
    height: 30,
    alignItems: 'center',
  },
  navigationRightButtonText: {
    fontWeight: '800',
    fontSize: 15,
  },
  NotificationBedge: {
    position: 'relative',
    right: 10,
    bottom: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 20,
    height: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
