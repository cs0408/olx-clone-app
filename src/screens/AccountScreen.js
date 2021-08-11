import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, TouchableOpacity, FlatList} from 'react-native';

import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

import auth from '@react-native-firebase/auth';

import firestore from '@react-native-firebase/firestore';

const AccountScreen = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  //get details
  const getsAdsDetails = async () => {
    const querSnap = await firestore().collection('ads').where('userId','==',auth().currentUser.uid).get()
    const result = querSnap.docs.map(docSnap => docSnap.data());
    // console.log(result);
    setItems(result);
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

  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 10}}>
      <View
        style={{
          paddingHorizontal: 40,
          paddingVertical: 20,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 36, marginVertical: 5}}>
          {auth().currentUser.email}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'skyblue',
            borderRadius: 10,
            height: 40,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 15,
          }}
          onPress={() => auth().signOut()}>
          <Text style={{margin: 5, fontSize: 16, fontWeight: 'bold'}}>
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items} //give array or data for flatList
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

export default AccountScreen;
