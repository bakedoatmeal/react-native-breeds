import { StatusBar } from 'expo-status-bar';
import { cats , dogs } from './breeds'
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, TextInput, KeyboardAvoidingView} from 'react-native';
import Item from './Item';
import AboutTab from './AboutTab';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BreedsDisplay from './BreedsDisplay';
import { FontAwesomeIcon } from 'react-native-vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="BreedsDisplay"
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     const icon = route.name === 'Dogs' ? 'fa-dog' : 'fa-cat'
        //     return <FontAwesomeIcon icon={dogs} />
        //   },
        //   tabBarActiveTintColor: 'tomato',
        //   tabBarInactiveTintColor: 'gray'
        // })}
      >
        <Tab.Screen name="Cats" children={() => <BreedsDisplay dogsOrCats='cats'/>}/>
        <Tab.Screen name="Dogs" children={() => <BreedsDisplay dogsOrCats='dogs'/>}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100, 
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    paddingLeft: 20,
    fontSize: 40
  },
  button: {
    backgroundColor: 'blue'
  }, 
  input: {
    padding: 20,
  }
});
