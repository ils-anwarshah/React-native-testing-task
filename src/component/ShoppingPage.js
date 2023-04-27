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

export default function Cart({navigation}) {
  const [bedgecount,setBedgeCount] = useState(0)
  const CartData = [
    {
      id: 0,
      name: 'iPhone 12',
      description:
        'The fact that Apple has consistently been at the cutting edge of innovation makes it very well-liked and in high demand among mobile ',
      imageUrl: 'https://m.media-amazon.com/images/I/711wsjBtWeL._SX522_.jpg',
      price: 799,
    },
    {
      id: 1,
      name: 'iPhone 14 Pro Max',
      description:
        'The fact that Apple has consistently been at the cutting edge of innovation makes it very well-liked and in high demand among mobile buyers. Since the iPhone has outperformed every element of the mobile industry, ',
      imageUrl: 'https://m.media-amazon.com/images/I/61XO4bORHUL._SX522_.jpg',
      price: 1299,
    },
    {
      id: 2,
      name: 'Macbook',
      description:
        'The fact that Apple has consistently been at the cutting edge of innovation makes it very well-liked and in high demand among mobile buyers. Since the iPhone has outperformed every element of the mobile industry, ',
      imageUrl:
        'https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg',
      price: 1499,
    },
    {
      id: 3,
      name: 'Macbook Air',
      description:
        'The fact that Apple has consistently been at the cutting edge of innovation makes it very well-liked and in high demand among mobile buyers. Since the iPhone has outperformed every element of the mobile industry, ',
      imageUrl: 'https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg',
      price: 999,
    },
    {
      id: 4,
      name: 'Macbook Air 2013',
      description:
        'The fact that Apple has consistently been at the cutting edge of innovation makes it very well-liked and in high demand among mobile buyers. Since the iPhone has outperformed every element of the mobile industry, ',
      imageUrl: 'https://m.media-amazon.com/images/I/711wsjBtWeL._SX522_.jpg',
      price: 599,
    },
    {
      id: 5,
      name: 'Macbook Air 2012',
      description:
        'The fact that Apple has consistently been at the cutting edge of innovation makes it very well-liked and in high demand among mobile buyers. Since the iPhone has outperformed every element of the mobile industry, ',
      imageUrl: 'https://m.media-amazon.com/images/I/711wsjBtWeL._SX522_.jpg',
      price: 499,
    },
    {
      id: 6,
      name: 'iPhone 14 Pro Max',
      description:
        'The fact that Apple has consistently been at the cutting edge of innovation makes it very well-liked and in high demand among mobile buyers. Since the iPhone has outperformed every element of the mobile industry, ',
      imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663790290203',
      price: 1299,
    },
  ];
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
            <Text style={{textAlign: 'center'}}>{bedgecount}</Text>
          </View>
        </View>
      ),
    });
  }, [bedgecount]);
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
      <TouchableOpacity onPress={()=>setBedgeCount(bedgecount+1)} style={styles.buttonContainer}>
        <Text>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView style={{flex: 1}}>
      {CartData &&
        CartData.map(item => (
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
