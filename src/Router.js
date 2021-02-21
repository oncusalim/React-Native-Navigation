

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Main, Second, Post, About} from './pages';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainComponent() {
  return(
    <Stack.Navigator>
      <Stack.Screen name= 'Anasayfa' component={Main} options={{title:'Home Page'}} />
      <Stack.Screen name= 'SecondPage' component={Second} options={{title:'Details'}} />
    </Stack.Navigator>
  )
}

function Router() {
  return (
   <NavigationContainer>
     <Tab.Navigator initialRouteName="Anasayfa">
       <Tab.Screen name='AnaSayfa' component={MainComponent} options={{title:'Main'}}/>
       <Tab.Screen name='AboutPage' component={About} options={{title:'About Us'}}/>
   
     </Tab.Navigator>
     
   </NavigationContainer>
  );
}

export default Router;