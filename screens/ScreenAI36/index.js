import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
const DATA = [{
  id: '1',
  title: 'Prescription 1',
  status: 'Fulfilled'
}, {
  id: '2',
  title: 'Prescription 2',
  status: 'Refill Requested'
}, {
  id: '3',
  title: 'Prescription 3',
  status: 'Fulfilled'
}];

const Item = ({
  title,
  status
}) => <View style={styles.item}>
    <Image style={styles.image} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <View style={styles.details}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Manage</Text>
    </TouchableOpacity>
  </View>;

const FulfillmentRefillScreen = () => {
  const renderItem = ({
    item
  }) => <Item title={item.title} status={item.status} />;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Fulfillment & Refill Management</Text>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    padding: 20
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  details: {
    flex: 1,
    marginLeft: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  status: {
    fontSize: 16,
    color: '#999'
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default FulfillmentRefillScreen;