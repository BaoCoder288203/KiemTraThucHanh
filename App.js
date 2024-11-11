import { SafeAreaView,TextInput, Image, Button, View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Add from './pages/Add';
import 'react-native-gesture-handler'; 
import { Provider } from 'react-redux';
import { store } from './Redux_Toolkit/store';

function Login({ navigation, route }) {
  const product = route.params?.currentProduct;
  const [email,setEmail] = useState('');

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{
        padding:10,
      }}>
        <Text style={{textAlign:'center',fontWeight:'bold'}}>
          A premium online store for 
        </Text>
        <Text style={{textAlign:'center',fontWeight:'bold'}}>
          sporter and their stylish choice
        </Text>
      </View>
      <View style={{ flex: 1, padding: 20 ,alignItems:'center' }}>
        <Image style={{
          width:225,
          height:210,
        }} source={require('./bike.png')} />
      </View>
      <View style={{ flex: 1, padding: 20, alignItems:'center' }}>
        <View style={{flex:1}}>
          <Text style={{ color: 'black', fontWeight:'bold',fontSize: 25,textAlign:'center' }}>POWER BIKE </Text>
          <Text style={{ color: 'black', fontWeight:'bold',fontSize: 25,textAlign:'center' }}>SHOP</Text>
        </View>
        <TouchableOpacity style={{
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor: '#E94141',
          paddingVertical:10,
          paddingHorizontal:80,
          borderRadius:50,
        }} 
        onPress={() => navigation.navigate('Home', { email : email })}>
          <Text style={{
            color:'white',
            fontWeight:'bold',
          }}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ headerShown: false }}
          />
        <Stack.Screen 
          name="Add" 
          component={Add}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

