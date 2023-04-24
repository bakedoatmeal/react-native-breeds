

import { View, Text, StyleSheet, Button, TouchableHighlight, ScrollView } from 'react-native'

export default function Details({route, navigation}) {

  const attributes = [];
  const {data} = route.params;

  for (const [key, value] of Object.entries(data)) {
    if (key !== 'breed') {
      const stars = Array(value).fill('⭐️');
      attributes.push(
      <View  key={`${data.breed}${key}`} style={styles.listItem}>
        <Text>{key}</Text>
        <Text>{stars}</Text>
      </View>
      )
    }
  }

  return (
    <View>
      <Text style={styles.header}>{data.breed}</Text>
      <ScrollView>
      {attributes}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    paddingBottom: 10, 
    paddingTop: 10,
    paddingLeft: 10
  }, 
  listItem: {
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 10
  }
})