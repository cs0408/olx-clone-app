import React, {useState} from 'react';
import {Text, ScrollView, View, TouchableOpacity, Alert} from 'react-native';

import {TextInput} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const AddItemScreen = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');

  //this function used for post data into firestore database
  const postData = async () => {
    if (!name || !desc || !year || !price || !phone) {
      Alert.alert('Please fill all the fields');
      return;
    }
    try {
      // make collection name is - 'ads'(If this "ads" is not exits then create automatically.)
      // we need document id of 'ads' - but not used doc ".doc()"
      await firestore()
        .collection('ads')
        // we need array for post some data - so cretae add
        .add({
          // name: name,
          // desc: desc,
          // year: year,
          // price: price,
          // phone: phone,
          // image: image,
          name,
          desc,
          year,
          price,
          phone,
          image:
            'https://images.news18.com/ibnlive/uploads/2021/05/1621257087_mahindra-xuv700.jpg',
          userId: auth().currentUser.uid,
        });
      Alert.alert('Posted!!');
      // empty value of field after posted
      setName('');
      setDesc('');
      setYear('');
      setPrice('');
      setPhone('');
      setImage('');
    } catch (err) {
      Alert.alert('Something went wrong.');
    }
  };

  //function for openCamera
  const openCamera = () => {
    launchCamera({quality: 0.5}, fileobj => {
      // console.log(fileobj);
      Alert.alert(
        'The image which is already in the Database was uploaded only.',
      );
    });
  };

  return (
    <View style={{flex:1, backgroundColor: '#ffffff', paddingBottom:10}}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            marginVertical: 30,
            fontSize: 32,
            fontWeight: 'bold',
            color: 'skyblue',
            textAlign: 'center',
          }}>
          Create Add for Selling
        </Text>
        <View style={{paddingHorizontal: 40}}>
          <TextInput
            mode="outlined"
            label="ITEM NAME"
            placeholder="write your item name..."
            value={name}
            numberOfLines={1}
            backgroundColor="transparent"
            style={{
              paddingHorizontal: 0,
              marginVertical: 10,
            }}
            onChangeText={text => setName(text)}
          />
          <TextInput
            mode="outlined"
            label="DESCRIPTION"
            placeholder="Describe here what you are selling..."
            value={desc}
            backgroundColor="transparent"
            numberOfLines={3}
            style={{
              paddingHorizontal: 0,
              marginVertical: 10,
            }}
            onChangeText={text => setDesc(text)}
          />
          <TextInput
            mode="outlined"
            label="YEAR"
            placeholder="write year of  purchase..."
            value={year}
            keyboardType="number-pad"
            backgroundColor="transparent"
            numberOfLines={1}
            style={{
              paddingHorizontal: 0,
              marginVertical: 10,
            }}
            onChangeText={text => setYear(text)}
          />
          <TextInput
            mode="outlined"
            label="PRICE"
            keyboardType="number-pad"
            placeholder="write price in INR..."
            value={price}
            numberOfLines={1}
            backgroundColor="transparent"
            style={{
              paddingHorizontal: 0,
              marginVertical: 10,
            }}
            onChangeText={text => setPrice(text)}
          />
          <TextInput
            mode="outlined"
            label="CONTACT NO."
            backgroundColor="transparent"
            placeholder="write contact number here..."
            value={phone}
            numberOfLines={1}
            keyboardType="number-pad"
            style={{
              paddingHorizontal: 0,
              marginVertical: 10,
            }}
            onChangeText={text => setPhone(text)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'skyblue',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 20,
            }}
            onPress={() => openCamera()}>
            <Entypo name="camera" size={15} color="#000000" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: 15,
              }}>
              UPLOAD PHOTO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'skyblue',
              borderRadius: 10,
              height: 40,
              width: '100%',
              marginTop: 20,
              marginBottom: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            // disabled={image?false:true}
            onPress={() => postData()}>
            <Text style={{margin: 5, fontSize: 16, fontWeight: 'bold'}}>
              ADD ITEM
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddItemScreen;
