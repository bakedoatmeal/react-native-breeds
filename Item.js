import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Item({ data }) {
  const attributes = [];
  let total = 0;

  for (const [key, value] of Object.entries(data)) {
    if (key !== 'breed') {
      total += value;
      const stars = Array(value).fill('⭐️');
      attributes.push(
      <View style={styles.attr} key={`${data.breed}${key}`}>
        <Text>{key}</Text>
        <Text>{stars}</Text>
      </View>
      )
    }
  }

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{data.breed} {(total / Object.keys(data).length - 1).toFixed(1)}</Text>
      {attributes}
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 30,
    borderBottomColor: 'green',
    borderBottomWidth: 1,
  },
  title: {
    color: 'green',
    fontWeight: 'bold',
    alignItems: 'flex-start',
    fontSize: 20,
    padding: 4,
  }, 
  attr: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});


export default Item