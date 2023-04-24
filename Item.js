import React from 'react'
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native'

function Item({ data, navigation }) {
  let total = 0;

  for (const [key, value] of Object.entries(data)) {
    if (key !== 'breed') {
      total += value;
    }
  }

	return (
    <TouchableHighlight
    onPress={() =>
      navigation.push('Details', {
      data: data,
      })
    }
  >
      <View style={styles.container}>
        <Text style={styles.title}>{data.breed} {(total / Object.keys(data).length - 1).toFixed(1)}</Text>
      </View>
    </TouchableHighlight>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    borderBottomColor: 'green',
    borderBottomWidth: 1,
  },
  title: {
    color: 'green',
    fontWeight: 'bold',
    alignItems: 'flex-start',
    fontSize: 20,
  }, 
  attr: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});


export default Item