import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Linking, Platform} from 'react-native';

import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

const ListItemHomeScreen = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  // Fake item -
  // const addsItem = [
  //   {
  //     name: 'Maruti 800',
  //     desc: 'This is 2010 modal of Maruti 800.',
  //     year: '2010',
  //     price: '1,45,000',
  //     phone: '0123456789',
  //     image:
  //       'https://gaadiwaadi.com/wp-content/uploads/2020/07/m800-electric-1.jpg',
  //   },
  //   {
  //     name: 'XUV 700',
  //     desc: 'This is 2021 modal of XUV 700.',
  //     year: '2021',
  //     price: '12,45,000',
  //     phone: '1234567890',
  //     image:
  //       'https://images.news18.com/ibnlive/uploads/2021/05/1621257087_mahindra-xuv700.jpg',
  //   },
  //   {
  //     name: 'Swift Dezire',
  //     desc: 'This is 2018 modal of Swift Dezire.',
  //     year: '2018',
  //     price: '11,45,000',
  //     phone: '2345678901',
  //     image:
  //       'https://media.zigcdn.com/media/content/2015/Mar/maruti-suzuki-swift-dzire-facelift-reiview-road-test-images-photos-zigwheels-03102015-t06.jpg',
  //   },
  //   {
  //     name: 'Maruti 800',
  //     desc: 'This is 2010 modal of Maruti 800.',
  //     year: '2010',
  //     price: '1,45,000',
  //     phone: '01234567891',
  //     image:
  //       'https://gaadiwaadi.com/wp-content/uploads/2020/07/m800-electric-1.jpg',
  //   },
  //   {
  //     name: 'XUV 700',
  //     desc: 'This is 2021 modal of XUV 700.',
  //     year: '2021',
  //     price: '12,45,000',
  //     phone: '12345678902',
  //     image:
  //       'https://images.news18.com/ibnlive/uploads/2021/05/1621257087_mahindra-xuv700.jpg',
  //   },
  //   {
  //     name: 'Swift Dezire',
  //     desc: 'This is 2018 modal of Swift Dezire.',
  //     year: '2018',
  //     price: '11,45,000',
  //     phone: '23456789015',
  //     image:
  //       'https://media.zigcdn.com/media/content/2015/Mar/maruti-suzuki-swift-dzire-facelift-reiview-road-test-images-photos-zigwheels-03102015-t06.jpg',
  //   },
  // ];

  // cretae getAdsDetails function for get ads data from firestore database
  const getsAdsDetails = async () => {
    const querSnap = await firestore().collection('ads').get();
    const result = querSnap.docs.map(docSnap => docSnap.data());
    // console.log(result);
    setItems(result);
  };

  // This function used for open Dial pad.
  const dialPadOpen = phone => {
    if (Platform.OS === 'android') {
      //This linking for android
      Linking.openURL(`tel:${phone}`);
    } else {
      //This linking for ios
      Linking.openURL(`telprompt:${phone}`);
    }
  };

  //used "useEffect" - take "function" as a argument, second option pass "empty dependency - means empty array"
  // empty dependency - used beacuse we need used useEffect only one time.
  useEffect(() => {
    getsAdsDetails();
    return () => {
      console.log('cleanup');
    };
  }, []);

  // this is render function used for return add's one by one - Maruti 800, XUV 700, Swift Desire
  const renderItem = item => {
    return (
      <Card
        style={{
          margin: 10,
          borderRadius: 20,
          padding: 5,
          elevation: 10,
        }}>
        <Card.Title title={item.name} />
        <Card.Content>
          <Paragraph>{item.desc}</Paragraph>
          <Paragraph>{item.year}</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: item.image}} />
        <Card.Actions>
          <Button>{item.price}</Button>
          <Button onPress={() => dialPadOpen()}>Call Seller</Button>
        </Card.Actions>
      </Card>
    );
  };

  // Main return function
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items.reverse()} //give array or data for flatList
        keyExtractor={item => item.phone} // take unique key for item - unique key is phone number.
        // renderItem={({item}) => <Text>{item.name}</Text>}
        renderItem={({item}) => renderItem(item)}
        onRefresh={() => {
          setLoading(true);
          getsAdsDetails();
          setLoading(false);
        }}
        refreshing={loading}
      />
    </View>
  );
};

export default ListItemHomeScreen;
