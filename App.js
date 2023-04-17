import { StatusBar } from 'expo-status-bar';
import { cats , dogs } from './breeds'
import { StyleSheet, Text, View, Switch, ScrollView, Button, SafeAreaView, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';
import Item from './Item';
import { useState } from 'react';

export default function App() {
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

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <KeyboardAvoidingView>
          <TextInput value={search} placeholder='Search for a breed' styles={styles.input} onChangeText={(text) => handleSearch(text)}></TextInput>
        </KeyboardAvoidingView> 
        <View style={{display: 'flex', flexDirection: 'row'}}>
        <Button title='Show Dogs' disabled={species === 'dogs'} onPress={() => {setSpecies('dogs')
      setData(dogs)
      setSearch('')}}></Button>
        <Button title='Show Cats' disabled={species === 'cats'} onPress={() => {
          setSpecies('cats')
          setData(cats)
          setSearch('')}}>
          Cats
        </Button>
      
        </View>

        <Text style={{fontSize: 40}}>CATS & DOGS</Text>
        <FlatList data={data}
          renderItem={({item, index}) => {
            return <Item data={item} />
          }}
          keyExtractor={item => item.breed} 
          style={{width: '100%'}}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
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
  input: {
    height: 100,
    margin: 30,
    backgroundColor: 'black',
    borderWidth: 1,
    padding: 40,
    border: '1px solid black',
    fontSize: '100px'
  },
});
