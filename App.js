import { StatusBar } from 'expo-status-bar';
import { cats } from './breeds'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';
import Item from './Item';
import { useState } from 'react';

export default function App() {
  const [search, setSearch] = useState('');

  const catsText = cats.map((cat, index) => {
    return <Item title={`${index} ${cat.breed}`} />
  })

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <KeyboardAvoidingView>
          <TextInput value={search} onChangeText={(text) => setSearch(text)}></TextInput>
        </KeyboardAvoidingView>
        <Text style={{fontSize: 40}}>CATS & DOGS</Text>
        <FlatList data={cats}
          renderItem={({item, index}) => {
            return <Item data={item} />
          }}
          keyExtractor={item => item.breed} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
