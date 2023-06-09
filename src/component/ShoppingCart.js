import { View, Text, StyleSheet ,ScrollView,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Icon } from '@rneui/themed'
import { useDispatch } from 'react-redux'
export default function ShoppingCart() {
 
  
  const CartItems = useSelector((items)=>items.cartData)
  const [cartData,setCartData] = useState(CartItems)
  const [totalPrice,setTotalPrice] = useState(0)
  //  console.log(cartData)
 
const dispatch = useDispatch()
  
  const RemoveITemFromCart= (item)=>{
    // console.log("data",item);
    dispatch({type:'REMOVE_TO_CART', payload:item})
  }
const UpdateTotalPrice=()=>{
  let totalPrice = 0;
  cartData.map((item)=>{
    totalPrice += item.price * item.quantity
  })
  setTotalPrice(totalPrice);

}
 useEffect(()=>{
  UpdateTotalPrice(),
  setCartData(CartItems)
  },[CartItems,UpdateTotalPrice])


  const Items = ({title, url, description, price, item}) => (
    <View style={{width: '100%', backgroundColor: 'white', marginBottom: 10}}>
      <View style={{flexDirection:'row'}}>
        <Image source={{uri: url}} style={{width:100,height:100}}></Image>
        <View style={{flex:1}}>
        <Text style={{color: 'black', fontSize: 20}}>
          {title}
        </Text>
        <View style={{}}>
        <Text style={{}}>{description.slice(0,56)+ '......'}</Text>
      </View>
      <View style={{justifyContent:'space-between',flexDirection:"row"}}>
        <View style={{flexDirection:"row"}}><Text style={{color:"black",fontSize:20,marginRight:30}}>{item.quantity * price}$</Text>
        <Text style={{color:"black",fontSize:20}}>Qnt : {item.quantity}</Text></View>
      
     <Button color={'error'} buttonStyle={{marginBottom:10,marginRight:10}} onPress={()=>RemoveITemFromCart(item)}>remove</Button>
      </View>
      

      </View>
     
      </View>
      
      
      
    </View>
  );
  return (
      cartData.length > 0 ? 
      <>
      <ScrollView>
      {
      cartData.map((item,index)=>(<Items key={index} title={item.title} description={item.description} url={item.url} price={item.price} item={item}/>))
      }
      </ScrollView> 
      <View style={{backgroundColor:'white'}}>
        <Button title={`${totalPrice}$ check out`} buttonStyle={{backgroundColor:'orange', padding:20,margin:10, }}/>
      </View>
      </>
      
    :      
      <View style={styles.container}> 
      <Text>You are rich! Nothing to buy, Huh ?:) </Text>
    </View> 
    
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    }
})