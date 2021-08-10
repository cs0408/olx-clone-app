import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';

import auth from '@react-native-firebase/auth';

const AccountScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{paddingHorizontal: 40, paddingVertical:20, alignItems: 'center'}}>
        <Text style={{fontSize: 36, marginVertical: 5}}>{auth().currentUser.email}</Text>
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
          onPress={()=>auth().signOut()}>
          <Text style={{margin: 5, fontSize: 16, fontWeight: 'bold'}}>
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'red'}}></ScrollView>
    </View>
  );
};

export default AccountScreen;
