
import React, {useState} from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';

import {TextInput} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const AddItemScreen = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <ScrollView
      style={{backgroundColor: '#ffffff'}}
      showsVerticalScrollIndicator={false}>
      <Text
        style={{
          marginVertical: 50,
          fontSize: 24,
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
          keyboardType="phone-pad"
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
          keyboardType="phone-pad"
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
          keyboardType="phone-pad"
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
            alignItems:'center',
            justifyContent:'center',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 30,
          }}>
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
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{margin: 5, fontSize: 16, fontWeight: 'bold'}}>
            ADD ITEM
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddItemScreen;
