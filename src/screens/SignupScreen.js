
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import {TextInput} from 'react-native-paper';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{alignItems: 'center', backgroundColor: 'skyblue'}}>
        <Image
          source={require('../assets/images/logo_image_large.png')}
          style={{height: 150, width: 150, margin: 20}}
        />
        <Text style={{fontSize: 22, margin: 5}}>Welcome to Signup!</Text>
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
            marginVertical:10
          }}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          mode="flat"
          label="PASSWORD"
          placeholder="write password here.."
          value={password}
          numberOfLines={1}
          style={{
            backgroundColor: 'transparent',
            paddingHorizontal: 0,
            marginVertical:10
          }}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          mode="flat"
          label="CONFIRM PASSWORD"
          secureTextEntry={true}
          numberOfLines={1}
          placeholder="write confirm password here.."
          value={confirmPassword}
          style={{
            backgroundColor: 'transparent',
            paddingHorizontal: 0,
            marginVertical:10
          }}
          onChangeText={text => setConfirmPassword(text)}
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
          }}>
          <Text style={{margin: 5, fontSize: 16, fontWeight:'bold'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{marginTop: 20, marginBottom: 30, fontSize:18, fontWeight:'500'}}>Already have account? Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

