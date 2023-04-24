
import { StatusBar } from 'expo-status-bar';
import { cats , dogs } from './breeds'
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, TextInput, KeyboardAvoidingView} from 'react-native';
import Item from './Item';
import AboutTab from './AboutTab';

import Details from './Details';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function BreedsDisplay({navigation, dogsOrCats}) {
  console.log(dogsOrCats)
  return (
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Search" children={() => <HomeScreen navigation={navigation} dogsOrCats={dogsOrCats} />} />
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
  )
}

function HomeScreen({dogsOrCats}) {

  const [search, setSearch] = useState('');
  const [data, setData] = useState(dogsOrCats === 'dogs' ? dogs : cats);
  const navigation = useNavigation();
  console.log(navigation)

  const handleSearch = (input) => {
    setSearch(input);
    setData(data.filter((value) => { 
        return value.breed.includes(input)
      }
    ))
  }

  return (<View style={styles.container}>
    <SafeAreaView>
      <KeyboardAvoidingView>
        <TextInput style={styles.input} value={search} placeholder='Search for a breed' onChangeText={(text) => handleSearch(text)}></TextInput>
      </KeyboardAvoidingView> 
      <FlatList data={data}
        renderItem={({item, index}) => {
          return <Item data={item} navigation={navigation}/>
        }}
        keyExtractor={item => item.breed} 
        style={{width: '100%'}}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20, 
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
    marginLeft: 20
  }
});
