import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import {TextInput} from 'react-native-paper';

import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // function used for signup user
  const userLogin = async () => {
    if (!email || !password) {
      Alert.alert('Please fill all the fields');
      return;
    }
    // access "createUserWithEmailAndPassword" function from "auth" and pass first argument is 'email' and second argument is 'password'.
    try {
      const result = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
    } catch (err) {
      Alert.alert('Something is wrong please try different password or email.');
    }
  };

  //main return function
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{alignItems: 'center', backgroundColor: 'skyblue'}}>
        <Image
          source={require('../assets/images/logo_image_large.png')}
          style={{height: 150, width: 150, margin: 20}}
        />
        <Text style={{fontSize: 22, margin: 5}}>Please login to continue!</Text>
      </View>
      <View
        style={{
          margin: 20,
          paddingHorizontal: 20,
          justifyContent: 'space-evenly',
        }}>
        <TextInput
          label="EMAIL"
          mode="flat"
          placeholder="write email here.."
          value={email}
          keyboardType='email-address'
          numberOfLines={1}
          style={{
            backgroundColor: 'transparent',
            paddingHorizontal: 0,
            marginTop: 20,
            marginBottom: 20,
          }}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          mode="flat"
          label="PASSWORD"
          placeholder="write password here.."
          value={password}
          secureTextEntry={true}
          numberOfLines={1}
          style={{
            backgroundColor: 'transparent',
            paddingHorizontal: 0,
            marginTop: 20,
            marginBottom: 20,
          }}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          paddingHorizontal:40
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'skyblue',
            borderRadius: 10,
            height:40,
            width:'100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            marginTop: 20,
          }}
          onPress={()=>userLogin()}>
          <Text style={{margin: 5, fontSize: 16, fontWeight:'bold'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{marginTop: 20, marginBottom: 30, fontSize:18, fontWeight:'500'}}>Don't have an account? Signup</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
