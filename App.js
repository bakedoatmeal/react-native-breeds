import { StatusBar } from 'expo-status-bar';
import { cats , dogs } from './breeds'
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, TextInput, KeyboardAvoidingView} from 'react-native';
import Item from './Item';
import Details from './Details';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {

  const [search, setSearch] = useState('');
  const [data, setData] = useState(cats);
  const [species, setSpecies] = useState('cats');

  const handleSearch = (input) => {
    setSearch(input);
    const filteredData = species === 'dogs' ? dogs : cats
    setData(filteredData.filter((value) => { 
        return value.breed.includes(input)
      }
    ))
  }

  return (<View style={styles.container}>
    <SafeAreaView>
      <KeyboardAvoidingView>
        <TextInput style={styles.input} value={search} placeholder='Search for a breed' onChangeText={(text) => handleSearch(text)}></TextInput>
      </KeyboardAvoidingView> 
      <View style={{display: 'flex', flexDirection: 'row', padding: 20}}>
      <Button color={'blue'} title='Show Dogs' disabled={species === 'dogs'} onPress={() => {setSpecies('dogs')
        setData(dogs)
        setSearch('')}}>
      </Button>
      <Button color={'blue'} title='Show Cats' disabled={species === 'cats'} onPress={() => {
        setSpecies('cats')
        setData(cats)
        setSearch('')}}>
        Cats
      </Button>
    
      </View>

      <Text style={styles.title}>{species === 'dogs' ? 'Dogs by Breed' : 'Cats by Breed'}</Text>
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Cats & Dogs"}} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
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
