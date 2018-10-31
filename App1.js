import React from 'react';
import { Text, View,Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import FirstScreen from './src/FirstScreen';
import SecondScreen from './src/SecondScreen';
import Icon from 'react-native-vector-icons/Ionicons';
export default createBottomTabNavigator({
    Tab1: {
      screen:FirstScreen,
      navigationOptions:{
        tabBarLable:"Home",
        tabBarIcon: ({tintColor}) =>(
          <Image
          style={{width:30,height:30}}
              source={require('./src/home.png')}
          />
        )
      }
    },
    Tab2: {
      screen:SecondScreen,
      navigationOptions:{
        tabBarLable:"Home",
        tabBarIcon: ({tintColor}) =>(
          <Image
          style={{width:30,height:30}}
              source={require('./src/propfile.png')}
          />
        )
      }
    },
    Tab3: {
      screen:SecondScreen,
      navigationOptions:{
        tabBarLable:"Home",
        tabBarIcon: ({tintColor}) =>(
          <Image
          style={{width:30,height:30}}
              source={require('./src/propfile.png')}
          />
        )
      }
    },
    Tab4
    : {
      screen:SecondScreen,
      navigationOptions:{
        tabBarLable:"Home",
        tabBarIcon: ({tintColor}) =>(
          <Image
          style={{width:30,height:30}}
              source={require('./src/propfile.png')}
          />
        )
      }
    }
},{
  tabBarOptions: {
      style: {
        backgroundColor: '#D3D3D3',
        height:60
      },
      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
      },
    },
});
